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
            name: 'Умные браслеты',
            description: 'Носимые устройства для сна, пульса, HRV и активности',
            count: 1245,
            icon: 'fas fa-heartbeat',
            isNew: false,
            isFavorite: false
        },
        {
            id: 2,
            name: 'БАДы и нутрицевтики',
            description: 'Омега-3, магний, витамин D и поддержка ежедневной энергии',
            count: 876,
            icon: 'fas fa-capsules',
            isNew: false,
            isFavorite: true
        },
        {
            id: 3,
            name: 'Сон и восстановление',
            description: 'Средства для вечернего режима, релаксации и качества сна',
            count: 932,
            icon: 'fas fa-brain',
            isNew: false,
            isFavorite: false
        },
        {
            id: 4,
            name: 'Диагностика',
            description: 'Тесты, сенсоры и домашний мониторинг ключевых показателей',
            count: 754,
            icon: 'fas fa-vial',
            isNew: true,
            isFavorite: false
        },
        {
            id: 5,
            name: 'Фокус и энергия',
            description: 'Решения для концентрации, бодрости и устойчивой продуктивности',
            count: 632,
            icon: 'fas fa-rocket',
            isNew: false,
            isFavorite: false
        },
        {
            id: 6,
            name: 'Спорт и выносливость',
            description: 'Поддержка тренировок, восстановления и контроля нагрузки',
            count: 543,
            icon: 'fas fa-dumbbell',
            isNew: false,
            isFavorite: true
        },
        {
            id: 7,
            name: 'Ментальное здоровье',
            description: 'Антистресс, дыхание, светотерапия и спокойный режим дня',
            count: 421,
            icon: 'fas fa-head-side-virus',
            isNew: false,
            isFavorite: false
        },
        {
            id: 8,
            name: 'Здоровье сердца',
            description: 'Контроль давления, пульса и привычек для сердечно-сосудистой системы',
            count: 389,
            icon: 'fas fa-heartbeat',
            isNew: false,
            isFavorite: false
        },
        {
            id: 9,
            name: 'Питание',
            description: 'Метаболическое здоровье, контроль глюкозы и умные рационы',
            count: 567,
            icon: 'fas fa-apple-alt',
            isNew: false,
            isFavorite: false
        },
        {
            id: 10,
            name: 'Гаджеты для дома',
            description: 'Очистители воздуха, лампы, весы и станции микроклимата',
            count: 498,
            icon: 'fas fa-home',
            isNew: false,
            isFavorite: false
        },
        {
            id: 11,
            name: 'Гидратация',
            description: 'Электролиты, бутылки-трекеры и контроль водного баланса',
            count: 321,
            icon: 'fas fa-tint',
            isNew: true,
            isFavorite: false
        },
        {
            id: 12,
            name: 'Иммунитет',
            description: 'Сезонная поддержка, витамины и комплексные формулы',
            count: 287,
            icon: 'fas fa-shield-alt',
            isNew: false,
            isFavorite: false
        },
        {
            id: 13,
            name: 'Долголетие',
            description: 'Антиэйдж-подходы, клеточная энергия и здоровые привычки',
            count: 345,
            icon: 'fas fa-dna',
            isNew: false,
            isFavorite: false
        },
        {
            id: 14,
            name: 'Лабораторные наборы',
            description: 'Домашний сбор анализов и персональные панели здоровья',
            count: 412,
            icon: 'fas fa-atom',
            isNew: false,
            isFavorite: false
        },
        {
            id: 15,
            name: 'Осознанность',
            description: 'Дыхательные практики, медитация и управление стрессом',
            count: 298,
            icon: 'fas fa-spa',
            isNew: true,
            isFavorite: false
        },
        {
            id: 16,
            name: 'Персональные планы',
            description: 'Комплекты под цели: сон, энергия, стресс, спорт и здоровье',
            count: 267,
            icon: 'fas fa-clipboard-list',
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
