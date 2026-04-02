<script setup>
const menu = [
  { name: 'O nas', href: '#o-nas' },
  { name: 'Usługi', href: '#uslugi' },
  { name: 'Kontakt', href: '#kontakt' }
]

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<template>
  <header :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-container">
      <NuxtLink to="/" class="logo-group">
        <img src="/logo.svg" alt="BIURO KOSZTORYSOWANIA ROBÓT BUDOWLANYCH" class="logo-img" />
        <div class="logo-text">
          <span class="company-name">BIURO KOSZTORYSOWANIA</span>
          <span class="company-subname">ROBÓT BUDOWLANYCH</span>
        </div>
      </NuxtLink>

      <nav class="nav-links">
        <a v-for="item in menu" :key="item.name" :href="item.href" class="nav-link">
          {{ item.name }}
        </a>
        <a href="#kontakt" class="btn btn-primary btn-sm">Wyceń projekt</a>
      </nav>
      
      <button class="mobile-menu-btn" @click="$emit('toggle-mobile-menu')">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: transparent;
  z-index: 1000;
  display: flex;
  align-items: center;
  transition: var(--transition);
  padding: 0 20px;

  &.header-scrolled {
    height: 70px;
    background-color: rgba(26, 39, 68, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: var(--shadow);
    
    .company-name, .company-subname, .nav-link {
        color: var(--white);
    }
  }
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo-img {
  height: 50px;
  width: auto;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.company-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.company-subname {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--primary);
  opacity: 0.8;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
}

.nav-link {
  font-weight: 500;
  color: var(--primary);
  font-size: 0.95rem;

  &:hover {
    color: var(--accent);
  }
}

.btn-sm {
  padding: 8px 20px;
  font-size: 0.9rem;
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    color: var(--primary);
    cursor: pointer;
    
    @media (max-width: 900px) {
        display: block;
    }
}

header.header-scrolled .mobile-menu-btn {
    color: var(--white);
}
</style>
