<script setup lang="ts">

import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div>
    <AppHeader />
    <MainMenu />
    <MobileMenu />
      <slot />
    <AppFooter />
    <ScrollToTopButton />
  </div>
</template>

<style scoped>

</style>