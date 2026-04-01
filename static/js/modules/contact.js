import { ref } from '../vue.esm-browser.prod.js'

export function useContact() {
    const activeAccordion = ref(null);

    const toggleAccordion = (index) => {
        activeAccordion.value = activeAccordion.value === index ? null : index;
    };

    return {
        activeAccordion,
        toggleAccordion,
    };
}
