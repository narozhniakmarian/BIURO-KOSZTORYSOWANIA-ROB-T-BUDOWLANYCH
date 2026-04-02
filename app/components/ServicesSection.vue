<script setup>
import { Building, Calculator, Clock, Award, Shield, CheckCircle } from 'lucide-vue-next';

const services = [
  { 
    title: 'Kosztorysy Inwestorskie', 
    desc: 'Precyzyjne opracowanie przewidywanych kosztów inwestycji przed ogłoszeniem przetargu.', 
    icon: Building 
  },
  { 
    title: 'Kosztorysy Ofertowe', 
    desc: 'Sporządzanie rzetelnych wycen przez wykonawców ubiegających się o zlecenie.', 
    icon: Calculator 
  },
  { 
    title: 'Kosztorysy Powykonawcze', 
    desc: 'Ostateczne rozliczenie zrealizowanych prac budowlanych na podstawie faktycznych nakładów.', 
    icon: Clock 
  },
  { 
    title: 'Przedmiary Robót', 
    desc: 'Zestawienie prac do wykonania przed rozpoczęciem inwestycji na bazie projektu.', 
    icon: Award 
  },
  { 
    title: 'Weryfikacja Kosztorysów', 
    desc: 'Profesjonalne sprawdzenie poprawności wycen, stawek i obmiarów robót.', 
    icon: Shield 
  }
]
</script>

<template>
  <section id="uslugi" class="services-section">
    <div class="section-header container">
      <h2 class="section-title">Nasze Usługi</h2>
      <p class="section-subtitle">Specjalizujemy się w profesjonalnym kosztorysowaniu dla inwestorów i wykonawców.</p>
    </div>

    <div class="services-grid container">
      <div v-for="(service, index) in services" :key="index" class="service-card">
        <div class="service-icon">
          <component :is="service.icon" size="32" stroke-width="1.5" />
        </div>
        <h3 class="service-title">{{ service.title }}</h3>
        <p class="service-desc">{{ service.desc }}</p>
        <div class="service-marker">
          <CheckCircle size="18" class="check-icon" /> Rzetelność i precyzja
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
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 650px) {
        grid-template-columns: 1fr;
    }
}

.service-card {
    padding: 40px;
    background-color: var(--bg-light);
    border-radius: 12px;
    transition: var(--transition);
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        background-color: var(--white);
        box-shadow: var(--shadow-lg);
        border-color: rgba(212, 149, 26, 0.2);
        
        .service-icon {
            background-color: var(--accent);
            color: var(--white);
        }
    }
}

.service-icon {
    width: 64px;
    height: 64px;
    background-color: var(--white);
    color: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin-bottom: 25px;
    transition: var(--transition);
    box-shadow: var(--shadow);
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
