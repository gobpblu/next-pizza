export const categories = [
    {
        name: 'Пиццы',
    },
    {
        name: 'Завтраки',
    },
    {
        name: 'Закуски',
    },
    {
        name: 'Коктейли',
    },
    {
        name: 'Напитки',
    },
]

export const ingredients = [
    {
        name: 'Сырный бортик',
        price: 179,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png',
    },
    {
        name: 'Сливочная моцарелла',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png',
    },
    {
        name: 'Сыры чеддер и пармезан',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796',
    },
    {
        name: 'Острый перец халапеньо',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png',
    },
    {
        name: 'Нежный цыпленок',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A',
    },
    {
        name: 'Шампиньоны',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324',
    },
    {
        name: 'Бекон',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA637AAB68F',
    },
    {
        name: 'Ветчина',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61',
    },
    {
        name: 'Пикантная пепперони',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3',
    },
    {
        name: 'Острая чоризо',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027',
    },
    {
        name: 'Маринованные огурчики',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B',
    },
    {
        name: 'Свежие томаты',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67',
    },
    {
        name: 'Красный лук',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C',
    },
    {
        name: 'Сочные ананасы',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0',
    },
    {
        name: 'Итальянские травы',
        price: 39,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png',
    },
    {
        name: 'Сладкий перец',
        price: 59,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B',
    },
    {
        name: 'Кубики брынзы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349',
    },
    {
        name: 'Митболы',
        price: 79,
        imageUrl:
            'https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png',
    },
].map((obj, index) => ({id: index + 1, ...obj}))

export const products = [
    {
        name: 'Омлет с ветчиной и грибами',
        imageUrl: '/images/omelet_with_ham_and_mushrooms.webp',
        categoryId: 2,
    },
    {
        name: 'Омлет с пепперони',
        imageUrl: '/images/omelet_with_pepperoni.webp',
        categoryId: 2,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/images/coffee_latte.webp',
        categoryId: 2,
    },
    {
        name: 'Дэнвич ветчина и сыр',
        imageUrl: '/images/sandwich_ham_and_cheese.webp',
        categoryId: 3,
    },
    {
        name: 'Куриные наггетсы',
        imageUrl: '/images/chicken_nuggets.webp',
        categoryId: 3,
    },
    {
        name: 'Картофель из печи с соусом 🌱',
        imageUrl: '/images/potatoes_from_oven_with_sauce.webp',
        categoryId: 3,
    },
    {
        name: 'Додстер',
        imageUrl: '/images/dodster.webp',
        categoryId: 3,
    },
    {
        name: 'Острый Додстер 🌶🌶',
        imageUrl: '/images/sharp_dodster.webp',
        categoryId: 3,
    },
    {
        name: 'Банановый молочный коктейль',
        imageUrl: '/images/banana_milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Карамельное яблоко молочный коктейль',
        imageUrl: '/images/caramel_apple_milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Молочный коктейль с печеньем Орео',
        imageUrl: '/images/milk_shake_with_oreo_cookies.webp',
        categoryId: 4,
    },
    {
        name: 'Классический молочный коктейль 👶',
        imageUrl: '/images/classic_milkshake.webp',
        categoryId: 4,
    },
    {
        name: 'Ирландский Капучино',
        imageUrl: '/images/irish_cappuccino.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Карамельный капучино',
        imageUrl: '/images/caramel_cappuccino_coffee.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Кокосовый латте',
        imageUrl: '/images/coconut_latte_coffee.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Американо',
        imageUrl: '/images/americano_coffee.webp',
        categoryId: 5,
    },
    {
        name: 'Кофе Латте',
        imageUrl: '/images/coffee_latte.webp',
        categoryId: 5,
    },
];