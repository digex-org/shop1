// composables/useSeo.ts
import { ref } from 'vue';
import { useHead } from '#app'; // For Nuxt 3

export function useSeo(initialTitle = '', initialDescription = '') {
  const title = ref(initialTitle);
  const description = ref(initialDescription);

  // Use Nuxt's useHead to manage title and meta tags reactively
  useHead({
    title: title.value,
    meta: [
      { name: 'description', content: description.value }
    ]
  });

  return { title, description };
}