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
                            src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1718601980986-0ce75101d52d?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1685904042960-66242a0ac352?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1719411182379-ffd97c1f7ebf?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                </div>

                <div class="sticky-col sticky-center">
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1476180814856-a36609db0493?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card tall">
                        <img
                            src="https://images.unsplash.com/photo-1595407660626-db35dcd16609?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                </div>

                <div class="sticky-col">
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1719963532023-01b573d1d584?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1714328101501-3594de6cb80f?w=800&auto=format&fit=crop"
                            alt=""
                        />
                    </figure>
                    <figure class="image-card">
                        <img
                            src="https://images.unsplash.com/photo-1719554873571-0fd6bf322bb1?w=800&auto=format&fit=crop"
                            alt=""
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
