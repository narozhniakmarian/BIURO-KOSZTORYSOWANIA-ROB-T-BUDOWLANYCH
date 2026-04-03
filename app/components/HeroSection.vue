<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref } from "vue";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {
        image: "/img/hero1.webp",
        title: "Solidne Kosztorysowanie",
        sub: "Twoje oszczędności zaczynają się u nas.",
    },
    {
        image: "/img/hero2.webp",
        title: "Profesjonalizm i Dokładność",
        sub: "Każdy detal ma znaczenie dla Twojego budżetu.",
    },
    {
        image: "/img/hero3.webp",
        title: "Zaufany Partner Budowy",
        sub: "Wspieramy inwestycje na każdym etapie.",
    },
];

const modules = [Autoplay, EffectFade, Navigation, Pagination];

const shouldAnimate = ref(true);

onMounted(() => {
    setTimeout(() => {
        shouldAnimate.value = false;
    }, 900);
});
</script>

<template>
    <section id="hero" class="hero-container">
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :effect="'fade'"
            :loop="true"
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="hero-swiper"
        >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
                <div class="hero-slide">
                    <div class="hero-overlay"></div>
                    <img
                        :src="slide.image"
                        alt="Hero background"
                        class="hero-bg"
                    />

                    <div class="container hero-content">
                        <h1
                            :class="[
                                'hero-title',
                                { 'animate-fade-up': shouldAnimate },
                            ]"
                        >
                            BIURO KOSZTORYSOWANIA <br />
                            <span class="accent-text">ROBÓT BUDOWLANYCH</span>
                        </h1>
                        <p
                            :class="[
                                'hero-slogan',
                                { 'animate-fade-up': shouldAnimate },
                            ]"
                            style="animation-delay: 0.2s"
                        >
                            Rzetelne kosztorysy inwestorskie, ofertowe i
                            powykonawcze. Precyzyjna wycena, jasne decyzje,
                            bezpieczeństwo budżetu.
                        </p>
                        <div
                            :class="[
                                'hero-actions',
                                { 'animate-fade-up': shouldAnimate },
                            ]"
                            style="animation-delay: 0.4s"
                        >
                            <a href="#kontakt" class="btn btn-primary"
                                >Zamów kosztorys</a
                            >
                            <a
                                href="#uslugi"
                                class="btn btn-outline"
                                style="border-color: white; color: white"
                                >Zakres usług</a
                            >
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<style lang="scss" scoped>
.hero-container {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin-bottom: 40px;
    max-width: none;
    overflow: hidden;
    position: relative;
}

.hero-swiper {
    width: 100%;
    height: 100%;
}

.hero-slide {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        135deg,
        rgba(26, 39, 68, 0.9) 0%,
        rgba(26, 39, 68, 0.4) 100%
    );
    z-index: 1;
}

.hero-content {
    position: relative;
    z-index: 2;
    color: var(--white);
    padding: 0 40px;
    max-width: 900px;
    margin-top: 50px;
}

.hero-title {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
}

.accent-text {
    color: var(--accent);
}

.hero-slogan {
    font-size: 1.25rem;
    line-height: 1.6;
    max-width: 700px;
    margin-bottom: 40px;
    opacity: 0.9;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 30px;
    }
}

.hero-actions {
    display: flex;
    gap: 20px;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 15px;
    }
}

:deep(.swiper-pagination-bullet) {
    width: 14px;
    height: 6px;
    background: var(--white);
    opacity: 0.5;
    transition: var(--transition);
    border-radius: 0;
}

:deep(.swiper-pagination-bullet-active) {
    opacity: 1;
    background: var(--accent);
    width: 36px;
    border-radius: 0;
    box-shadow: 4px 0 0 0 var(--white);
}
</style>
