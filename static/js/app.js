import { createApp, ref } from './vue.esm-browser.prod.js'
import { useCatalog } from './modules/catalog.js'
import { useAuth } from "./modules/auth.js";
import { useCart } from "./modules/cart.js"
import { useIndexPage } from "./modules/index_page.js"
import { useCategories } from "./modules/categories.js"
import { useAbout } from "./modules/about.js";
import { useCheckout } from "./modules/checkout.js";
import { useContact } from "./modules/contact.js";
import { useProfile } from "./modules/profile.js";
import { useProduct } from "./modules/product.js";
// import { useSignUp } from "./modules/accounts.js";

const app = createApp({
    setup() {

        // Данные для каталога
        const categories = ref([
        {
            id: 1,
            name: 'Художественная литература',
            description: 'Романы, расскасы и поэзия для любителей художественного слова',
            count: 1245,
            icon: 'fas fa-pen-nib',
            isNew: false,
            isFavorite: false
        },
        {
            id: 2,
            name: 'Бизнес',
            description: 'Книги по менеджменту, финансам и предпринимательству',
            count: 876,
            icon: 'fas fa-chart-line',
            isNew: false,
            isFavorite: true
        },
        {
            id: 3,
            name: 'Саморазвитие',
            description: 'Личностный рост, продуктивность и мотивация',
            count: 932,
            icon: 'fas fa-brain',
            isNew: false,
            isFavorite: false
        },
        {
            id: 4,
            name: 'Технологии',
            description: 'Программирование, искусственный интеллект и инновации',
            count: 754,
            icon: 'fas fa-laptop-code',
            isNew: true,
            isFavorite: false
        },
        {
            id: 5,
            name: 'Научная фантастика',
            description: 'Футуристические миры и космические приключения',
            count: 632,
            icon: 'fas fa-rocket',
            isNew: false,
            isFavorite: false
        },
        {
            id: 6,
            name: 'История',
            description: 'Исторические исследования и популярные исторические книги',
            count: 543,
            icon: 'fas fa-landmark',
            isNew: false,
            isFavorite: true
        },
        {
            id: 7,
            name: 'Психология',
            description: 'Научные и популярные работы о человеческой психике',
            count: 421,
            icon: 'fas fa-head-side-virus',
            isNew: false,
            isFavorite: false
        },
        {
            id: 8,
            name: 'Здоровье',
            description: 'Медицина, фитнес и здоровый образ жизни',
            count: 389,
            icon: 'fas fa-heartbeat',
            isNew: false,
            isFavorite: false
        },
        {
            id: 9,
            name: 'Детективы',
            description: 'Захватывающие истории с интригующими загадками',
            count: 567,
            icon: 'fas fa-search',
            isNew: false,
            isFavorite: false
        },
        {
            id: 10,
            name: 'Фэнтези',
            description: 'Волшебные миры и эпические приключения',
            count: 498,
            icon: 'fas fa-hat-wizard',
            isNew: false,
            isFavorite: false
        },
        {
            id: 11,
            name: 'Кулинария',
            description: 'Рецепты, кулинарные путешествия и гастрономия',
            count: 321,
            icon: 'fas fa-utensils',
            isNew: true,
            isFavorite: false
        },
        {
            id: 12,
            name: 'Путешествия',
            description: 'Гид по странам, тревелоги и приключения',
            count: 287,
            icon: 'fas fa-globe-europe',
            isNew: false,
            isFavorite: false
        },
        {
            id: 13,
            name: 'Биографии',
            description: 'Жизнеописания известных людей и мемуары',
            count: 345,
            icon: 'fas fa-user-tie',
            isNew: false,
            isFavorite: false
        },
        {
            id: 14,
            name: 'Наука',
            description: 'Популярная наука и научно-популярная литература',
            count: 412,
            icon: 'fas fa-atom',
            isNew: false,
            isFavorite: false
        },
        {
            id: 15,
            name: 'Искусство',
            description: 'Живопись, архитектура, музыка и другие виды искусства',
            count: 298,
            icon: 'fas fa-palette',
            isNew: true,
            isFavorite: false
        },
        {
            id: 16,
            name: 'Философия',
            description: 'Классические и современные философские труды',
            count: 267,
            icon: 'fas fa-book-open',
            isNew: false,
            isFavorite: false
        }
    ]);

        return {
            categories,



            ...useIndexPage(),
            ...useCatalog(),
            ...useCategories(categories),
            ...useAbout(),
            ...useCheckout(),
            ...useContact(),
            ...useProfile(),
            ...useProduct(),

            ...useAuth(),
            ...useCart(),
        };
    }
})

app.config.compilerOptions.delimiters = ['[[', ']]']
app.mount('#app')  // Подключаем к блоку с id="app"
