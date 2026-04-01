import { ref, computed, watch } from '../vue.esm-browser.prod.js'

export function useCatalog() {
    // const books = ref([
    //     {
    //         id: 1,
    //         title: 'Молчаливый пациент',
    //         author: 'Алекс Михаэлидес',
    //         price: 12.99,
    //         rating: 4,
    //         reviews: 1243,
    //         categoryId: 1,
    //         isNew: false,
    //         image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 2,
    //         title: 'Атомные привычки',
    //         author: 'Джеймс Клир',
    //         price: 14.99,
    //         rating: 5,
    //         reviews: 3421,
    //         categoryId: 3,
    //         isNew: true,
    //         image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 3,
    //         title: 'Психология денег',
    //         author: 'Морган Хаузел',
    //         price: 11.99,
    //         rating: 5,
    //         reviews: 2103,
    //         categoryId: 2,
    //         isNew: false,
    //         image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 4,
    //         title: 'Ученица',
    //         author: 'Тара Уэстовер',
    //         price: 10.99,
    //         rating: 4,
    //         reviews: 1876,
    //         categoryId: 1,
    //         isNew: true,
    //         image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 5,
    //         title: '1984',
    //         author: 'Джордж Оруэлл',
    //         price: 9.99,
    //         rating: 5,
    //         reviews: 4321,
    //         categoryId: 5,
    //         isNew: false,
    //         image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 6,
    //         title: 'Как устроена экономика',
    //         author: 'Ха-Джун Чанг',
    //         price: 13.99,
    //         rating: 4,
    //         reviews: 987,
    //         categoryId: 2,
    //         isNew: true,
    //         image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 7,
    //         title: 'Тонкое искусство пофигизма',
    //         author: 'Марк Мэнсон',
    //         price: 12.99,
    //         rating: 4,
    //         reviews: 2567,
    //         categoryId: 3,
    //         isNew: false,
    //         image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 8,
    //         title: 'Sapiens: Краткая история человечества',
    //         author: 'Юваль Ной Харари',
    //         price: 15.99,
    //         rating: 5,
    //         reviews: 3124,
    //         categoryId: 6,
    //         isNew: false,
    //         image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     },
    //     {
    //         id: 9,
    //         title: 'Чистый код',
    //         author: 'Роберт Мартин',
    //         price: 18.99,
    //         rating: 5,
    //         reviews: 1789,
    //         categoryId: 4,
    //         isNew: true,
    //         image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    //     }
    // ]);

    const books = ref([]);
    const categories = ref([]);

    // Загрузка данных из API
    async function fetchBooks() {
        const response = await fetch('/api/books/');
        books.value = await response.json();
    }

    async function fetchCategories() {
        const response = await fetch('/api/categories/');
        categories.value = await response.json();
    }

    fetchBooks();
    fetchCategories();

    // Фильтры
    const selectedCategories = ref([]);
    const priceRange = ref(30);
    const selectedRatings = ref([]);
    const sortBy = ref('popular');

    // Пагинация
    const currentPage = ref(1);
    const itemsPerPage = 6;

    // Вычисляемые свойства
    const minPrice = computed(() => 0);
    const maxPrice = computed(() => priceRange.value);

    const filteredBooks = computed(() => {
        let result = [...books.value];

        // Фильтрация по категориям
        if (selectedCategories.value.length > 0) {
            result = result.filter(book => selectedCategories.value.includes(book.categoryId));
        }

        // Фильтрация по цене
        result = result.filter(book => book.price <= maxPrice.value);

        // Фильтрация по рейтингу
        if (selectedRatings.value.length > 0) {
            result = result.filter(book => {
                return selectedRatings.value.some(rating => book.rating >= rating);
            });
        }

        // Сортировка
        switch (sortBy.value) {
            case 'newest':
                result.sort((a, b) => b.isNew - a.isNew);
                break;
            case 'price-low':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'popular':
            default:
                result.sort((a, b) => b.reviews - a.reviews);
        }

        return result;
    });

    const totalPages = computed(() => Math.ceil(filteredBooks.value.length / itemsPerPage));

    const paginatedBooks = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredBooks.value.slice(start, end);
    });

    const visiblePages = computed(() => {
        const pages = [];
        const maxVisible = 5;

        if (totalPages.value <= maxVisible) {
            for (let i = 1; i <= totalPages.value; i++) {
                pages.push(i);
            }
        } else {
            let start = Math.max(1, currentPage.value - 2);
            let end = Math.min(totalPages.value, start + maxVisible - 1);

            if (end - start + 1 < maxVisible) {
                start = Math.max(1, end - maxVisible + 1);
            }

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
        }

        return pages;
    });

    // Методы

    const resetFilters = () => {
        selectedCategories.value = [];
        priceRange.value = 30;
        selectedRatings.value = [];
        sortBy.value = 'popular';
        currentPage.value = 1;
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    const goToPage = (page) => {
        currentPage.value = page;
    };

    // Следим за изменениями фильтров и сбрасываем страницу
    watch([selectedCategories, priceRange, selectedRatings, sortBy], () => {
        currentPage.value = 1;
    });

    return {
        books,
        categories,
        selectedCategories,
        priceRange,
        selectedRatings,
        sortBy,
        minPrice,
        maxPrice,
        filteredBooks,
        currentPage,
        totalPages,
        paginatedBooks,
        visiblePages,
        resetFilters,
        prevPage,
        nextPage,
        goToPage,
    };
}