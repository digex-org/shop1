import { reactive } from "vue";

export function useCategory() {
    const state = reactive({
        categories: [
            {
                id: 1,
                name: 'New',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'New in Kitchen' },
                    { name: 'New in Bedroom' },
                    { name: 'New in Living room' },
                    { name: 'New in Bathroom' },
                    { name: 'New in Outdoor' },
                    { name: 'New in Lighting' },
                ],
            },
            {
                id: 2,
                name: 'Good Deal',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'For Sale' },
                    { name: 'Last Chance' },
                ],
            },
            {
                id: 3,
                name: 'Kitchen',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'Dishes' },
                    { name: 'Glasses' },
                    { name: 'For cooking' },
                ],
            },
            {
                id: 4,
                name: 'Bedroom',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'King size bed' },
                    { name: 'Wardrobe' },
                    { name: 'Nightstand' },
                ],
            },
            {
                id: 5,
                name: 'Living room',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'Sofas' },
                    { name: 'Armchairs' },
                ],
            },
            {
                id: 6,
                name: 'Lighting',
                image: '/images/product.webp',
                subCategory: [
                    { name: 'Chandeliers' },
                    { name: 'Local lighting' },
                    { name: 'Lamps' },
                ],
            },
        ],
    });

    return {
        categories: state.categories,
    };
}
