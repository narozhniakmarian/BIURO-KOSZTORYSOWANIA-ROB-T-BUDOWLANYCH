<template>
    <div v-if="isVisible" class="cookie-banner" role="dialog" aria-live="polite">
        <div class="cookie-content">
            <div class="cookie-text">
                <h4>Pliki cookies</h4>
                <p>
                    Używamy plików cookies, aby zapewnić poprawne działanie strony
                    i usprawnić kontakt. Możesz zaakceptować wszystkie cookies lub
                    ograniczyć się do niezbędnych.
                </p>
                <div class="cookie-links">
                    <NuxtLink to="/polityka-prywatnosci">Polityka prywatności</NuxtLink>
                    <NuxtLink to="/warunki-uzytkowania">Warunki użytkowania</NuxtLink>
                </div>
            </div>
            <div class="cookie-actions">
                <button class="btn btn-outline" @click="acceptNecessary">
                    Tylko niezbędne
                </button>
                <button class="btn btn-primary" @click="acceptAll">
                    Akceptuję wszystkie
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const isVisible = ref(false);

const STORAGE_KEY = "cookie-consent";

const setConsent = (value) => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, value);
    isVisible.value = false;
};

const acceptAll = () => setConsent("all");
const acceptNecessary = () => setConsent("necessary");

onMounted(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    isVisible.value = !saved;
});
</script>

<style scoped>
.cookie-banner {
    position: fixed;
    left: 20px;
    right: 20px;
    bottom: 20px;
    z-index: 3000;
    background: var(--primary);
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.35);
    padding: 20px 24px;
}

.cookie-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr auto;
    align-items: center;
}

.cookie-text h4 {
    margin: 0 0 8px;
    font-size: 1.05rem;
    letter-spacing: 0.2px;
}

.cookie-text p {
    margin: 0 0 10px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.95rem;
    line-height: 1.5;
}

.cookie-links {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.cookie-links a {
    color: var(--white);
    opacity: 0.8;
    font-size: 0.9rem;
    text-decoration: underline;
}

.cookie-links a:hover {
    opacity: 1;
    color: var(--accent);
}

.cookie-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: flex-end;
}

@media (max-width: 900px) {
    .cookie-content {
        grid-template-columns: 1fr;
        text-align: left;
    }

    .cookie-actions {
        justify-content: flex-start;
    }
}
</style>
