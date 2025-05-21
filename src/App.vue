<template>
  <div class="app">
    <nav>
      <RouterLink to="/story">Story</RouterLink>
      <RouterLink to="/features">Features</RouterLink>
      <RouterLink to="/pre-register">Pre-Register</RouterLink>
    </nav>
    <main>
      <Transition name="slide-up" mode="out-in">
        <RouterView />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
// Composition API enabled by default
</script>

<style scoped lang="scss">
.app {
  text-align: center;

  nav {
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    border-bottom: 1px solid #ccc;

    a {
      text-decoration: none;
      color: #007aff;
      font-weight: bold;
    }
  }

  main {
    min-height: 70vh;
    padding: 2rem;
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: all 0.4s ease
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(20px)
  }
}
</style>
