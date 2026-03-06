import React, {useRef} from "react";
import qs from "qs";
import {Filters} from "@/hooks/use-filters";
import {useRouter} from "next/dist/client/components/navigation";

export const useQueryFilters = (filters: Filters) => {
    const isMounted = useRef(false);
    const router = useRouter();

    React.useEffect(() => {
        if (isMounted.current) {
            const params = {
                ...filters.prices,
                pizzaTypes: Array.from(filters.pizzaTypes),
                sizes: Array.from(filters.sizes),
                ingredients: Array.from(filters.ingredients),
            }
            const queryString = qs.stringify(params, {arrayFormat: 'comma'})

            router.push(`?${queryString}`, {scroll: false})
        }

        isMounted.current = true;
    }, [filters])
}