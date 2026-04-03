<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// SEO
useHead({
    title: "Biuro Kosztorysowania Robót Budowlanych",
    meta: [
        {
            name: "description",
            content:
                "Profesjonalne kosztorysowanie robót budowlanych. Szybko, sprawnie i tanio. Opole, ul. Plac Oleandrów 33. Zadzwoń: +48 77 409 85 21.",
        },
    ],
});
</script>

<template>
    <div class="app-main">
        <AppHeader @toggle-mobile-menu="toggleMobileMenu" />

        <!-- Mobile Menu Overlay -->
        <div
            v-if="isMobileMenuOpen"
            class="mobile-menu-overlay"
            @click="toggleMobileMenu"
        >
            <nav class="mobile-nav" @click.stop>
                <a href="#hero" @click="toggleMobileMenu">Strona Główna</a>
                <a href="#o-nas" @click="toggleMobileMenu">O nas</a>
                <a href="#uslugi" @click="toggleMobileMenu">Usługi</a>
                <a href="#kontakt" @click="toggleMobileMenu">Kontakt</a>
            </nav>
        </div>

        <main>
            <HeroSection />
            <StickyScrollSection />
            <ServicesSection />
            <WhyUsSection />
            <ContactSection />
        </main>

        <AppFooter />
    </div>
</template>

<style lang="scss">
.app-main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(26, 39, 68, 0.95);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease-out;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    a {
        color: var(--white);
        font-size: 1.8rem;
        font-weight: 700;

        &:hover {
            color: var(--accent);
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
