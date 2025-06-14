<template>
  <div class="layout">
    <nav class="nav-tabs">
      <NuxtLink to="/story" class="tab" active-class="active">Story</NuxtLink>
      <NuxtLink to="/features" class="tab" active-class="active">Features</NuxtLink>
      <NuxtLink to="/pre-register" class="tab" active-class="active">Pre-Register</NuxtLink>
    </nav>

    <main class="page-content">
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;

  .nav-tabs {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;

    .tab {
      padding: 0.5rem 1.5rem;
      border-radius: 999px;
      text-decoration: none;
      color: #333;
      border: 1px solid #ddd;
      transition: all 0.3s;

      &:hover {
        background: #f5f5f5;
      }

      &.active {
        background: #333;
        color: #fff;
        border-color: #333;
      }
    }
  }

  .page-content {
    width: 100%;
    max-width: 960px;
    padding: 2rem;
    background: #fafafa;
    border: 1px solid #eee;
    border-radius: 8px;
  }
}
</style>

