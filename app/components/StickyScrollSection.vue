<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Lenis from "lenis";

const lenisInstance = ref(null);

onMounted(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        smoothTouch: false,
    });

    lenisInstance.value = lenis;

    const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
});

onBeforeUnmount(() => {
    if (lenisInstance.value) {
        lenisInstance.value.destroy();
        lenisInstance.value = null;
    }
});
</script>

<template>
    <ClientOnly>
        <section class="sticky-scroll">
            <div class="sticky-grid">
                <div class="sticky-col">
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop"
                            alt="Konstrukcja stalowa w trakcie montażu"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=800&auto=format&fit=crop"
                            alt="Brygada budowlana na placu budowy"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?w=800&auto=format&fit=crop"
                            alt="Narzędzia i przygotowanie robót"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop"
                            alt="Budowa obiektu przemysłowego"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop"
                            alt="Roboty ziemne i przygotowanie terenu"
                        />
                    </figure>
                </div>

                <div class="sticky-col sticky-center">
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=800&auto=format&fit=crop"
                            alt="Nadzór nad realizacją inwestycji"
                        />
                    </figure>
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1461151304267-38535e780c79?w=800&auto=format&fit=crop"
                            alt="Instalacje i prace branżowe"
                        />
                    </figure>
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&auto=format&fit=crop"
                            alt="Rusztowania i prace elewacyjne"
                        />
                    </figure>
                </div>

                <div class="sticky-col">
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop"
                            alt="Analiza kosztów i harmonogramu"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop"
                            alt="Prace wykończeniowe wewnątrz"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&auto=format&fit=crop"
                            alt="Inspekcja robót na budowie"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
                            alt="Dokumentacja techniczna projektu"
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&auto=format&fit=crop"
                            alt="Gotowa bryła budynku"
                        />
                    </figure>
                </div>
            </div>
        </section>
    </ClientOnly>
</template>

<style scoped>
.sticky-scroll {
    width: 100%;
    /*background: var(--primary-light);*/
    color: #ffffff;
    padding: 80px 20px 120px;
}

.sticky-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 12px;
}

.sticky-col {
    grid-column: span 4;
    display: grid;
    gap: 12px;
}

.sticky-center {
    position: sticky;
    top: 0;
    height: 100vh;
    align-content: center;
}

.image-card {
    width: 100%;
    overflow: hidden;
    border: 2px solid var(--accent);
    box-shadow: 6px 6px 0 var(--primary-04);
}

.image-card img {
    width: 100%;
    height: 24rem;
    object-fit: cover;
    display: block;
    transition: transform 0.35s ease;
}

.image-card.tall img {
    height: 100%;
    min-height: 30vh;
}

.image-card:hover img {
    transform: scale(1.03);
}

@media (max-width: 1000px) {
    .sticky-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .sticky-col {
        grid-column: span 1;
    }

    .sticky-center {
        position: static;
        height: auto;
    }

    .image-card img {
        height: 18rem;
    }
}

@media (max-width: 640px) {
    .sticky-grid {
        grid-template-columns: 1fr;
    }

    .sticky-col {
        grid-column: span 1;
    }
}
</style>
