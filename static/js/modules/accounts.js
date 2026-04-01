import { ref } from '../vue.esm-browser.prod.js'

export function useSignUp() {
    const form = ref({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const register = () => {
        // В реальном приложении здесь была бы отправка данных на сервер
        alert('Регистрация успешна! Добро пожаловать в BookVault.');
        form.value = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            agreeTerms: false,
            formrememberMe: false,
        };
    };

    return {
        form,
        register,
    };
}

export function useSignIn() {
    const form = ref({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const login = () => {
        // В реальном приложении здесь была бы отправка данных на сервер
        alert('Вход выполнен успешно! Добро пожаловать в BookVault.');
        form.value = {
            email: '',
            password: '',
            rememberMe: false
        };
    };

    return {
        form,
        login,
    };
}