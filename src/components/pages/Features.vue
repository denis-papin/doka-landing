<template>
  <section class="page">
    <h2>What Makes Doka Special</h2>

    <img class="feature-img" src="https://images.unsplash.com/photo-1581090700227-1e8d1c7f78e0?auto=format&fit=crop&w=800&q=80" alt="Organized workspace" />

    <p>
      Doka is built for real life. It’s not just another app to stash files. It’s a calming space
      where email attachments and documents finally make sense together.
    </p>

    <p>
      Say goodbye to bouncing between your inbox, desktop folders, and cloud drives. Doka
      automatically collects your attachments and links them to the people, conversations, and
      context that matter.
    </p>

    <img class="feature-img" src="https://images.unsplash.com/photo-1580894894515-fd9b9f6d05b0?auto=format&fit=crop&w=800&q=80" alt="Search concept" />

    <h3>Smart Search That Feels Like Magic</h3>
    <p>
      Can't remember the filename? No problem. Doka lets you search by what was said, who sent it,
      or even what the document is about. You’ll find the right file faster than ever—with less
      stress.
    </p>

    <h3>Privacy That Feels Personal</h3>

    <img class="feature-img" src="https://images.unsplash.com/photo-1600267165600-cf351f3c6b6a?auto=format&fit=crop&w=800&q=80" alt="Digital privacy padlock" />

    <p>
      We take your privacy seriously, and that’s why everything in Doka is encrypted using
      ChaCha20—a fast, modern algorithm trusted by security experts. Your documents are protected,
      even from us.
    </p>

    <p>
      Doka is offline-first. It doesn’t spy, sync without asking, or upload your content behind the
      scenes. Your data stays yours—always.
    </p>

    <h3>A Tool That Gets Out of Your Way</h3>
    <p>
      Whether you're planning a trip, managing freelance projects, or sorting receipts for taxes,
      Doka helps you feel more in control. No clutter. No noise. Just what matters.
    </p>
  </section>
</template>

<script setup lang="ts">
// purely static content
</script>

<style scoped lang="scss">
.page {
  padding: 2rem;
  max-width: 750px;
  margin: auto;
  line-height: 1.7;
  font-size: 1rem;
  color: #333;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    color: #222;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 2rem;
    color: #007aff;
  }

  p {
    margin-bottom: 1.25rem;
  }

  .feature-img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    border-radius: 12px;
    margin: 1rem 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
}
</style>
