import { reactive } from "vue";

export function useNewCategory() {
    const state = reactive({
        categories: [
            {
                id: 1,
                name: 'Holiday Decor',
                image: '/images/categories/section-11.jpg',
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
                name: 'New for the Holidays',
                image: '/images/categories/section-12.jpg',
                subCategory: [
                    { name: 'For Sale' },
                    { name: 'Last Chance' },
                ],
            },
          
        ],
    });

    return {
        categories: state.categories,
    };
}
