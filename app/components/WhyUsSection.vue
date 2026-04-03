<script setup>
import { Zap, Target, DollarSign, Gift } from "lucide-vue-next";

const benefits = [
    {
        icon: Zap,
        title: "Precyzja",
        desc: "Szczegółowe obmiary i spójne założenia kosztowe.",
    },
    {
        icon: Target,
        title: "Terminowość",
        desc: "Jasny harmonogram i realizacja w uzgodnionym czasie.",
    },
    {
        icon: DollarSign,
        title: "Transparentność",
        desc: "Czytelne pozycje, łatwe do weryfikacji i porównań.",
    },
    {
        icon: Gift,
        title: "Zgodność formalna",
        desc: "Dokumenty przygotowane pod wymagania inwestora i instytucji.",
    },
];
</script>

<template>
    <section id="o-nas" class="why-us-section">
        <div class="container why-us-container">
            <div class="benefits-text animate-fade-up">
                <h2 class="benefits-title">Dlaczego warto z nami?</h2>
                <p class="benefits-p">
                    Rzetelne kosztorysy, jasne założenia i terminowa realizacja.
                    Działamy tak, by Twoje decyzje były oparte na danych, nie
                    domysłach.
                </p>
                <ul class="benefit-list">
                    <li v-for="benefit in benefits" :key="benefit.title">
                        <div class="benefit-icon-wrapper">
                            <component
                                :is="benefit.icon"
                                size="20"
                                stroke-width="2"
                            />
                        </div>
                        <div class="benefit-content">
                            <strong>{{ benefit.title }}</strong
                            >: {{ benefit.desc }}
                        </div>
                    </li>
                </ul>
            </div>

            <div
                class="benefits-cta animate-fade-up"
                style="animation-delay: 0.3s"
            >
                <div class="cta-card">
                    <h3 class="cta-card-title">Zamów kosztorys</h3>
                    <p class="cta-card-p">
                        Prześlij dokumentację — wrócimy z zakresem i terminem
                        realizacji.
                    </p>
                    <a href="#kontakt" class="btn btn-primary w-full"
                        >Wyceń projekt</a
                    >
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.why-us-section {
    background-color: var(--primary);
    color: var(--white);
    padding: 140px 20px;
    max-width: none;
}

.why-us-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;

    @media (max-width: 992px) {
        flex-direction: column;
        text-align: center;
        gap: 60px;
    }
}

.benefits-text {
    flex: 1;
}

.benefits-title {
    font-size: 2.8rem;
    margin-bottom: 25px;
    color: var(--white);

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }
}

.benefits-p {
    font-size: 1.15rem;
    margin-bottom: 45px;
    opacity: 0.85;
    line-height: 1.6;
}

.benefit-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 35px;
    text-align: left;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 25px;
    }
}

.benefit-list li {
    display: flex;
    gap: 15px;
    align-items: flex-start;
}

.benefit-icon-wrapper {
    color: var(--accent);
    background: rgba(212, 149, 26, 0.1);
    padding: 10px;
    border-radius: 0;
    border: 1px solid rgba(212, 149, 26, 0.4);
    flex-shrink: 0;
}

.benefit-content {
    font-size: 0.95rem;
    opacity: 0.9;

    strong {
        display: block;
        font-size: 1.1rem;
        color: var(--white);
        margin-bottom: 5px;
    }
}

.benefits-cta {
    flex: 0 0 400px;

    @media (max-width: 992px) {
        flex: 1;
        width: 100%;
        max-width: 450px;
    }
}

.cta-card {
    background-color: var(--white);
    color: var(--primary);
    padding: 50px 40px;
    border-radius: 0;
    border: 1px solid rgba(26, 39, 68, 0.2);
    box-shadow: 6px 6px 0 rgba(26, 39, 68, 0.2);
    text-align: center;
}

.cta-card-title {
    font-size: 1.6rem;
    margin-bottom: 20px;
}

.cta-card-p {
    margin-bottom: 30px;
    color: var(--text-muted);
}

.w-full {
    width: 100%;
}
</style>
