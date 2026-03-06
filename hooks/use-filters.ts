import {useSearchParams} from "next/dist/client/components/navigation";
import {useSet} from "react-use";
import React from "react";

interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}

export interface Filters {
    pizzaTypes: Set<string>;
    sizes: Set<string>;
    ingredients: Set<string>;
    prices: PriceProps;
}

export interface ReturnProps extends Filters {
    setPrices: (name: keyof PriceProps, value: number) => void;
    setPizzaTypes: (value: string) => void;
    setSizes: (value: string) => void;
    setIngredients: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [sizes, {toggle: toggleSizes}] = useSet(new Set<string>(searchParams.get('sizes') ? searchParams.get('sizes')?.split(',') || [] : []))

    const [selectedIngredients, {toggle: toggleIngredients}] = useSet(
        new Set<string>(searchParams.has('ingredients') ? searchParams.get('ingredients')?.split(',') || [] : [])
    )

    const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(new Set<string>(searchParams.has('pizzaTypes') ? searchParams.get('pizzaTypes')?.split(',') || [] : []))

    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
    });

    const onChangePrice = (name: keyof PriceProps, value: number) => {
        setPrices(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    return React.useMemo(
        // eslint-disable-next-line react-hooks/preserve-manual-memoization
        () => ({
            sizes,
            ingredients: selectedIngredients,
            pizzaTypes,
            prices,
            setPrices: onChangePrice,
            setPizzaTypes: togglePizzaTypes,
            setSizes: toggleSizes,
            setIngredients: toggleIngredients,
        }),
        [sizes, pizzaTypes, prices, selectedIngredients]
    );
}