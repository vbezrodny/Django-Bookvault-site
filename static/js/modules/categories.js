import { ref, computed } from '../vue.esm-browser.prod.js'

export function useCategories(categories) {

    // Табы
    const tabs = ref([
        { id: 'popular', name: 'Популярные', count: 8 },
        { id: 'all', name: 'Все', count: categories.value.length },
        { id: 'new', name: 'Новые', count: categories.value.filter(c => c.isNew).length },
        { id: 'favorites', name: 'Избранное', count: categories.value.filter(c => c.isFavorite).length }
    ]);

    const activeTab = ref('popular');
    const searchQuery = ref('');

    // Вычисляемые свойства
    const filteredCategories = computed(() => {
        let result = [...categories.value];

        // Фильтрация по поиску
        if (searchQuery.value) {
            const query = searchQuery.value.toLowerCase();
            result = result.filter(category =>
                category.name.toLowerCase().includes(query) ||
                category.description.toLowerCase().includes(query)
            );
        }

        return result;
    });

    const popularCategories = computed(() => {
        return [...categories.value]
            .sort((a, b) => b.count - a.count)
            .slice(0, 8);
    });

    const newCategories = computed(() => {
        return categories.value.filter(category => category.isNew);
    });

    const favoriteCategories = computed(() => {
        return categories.value.filter(category => category.isFavorite);
    });

    const tabIndicatorStyle = computed(() => {
        const index = tabs.value.findIndex(tab => tab.id === activeTab.value);
        const width = 100 / tabs.value.length;
        return {
            width: `${width}%`,
            left: `${index * width}%`
        };
    });

    // Методы

    const toggleFavorite = (category) => {
        category.isFavorite = !category.isFavorite;
        // Обновляем счетчик в табе
        const favoritesTab = tabs.value.find(tab => tab.id === 'favorites');
        if (favoritesTab) {
            favoritesTab.count = categories.value.filter(c => c.isFavorite).length;
        }
    };

    return {
        tabs,
        activeTab,
        searchQuery,
        filteredCategories,
        popularCategories,
        newCategories,
        favoriteCategories,
        tabIndicatorStyle,
        toggleFavorite,
    };
}
