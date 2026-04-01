import { ref } from '../vue.esm-browser.prod.js'

export function useProduct() {
    const quantity = ref(1);
    const activeTab = ref('description');

    // const addToCart = () => {
    //     cartItems.value += quantity.value;
    //     // Здесь можно добавить логику добавления в корзину
    //     alert(`Добавлено ${quantity.value} книг в корзину`);
    // };

    const increaseQuantity = () => {
        if (quantity.value < 10) {
            quantity.value++;
        }
    };

    const decreaseQuantity = () => {
        if (quantity.value > 1) {
            quantity.value--;
        }
    };

    // Обработчик для переключения миниатюр
    document.addEventListener('DOMContentLoaded', () => {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                // Удаляем активный класс у всех миниатюр
                thumbnails.forEach(t => t.classList.remove('active'));
                // Добавляем активный класс текущей миниатюре
                thumb.classList.add('active');
                // Меняем основное изображение
                mainImage.src = thumb.src;
            });
        });
    });

    return {
        quantity,
        activeTab,
        increaseQuantity,
        decreaseQuantity,
    };
}
