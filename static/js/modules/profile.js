import { ref } from '../vue.esm-browser.prod.js'

export function useProfile() {
    const activeTab = ref('profile');
    const showUserMenu = ref(false);
    const isEditing = ref(false);
    const cartItems = ref([]);

    const user = ref({
        name: 'Александр Петров',
        email: 'alex.petrov@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        birthDate: '1985-06-15',
        phone: '+7 (912) 345-67-89',
        bio: 'Интересуюсь сном, восстановлением и мягким биохакингом. Отслеживаю HRV, шаги и качество отдыха.',
        favoriteGenres: ['Сон', 'Фокус', 'Восстановление', 'Нутрицевтики'],
        profileCompletion: 75
    });

    const settings = ref({
        emailNotifications: true,
        pushNotifications: false,
        promotions: true
    });

    const userLibrary = ref([
        {
            id: 1,
            title: 'WHOOP 4.0 Health Band',
            author: 'Трекер восстановления',
            format: 'Гаджет',
            rating: 4,
            progress: 65,
            image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Magnesium Sleep Complex',
            author: 'Нутрицевтик для сна',
            format: 'БАД',
            rating: 5,
            progress: 100,
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Sleep Recovery Kit',
            author: 'Набор вечернего режима',
            format: 'Набор',
            rating: 5,
            progress: 30,
            image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const wishlist = ref([
        {
            id: 1,
            title: 'Glucose Insight Sensor',
            author: 'Мониторинг метаболизма',
            price: 39.99,
            format: 'Сенсор',
            image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Vitamin D3 + K2',
            author: 'Поддержка иммунитета',
            price: 14.99,
            format: 'БАД',
            image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const orders = ref([
        {
            id: 'BV-2023-1567',
            date: '15 июня 2023',
            status: 'completed',
            paymentDate: '15 июня 2023',
            completionDate: '16 июня 2023',
            items: [
                {
                    id: 1,
                    title: 'WHOOP 4.0 Health Band',
                    author: 'Трекер восстановления',
                    price: 29.99,
                    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?auto=format&fit=crop&w=800&q=80'
                },
                {
                    id: 2,
                    title: 'Magnesium Sleep Complex',
                    author: 'Нутрицевтик для сна',
                    price: 18.99,
                    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
                }
            ],
            total: 27.98
        },
        {
            id: 'BV-2023-1892',
            date: '5 июля 2023',
            status: 'processing',
            paymentDate: '5 июля 2023',
            items: [
                {
                    id: 3,
                    title: 'Sleep Recovery Kit',
                    author: 'Набор вечернего режима',
                    price: 24.99,
                    image: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?auto=format&fit=crop&w=800&q=80'
                }
            ],
            total: 11.99
        }
    ]);

    const setActiveTab = (tab) => {
        activeTab.value = tab;
    };

    const toggleUserMenu = () => {
        showUserMenu.value = !showUserMenu.value;
    };

    const editProfile = () => {
        isEditing.value = true;
    };

    const cancelEdit = () => {
        isEditing.value = false;
    };

    const saveProfile = () => {
        // Здесь должна быть логика сохранения профиля
        isEditing.value = false;
    };

    const changeAvatar = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                user.value.avatar = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const addToCartFromWishlist = (item) => {
        cartItems.value.push({
            id: item.id,
            title: item.title,
            author: item.author,
            price: item.price,
            image: item.image
        });
        alert(`${item.title} добавлен в корзину!`);
    };

    const removeFromWishlist = (id) => {
        wishlist.value = wishlist.value.filter(item => item.id !== id);
    };

    const getStatusText = (status) => {
        switch(status) {
            case 'completed': return 'Завершено';
            case 'processing': return 'В обработке';
            case 'cancelled': return 'Отменено';
            default: return 'Ожидание';
        }
    };

    const logout = () => {
        // Здесь должна быть логика выхода
        alert('Вы вышли из системы');
    };

    return {
        activeTab,
        showUserMenu,
        isEditing,
        cartItems,
        user,
        settings,
        userLibrary,
        wishlist,
        orders,
        setActiveTab,
        toggleUserMenu,
        editProfile,
        cancelEdit,
        saveProfile,
        changeAvatar,
        addToCartFromWishlist,
        removeFromWishlist,
        getStatusText,
        // logout
    };
}
