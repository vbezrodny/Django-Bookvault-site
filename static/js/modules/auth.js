import { ref } from '../vue.esm-browser.prod.js'

export function useAuth() {
    const isLoggedIn = ref(false);
    const showAuthModal = ref(false);

    const auth = ref({
        email: '',
        password: ''
    });

    const login = () => {
        // В реальном приложении здесь была бы проверка учетных данных
        isLoggedIn.value = true;
        showAuthModal.value = false;
        auth.value = {email: '', password: ''};
    };

    // const logout = () => {
    //     isLoggedIn.value = false;
    // };

    const toggleAuthModal = () => {
        showAuthModal.value = !showAuthModal.value;
    };

    return {
        isLoggedIn,
        showAuthModal,
        auth,
        login,
        // logout,
        toggleAuthModal,
    }
}