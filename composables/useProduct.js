import {reactive, computed} from "vue";

export function useProduct() {
    const state = reactive({
        products: [
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Gwennie 24" Metal Wall Clock',
                price: '$85',
                rating: '4.5/5',
                isLimitedTime: true,
                category: 'New',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Lowri 30.22" Wood Wall Clock',
                price: '$79',
                rating: '4.7/5',
                isLimitedTime: false,
                category: 'New',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: '$75',
                originalPrice: '$145',
                rating: '4.3/5',
                isLimitedTime: true,
                category: 'Bedroom',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: '$75',
                originalPrice: '$145',
                rating: '4.3/5',
                isLimitedTime: true,
                category: 'Lighting',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: '$75',
                originalPrice: '$145',
                rating: '4.3/5',
                isLimitedTime: true,
                category: 'Good Deal',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: '$75',
                originalPrice: '$145',
                rating: '4.3/5',
                isLimitedTime: true,
                category: 'Good Deal',
            },
            {
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: [
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                    '/images/product.webp',
                ],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: '$75',
                originalPrice: '$145',
                rating: '4.3/5',
                isLimitedTime: true,
                category: 'Good Deal',
            },
        ]
    });

    return {
        products: state.products,
    }
}