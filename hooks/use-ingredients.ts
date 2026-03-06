import React from "react";
import {Api} from "@/services/api-client";
import {Ingredient} from "@/prisma/app/generated/prisma-client";

export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(true);
        Api.ingredients.getAll()
            .then((ingredients: Ingredient[]) => setIngredients(ingredients))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, [])

    return {
        ingredients,
        loading,
    }
}