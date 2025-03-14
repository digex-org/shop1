<template>
    <div>
      <button
          v-if="isVisible"
          @click="scrollToTop"
          class="fixed bottom-8 right-8 bg-black text-white p-4 leading-4 shadow-lg transition"
          aria-label="Scroll to top"
      >
        <font-awesome-icon icon="chevron-up" class="text-white w-6 h-6" />
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  
  const isVisible = ref(false);
  
  const handleScroll = () => {
    isVisible.value = window.scrollY > 300;
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style scoped>
  /* Optional: Add additional styling for smooth transition */
  button {
    transition: opacity 0.3s, transform 0.3s;
  }
  
  button:hover {
    transform: translateY(-3px);
  }
  </style>