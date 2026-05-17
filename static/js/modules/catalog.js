import { ref, computed, watch } from '../vue.esm-browser.prod.js'

export function useCatalog() {
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
