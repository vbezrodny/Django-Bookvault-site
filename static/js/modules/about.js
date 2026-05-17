import { ref, computed } from '../vue.esm-browser.prod.js'

export function useAbout() {
    // Статистика
    const stats = ref({
        books: 1250,
        users: 85000,
        categories: 32,
        years: 13
    });

    // Команда
    const team = ref([
        {
            id: 1,
            name: 'Алексей Петров',
            position: 'Основатель & CEO',
            bio: 'Основатель BioVault с опытом в wellness-проектах, аналитике здоровья и цифровых продуктах.',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            social: [
                { name: 'twitter', icon: 'fab fa-twitter', link: '#' },
                { name: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' }
            ]
        },
        {
            id: 2,
            name: 'Елена Смирнова',
            position: 'Нутрициолог',
            bio: 'Курирует подборки БАДов, протоколы приема и понятные рекомендации по нутрицевтикам.',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            social: [
                { name: 'twitter', icon: 'fab fa-twitter', link: '#' },
                { name: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' }
            ]
        },
        {
            id: 3,
            name: 'Дмитрий Иванов',
            position: 'CTO',
            bio: 'Отвечает за технологическую платформу, интеграции трекеров и персональные рекомендации.',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            social: [
                { name: 'github', icon: 'fab fa-github', link: '#' },
                { name: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' }
            ]
        },
        {
            id: 4,
            name: 'Ольга Кузнецова',
            position: 'Специалист по клиентскому опыту',
            bio: 'Помогает сделать выбор гаджетов, тестов и wellness-наборов простым и спокойным.',
            photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
            social: [
                { name: 'twitter', icon: 'fab fa-twitter', link: '#' },
                { name: 'linkedin', icon: 'fab fa-linkedin-in', link: '#' }
            ]
        }
    ]);

    return {
        stats,
        team,
    };
}
