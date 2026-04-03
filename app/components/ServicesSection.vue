<script setup>
import {
    Building,
    Calculator,
    Clock,
    Award,
    Shield,
    CheckCircle,
} from "lucide-vue-next";

const services = [
    {
        title: "Kosztorysy inwestorskie",
        desc: "Rzetelna wycena inwestycji na etapie planowania i finansowania.",
        icon: Building,
    },
    {
        title: "Kosztorysy ofertowe",
        desc: "Precyzyjne kalkulacje dla wykonawców i postępowań przetargowych.",
        icon: Calculator,
    },
    {
        title: "Kosztorysy powykonawcze",
        desc: "Rozliczenie robót na podstawie faktycznych obmiarów i zakresu.",
        icon: Clock,
    },
    {
        title: "Przedmiary robót",
        desc: "Dokładne zestawienia ilości robót na bazie dokumentacji.",
        icon: Award,
    },
    {
        title: "Weryfikacja kosztorysów",
        desc: "Kontrola poprawności stawek, norm i obmiarów.",
        icon: Shield,
    },
];
</script>

<template>
    <section id="uslugi" class="services-section">
        <div class="section-header container">
            <h2 class="section-title">Nasze Usługi</h2>
            <p class="section-subtitle">
                Kosztorysy przygotowane pod decyzje inwestora i wykonawcy.
            </p>
        </div>

        <div class="services-grid container">
            <div
                v-for="(service, index) in services"
                :key="index"
                class="service-card"
            >
                <div class="service-icon">
                    <component
                        :is="service.icon"
                        size="32"
                        stroke-width="1.5"
                    />
                </div>
                <h3 class="service-title">{{ service.title }}</h3>
                <p class="service-desc">{{ service.desc }}</p>
                <div class="service-marker">
                    <CheckCircle size="18" class="check-icon" /> Rzetelność i
                    precyzja
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.services-section {
    background-color: var(--white);
    padding: 120px 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-title {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.section-subtitle {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 24px;
    grid-auto-flow: dense;

    .service-card {
        grid-column: span 2;
    }

    .service-card:nth-child(1) {
        grid-column: span 4;
    }

    .service-card:nth-child(2) {
        grid-column: span 2;
    }

    .service-card:nth-child(3) {
        grid-column: span 3;
    }

    .service-card:nth-child(4) {
        grid-column: span 3;
    }

    .service-card:nth-child(5) {
        grid-column: span 6;
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);

        .service-card {
            grid-column: auto;
        }
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
}

.service-card {
    padding: 36px 38px;
    background-color: var(--white);
    border-radius: 0;
    transition: var(--transition);
    border: 1px solid var(--primary-04);
    display: flex;
    flex-direction: column;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        height: 4px;
        background: var(--accent);
        opacity: 0.9;
    }

    &:hover {
        transform: translateY(-4px);
        box-shadow: 6px 6px 0 var(--primary-04);
        border-color: var(--accent);

        .service-icon {
            background-color: var(--accent);
            color: var(--white);
        }
    }
}

.service-icon {
    width: 64px;
    height: 64px;
    background-color: transparent;
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin-bottom: 25px;
    transition: var(--transition);
    border: 1px solid var(--accent);
}

.service-title {
    font-size: 1.3rem;
    color: var(--primary);
    margin-bottom: 15px;
    font-weight: 700;
}

.service-desc {
    color: var(--text-muted);
    font-size: 0.95rem;
    flex-grow: 1;
    margin-bottom: 25px;
}

.service-marker {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--primary);
    font-weight: 600;

    .check-icon {
        color: var(--accent);
    }
}
</style>
