<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Global app setup
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
}
</style>