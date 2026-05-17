import { ref, computed } from '../vue.esm-browser.prod.js'

export function useIndexPage() {

    const featuredBooks = ref([
        {
            id: 1,
            title: 'WHOOP 4.0 Health Band',
            author: 'Трекер восстановления',
            price: 29.99,
            rating: 4,
            reviews: 1243,
            image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Omega-3 Ultra',
            author: 'Нутрицевтик для фокуса',
            price: 18.99,
            rating: 5,
            reviews: 3421,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Sleep Recovery Kit',
            author: 'Набор для качества сна',
            price: 24.99,
            rating: 5,
            reviews: 2103,
            image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: 'Glucose Insight Sensor',
            author: 'Мониторинг метаболизма',
            price: 39.99,
            rating: 4,
            reviews: 1876,
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const testimonials = ref([
        {
            id: 1,
            name: 'Сара Джонсон',
            role: 'Биохакинг-энтузиаст',
            rating: 5,
            comment: 'BioVault помог собрать понятный набор для сна и восстановления. Наконец вижу цифры, а не просто угадываю самочувствие.',
            avatar: 'static/images/peoples/sora.jpg'
        },
        {
            id: 2,
            name: 'Майкл Чен',
            role: 'Технический предприниматель',
            rating: 5,
            comment: 'Умный браслет и магний из подборки стали частью вечернего режима. Сон стал стабильнее, а утренние созвоны легче.',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 3,
            name: 'Эмма Родригес',
            role: 'Студентка',
            rating: 4,
            comment: 'Брала витамин D, омега-3 и трекер воды. Удобно, что все объяснено простым языком и без лишней мистики.',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        }
    ]);

    return {
        featuredBooks,
        testimonials,
    }
}
