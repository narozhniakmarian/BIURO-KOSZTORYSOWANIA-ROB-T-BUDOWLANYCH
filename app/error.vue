<template>
    <div class="error-page">
        <div class="error-overlay"></div>
        <div class="error-content">
            <div class="error-code">404</div>
            <h1 class="error-title">Nie znaleziono strony</h1>
            <p class="error-text">
                Wygląda na to, że ten adres nie istnieje. Sprawdź link lub wróć
                na stronę główną.
            </p>
            <NuxtLink to="/" class="btn btn-primary">Wróć na start</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

defineProps({
    error: {
        type: Object,
        default: () => ({}),
    },
});

const router = useRouter();

onMounted(() => {
    setTimeout(() => {
        router.push("/");
    }, 15000);
});
</script>

<style scoped>
.error-page {
    position: relative;
    min-height: 100vh;
    display: grid;
    place-items: center;
    text-align: center;
    color: var(--white);
    background-image: url("/img/404_background.jpg");
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
}

.error-overlay {
    position: absolute;
    inset: 0;
    background: rgba(10, 18, 34, 0.82);
}

.error-content {
    position: relative;
    z-index: 1;
    max-width: 640px;
    padding: 40px 30px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.35);
    background: rgba(10, 18, 34, 0.35);
    backdrop-filter: blur(6px);
}

.error-code {
    font-size: 5rem;
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 10px;
    color: var(--accent);
}

.error-title {
    font-size: 2rem;
    margin-bottom: 12px;
}

.error-text {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 26px;
    line-height: 1.6;
}
</style>
