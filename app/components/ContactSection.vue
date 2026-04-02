<script setup>
import { Phone, Mail, MapPin, Send } from 'lucide-vue-next';

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = () => {
    isSubmitting.value = true
    setTimeout(() => {
        isSubmitting.value = false
        isSubmitted.value = true
        form.name = ''
        form.email = ''
        form.message = ''
        setTimeout(() => isSubmitted.value = false, 5000)
    }, 1500)
}

const contacts = [
  { icon: MapPin, title: 'Adres', value: '45-220 OPOLE, ul. Plac Oleandrów 33' },
  { icon: Phone, title: 'Telefon', value: '+48 77 409 85 21 / 501 606 048' },
  { icon: Mail, title: 'Email', value: 'biurko@kosztorysy.pl' }
]
</script>

<template>
  <section id="kontakt" class="contact-section">
    <div class="container contact-container">
      <div class="contact-info animate-fade-up">
        <h2 class="contact-title">Kontakt</h2>
        <p class="contact-subtitle">Masze pytania? Skontaktuj się z nami bezpośrednio lub odwiedź nasze biuro w Opolu.</p>
        
        <div class="contact-grid">
          <div v-for="item in contacts" :key="item.title" class="contact-item">
            <div class="contact-icon">
              <component :is="item.icon" size="24" stroke-width="2" />
            </div>
            <div class="contact-text">
              <h4 class="item-title">{{ item.title }}</h4>
              <p class="item-value">{{ item.value }}</p>
            </div>
          </div>
        </div>

        <div class="map-wrapper mt-40">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.513426727237!2d17.9238313!3d50.6738927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47104618e4ae0a4f%3A0x6735e236371f496!2sPlac%20Oleandr%C3%B3w%2033%2C%2045-222%20Opole!5e0!3m2!1spl!2spl!4v1712085000000!5m2!1spl!2spl" 
            width="100%" height="300" style="border:0; border-radius: 12px; box-shadow: var(--shadow);" allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
      
      <div class="contact-form-wrapper animate-fade-up" style="animation-delay: 0.2s">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <h3 class="form-title">Wyślij Wiadomość</h3>
          <div class="input-group">
            <label>Imię i Nazwisko</label>
            <input type="text" v-model="form.name" required placeholder="Jan Kowalski">
          </div>
          <div class="input-group">
            <label>Adres Email</label>
            <input type="email" v-model="form.email" required placeholder="twoj@email.pl">
          </div>
          <div class="input-group">
            <label>Wiadomość</label>
            <textarea v-model="form.message" rows="5" required placeholder="W czym możemy pomóc?"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary w-full" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Wyślij Wiadomość <Send size="18" class="ml-2" /></span>
             <span v-else>Wysyłanie...</span>
          </button>
          
          <div v-if="isSubmitted" class="success-message">
            Dziękujemy! Wiadomość została wysłana pomyślnie.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  padding: 120px 20px;
  background-color: var(--white);
}

.contact-container {
  display: flex;
  gap: 80px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 60px;
  }
}

.contact-info {
  flex: 1;
}

.contact-title {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 15px;
}

.contact-subtitle {
  color: var(--text-muted);
  font-size: 1.1rem;
  margin-bottom: 50px;
}

.contact-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.contact-item {
  display: flex;
  gap: 20px;
  align-items: center;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background-color: rgba(212, 149, 26, 0.1);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}

.item-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
}

.item-value {
    color: var(--text-muted);
}

.map-wrapper {
    margin-top: 50px;
}

.contact-form-wrapper {
  flex: 0 0 500px;
  
  @media (max-width: 992px) {
    flex: 1;
    width: 100%;
  }
}

.contact-form {
  background-color: var(--bg-light);
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(0,0,0,0.05);

  @media (max-width: 600px) {
    padding: 30px 20px;
  }
}

.form-title {
  font-size: 1.6rem;
  margin-bottom: 30px;
  color: var(--primary);
}

.input-group {
  margin-bottom: 25px;
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: var(--primary);
  }
  
  input, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 8px;
    font-family: inherit;
    font-size: 1rem;
    transition: var(--transition);
    
    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 4px rgba(212, 149, 26, 0.1);
    }
  }
}

.btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.w-full {
    width: 100%;
}

.ml-2 {
    margin-left: 10px;
}

.success-message {
    margin-top: 20px;
    padding: 15px;
    background-color: #d1fae5;
    color: #065f46;
    border-radius: 8px;
    text-align: center;
    font-weight: 600;
    animation: fadeInUp 0.5s ease-out;
}

.mt-40 {
    margin-top: 40px;
}
</style>
