import { ref, computed } from '../vue.esm-browser.prod.js'

export function useCart() {
    const cartItems = ref([]);
    const showCart = ref(false);

    const toggleCart = () => {
        showCart.value = !showCart.value;
    };

    const addToCart = (book) => {
        cartItems.value.push({
            id: book.id,
            title: book.title,
            author: book.author,
            price: book.price,
            image: book.image
        });

        // Показываем корзину при добавлении товара
        showCart.value = true;

        // Уведомление о добавлении в корзину
        alert(`${book.title} добавлена в корзину!`);
    };

    const removeFromCart = (index) => {
        cartItems.value.splice(index, 1);
    };

    const checkout = () => {
        if (cartItems.value.length === 0) return;

        alert(`Заказ оформлен! Общая сумма: $${cartTotal.value.toFixed(2)}`);
        cartItems.value = [];
        showCart.value = false;
    };

    // Вычисляемое свойство для общей суммы корзины
    const cartTotal = computed(() => {
            return cartItems.value.reduce((total, item) => total + item.price, 0);
    });

    return {
        cartItems,
        showCart,
        cartTotal,
        toggleCart,
        addToCart,
        removeFromCart,
        checkout,
    }
}