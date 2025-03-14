import { reactive } from "vue";

export function useCategory() {
    const state = reactive({
        categories: [
            {
                id: 1,
                name: 'New',
                image: '/images/categories/section-1.jpg',
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
                image: '/images/categories/section-2.jpg',
                subCategory: [
                    { name: 'For Sale' },
                    { name: 'Last Chance' },
                ],
            },
            {
                id: 3,
                name: 'Kitchen',
                image: '/images/categories/section-3.jpg',
                subCategory: [
                    { name: 'Dishes' },
                    { name: 'Glasses' },
                    { name: 'For cooking' },
                ],
            },
            {
                id: 4,
                name: 'Bedroom',
                image: '/images/categories/section-4.jpg',
                subCategory: [
                    { name: 'King size bed' },
                    { name: 'Wardrobe' },
                    { name: 'Nightstand' },
                ],
            },
            {
                id: 5,
                name: 'Living room',
                image: '/images/categories/section-5.jpg',
                subCategory: [
                    { name: 'Sofas' },
                    { name: 'Armchairs' },
                ],
            },
            {
                id: 6,
                name: 'Lighting',
                image: '/images/categories/section-6.jpg',
                subCategory: [
                    { name: 'Chandeliers' },
                    { name: 'Local lighting' },
                    { name: 'Lamps' },
                ],
            },
            {
                id: 7,
                name: 'Decor',
                image: '/images/categories/section-7.jpg',
                subCategory: [
                    { name: 'Chandeliers' },
                    { name: 'Local lighting' },
                    { name: 'Lamps' },
                ],
            },
            {
                id: 8,
                name: 'Interior',
                image: '/images/categories/section-8.jpg',
                subCategory: [
                    { name: 'Chandeliers' },
                    { name: 'Local lighting' },
                    { name: 'Lamps' },
                ],
            },
            {
                id: 9,
                name: 'Holly',
                image: '/images/categories/section-9.jpg',
                subCategory: [
                    { name: 'Chandeliers' },
                    { name: 'Local lighting' },
                    { name: 'Lamps' },
                ],
            },
            {
                id: 10,
                name: 'Rug',
                image: '/images/categories/section-10.jpg',
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
