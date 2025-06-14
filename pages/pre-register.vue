<template>
  <section class="page">
    <h2>Want Early Access?</h2>
    <p>
      Be part of the launch and receive exclusive benefits. Register now and claim your free
      lifetime account.
    </p>
    <button class="cta-button">Pre-Register</button>
  </section>
</template>

<script setup lang="ts">
// You can add emits or props later if form handling is needed
</script>

<style scoped lang="scss">
.page {
  padding: 2rem;
  text-align: center;
  max-width: 700px;
  margin: auto;

  h2 {
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .cta-button {
    background-color: #007aff;
    color: white;
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
      background-color: #005ecb;
    }
  }
}
</style>
