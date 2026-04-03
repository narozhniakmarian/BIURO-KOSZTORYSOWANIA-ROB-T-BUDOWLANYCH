<template>
    <footer class="app-footer">
        <div class="container footer-container">
            <div class="footer-brand">
                <img src="/logo.svg" alt="Logo" class="footer-logo" />
                <div class="footer-brand-text">
                    <h4>BIURO KOSZTORYSOWANIA</h4>
                    <p>ROBÓT BUDOWLANYCH</p>
                </div>
            </div>

            <nav class="footer-nav">
                <h5>Nawigacja</h5>
                <NuxtLink to="/#hero">Start</NuxtLink>
                <NuxtLink to="/#o-nas">Dlaczego my</NuxtLink>
                <NuxtLink to="/#uslugi">Zakres usług</NuxtLink>
                <NuxtLink to="/#kontakt">Kontakt</NuxtLink>
                <NuxtLink to="/polityka-prywatnosci"
                    >Polityka prywatności</NuxtLink
                >
                <NuxtLink to="/warunki-uzytkowania"
                    >Warunki użytkowania</NuxtLink
                >
            </nav>

            <div class="footer-contact">
                <h5>Kontakt</h5>
                <p>45-220 OPOLE, ul. Plac Oleandrów 33</p>
                <p>+48 77 409 85 21</p>
                <p>biurko@kosztorysy.pl</p>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container">
                <p>
                    &copy; {{ new Date().getFullYear() }} Biuro Kosztorysowania
                    Robót Budowlanych. Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.app-footer {
    background-color: var(--primary);
    color: var(--white);
    padding: 80px 20px 0;
    border-top: 5px solid var(--accent);
}

.footer-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }
}

.footer-brand {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
}

.footer-logo {
    height: 60px;
    filter: brightness(0) invert(1);
}

.footer-brand-text h4 {
    font-size: 1.2rem;
    margin: 0;
    line-height: 1.1;
}

.footer-brand-text p {
    font-size: 0.9rem;
    opacity: 0.7;
}

.footer-nav,
.footer-contact {
    display: flex;
    flex-direction: column;
    gap: 15px;

    h5 {
        font-size: 1.1rem;
        color: var(--accent);
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
}

.footer-nav a {
    font-size: 0.95rem;
    opacity: 0.7;
    transition: var(--transition);

    &:hover {
        opacity: 1;
        color: var(--accent);
        transform: translateX(5px);
    }
}

.footer-contact p {
    font-size: 0.95rem;
    opacity: 0.7;
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px 0;
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.6;
}
</style>
