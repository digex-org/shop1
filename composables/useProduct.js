export function useProduct() {
    const state = reactive({
        products: [
            {
                id: 1,
                image: '/images/light.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Gwennie 24" Metal Wall Clock',
                price: 85,
                rating: 4.5,
                isLimitedTime: true,
                category: 'New',
            },
            {
                id: 2,
                image: '/images/plates.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Lowri 30.22" Wood Wall Clock',
                price: 79,
                rating: 4.7,
                isLimitedTime: false,
                category: 'New',
            },
            {
                id: 3,
                image: '/images/sofa.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: 75,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Bedroom',
            },
            {
                id: 4,
                image: '/images/prod1.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: 75,
                originalPrice: 93,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Lighting',
            },
            {
                id: 5,
                image: '/images/product.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: 75,
                originalPrice: 125,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Good Deal',
            },
            {
                id: 6,
                image: '/images/livingProduct.webp',
                description: 'A stylish wall clock for your living room.',
                images: ['/images/product.webp', '/images/product.webp', '/images/product.webp'],
                title: 'Tillie 2.1" Wood Wall Clock',
                price: 75,
                originalPrice: 175,
                rating: 4.3,
                isLimitedTime: true,
                category: 'Living Room',
            },
        ]
    });

    return {
        products: state.products,
    }
}
