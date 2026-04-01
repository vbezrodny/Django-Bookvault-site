import { ref, computed } from '../vue.esm-browser.prod.js'

export function useIndexPage() {

    const featuredBooks = ref([
        {
            id: 1,
            title: 'Молчаливый пациент',
            author: 'Алекс Михаэлидес',
            price: 12.99,
            rating: 4,
            reviews: 1243,
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Атомные привычки',
            author: 'Джеймс Клир',
            price: 14.99,
            rating: 5,
            reviews: 3421,
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Психология денег',
            author: 'Морган Хаузел',
            price: 11.99,
            rating: 5,
            reviews: 2103,
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            title: 'Ученица',
            author: 'Тара Уэстовер',
            price: 10.99,
            rating: 4,
            reviews: 1876,
            image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const testimonials = ref([
        {
            id: 1,
            name: 'Сара Джонсон',
            role: 'Книжный блогер',
            rating: 5,
            comment: 'BookVault полностью изменил мой опыт чтения. Подборка книг невероятная, а цены непревзойденные.',
            avatar: 'static/images/peoples/sora.jpg'
        },
        {
            id: 2,
            name: 'Майкл Чен',
            role: 'Технический предприниматель',
            rating: 5,
            comment: 'Как занятой профессионал, я ценю мгновенный доступ к бизнес-литературе, которая помогает мне оставаться впереди в моей отрасли.',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
            id: 3,
            name: 'Эмма Родригес',
            role: 'Студентка',
            rating: 4,
            comment: 'Учебники, которые мне нужны для курсов, здесь намного доступнее, чем где-либо еще. Очень рекомендую!',
            avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
        }
    ]);

    return {
        featuredBooks,
        testimonials,
    }
}