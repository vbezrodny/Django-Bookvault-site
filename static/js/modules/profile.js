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
        bio: 'Любитель классической литературы и научной фантастики. Читаю каждый день перед сном.',
        favoriteGenres: ['Классика', 'Фантастика', 'История', 'Психология'],
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
            title: 'Молчаливый пациент',
            author: 'Алекс Михаэлидес',
            format: 'PDF',
            rating: 4,
            progress: 65,
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Атомные привычки',
            author: 'Джеймс Клир',
            format: 'EPUB',
            rating: 5,
            progress: 100,
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            title: 'Психология денег',
            author: 'Морган Хаузел',
            format: 'PDF',
            rating: 5,
            progress: 30,
            image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        }
    ]);

    const wishlist = ref([
        {
            id: 1,
            title: '1984',
            author: 'Джордж Оруэлл',
            price: 9.99,
            format: 'EPUB',
            image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            title: 'Убить пересмешника',
            author: 'Харпер Ли',
            price: 11.99,
            format: 'PDF',
            image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
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
                    title: 'Молчаливый пациент',
                    author: 'Алекс Михаэлидес',
                    price: 12.99,
                    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
                },
                {
                    id: 2,
                    title: 'Атомные привычки',
                    author: 'Джеймс Клир',
                    price: 14.99,
                    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
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
                    title: 'Психология денег',
                    author: 'Морган Хаузел',
                    price: 11.99,
                    image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
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
        alert(`${item.title} добавлена в корзину!`);
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
