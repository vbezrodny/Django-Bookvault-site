import { ref, computed } from '../vue.esm-browser.prod.js'

export function useCheckout() {
    const showDownloadPopup = ref(false);

    // Данные для оформления заказа
    const shippingInfo = ref({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    // Корзина
    const cart = ref([
        {
            id: 1,
            title: "Мастер и Маргарита",
            author: "Михаил Булгаков",
            price: 599,
            quantity: 1,
            image: "https://cv9.litres.ru/pub/c/cover_330/68210799.webp"
        },
        {
            id: 2,
            title: "1984",
            author: "Джордж Оруэлл",
            price: 499,
            quantity: 1,
            image: "https://cv5.litres.ru/pub/c/cover_330/69397489.webp"
        },
        {
            id: 3,
            title: "Преступление и наказание",
            author: "Фёдор Достоевский",
            price: 399,
            quantity: 1,
            image: "https://cv6.litres.ru/pub/c/cover_330/170044.webp"
        }
    ]);

    // Способы оплаты
    const paymentMethods = ref([
        {
            id: 'credit_card',
            name: 'Кредитная карта',
            icon: 'far fa-credit-card',
            iconColor: 'text-indigo-600'
        },
        {
            id: 'paypal',
            name: 'PayPal',
            icon: 'fab fa-paypal',
            iconColor: 'text-blue-500'
        },
        {
            id: 'bank_transfer',
            name: 'Банковский перевод',
            icon: 'fas fa-university',
            iconColor: 'text-green-600'
        }
    ]);

    const selectedPaymentMethod = ref('credit_card');

    // Данные кредитной карты
    const cardInfo = ref({
        number: '',
        name: '',
        expiry: '',
        cvv: ''
    });

    // Промокод
    const promoCode = ref('');
    const promoMessage = ref('');
    const promoSuccess = ref(false);
    const discount = ref(0);

    // Комментарий к заказу
    const orderComment = ref('');

    // Вычисляемые свойства
    const subtotal = computed(() => {
        return cart.value.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    });

    const shippingCost = computed(() => {
        return 0; // Доставка бесплатная для электронных книг
    });

    const totalItems = computed(() => {
        return cart.value.reduce((sum, item) => sum + item.quantity, 0);
    });

    const total = computed(() => {
        return subtotal.value + shippingCost.value - discount.value;
    });

    // Методы

    const applyPromo = () => {
        // В реальном приложении здесь была бы проверка промокода на сервере
        if (promoCode.value.toUpperCase() === 'BOOK10') {
            discount.value = Math.round(subtotal.value * 0.1);
            promoMessage.value = 'Промокод успешно применен! Скидка 10%';
            promoSuccess.value = true;
        } else if (promoCode.value.toUpperCase() === 'FREE300') {
            discount.value = 300;
            promoMessage.value = 'Промокод успешно применен! Скидка 300 ₽';
            promoSuccess.value = true;
        } else {
            promoMessage.value = 'Промокод недействителен';
            promoSuccess.value = false;
            discount.value = 0;
        }
    };

    const placeOrder = () => {
        // В реальном приложении здесь была бы отправка данных на сервер
        showDownloadPopup.value = true;
    };

    return {
        shippingInfo,
        cart,
        paymentMethods,
        selectedPaymentMethod,
        cardInfo,
        promoCode,
        promoMessage,
        promoSuccess,
        discount,
        orderComment,
        subtotal,
        shippingCost,
        totalItems,
        total,
        applyPromo,
        placeOrder,
    };
}