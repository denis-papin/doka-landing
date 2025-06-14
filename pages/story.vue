<template>
  <section class="page">
    <h2>How the Idea of Doka Was Born</h2>
    <p>
      Doka started with frustration. I was constantly forwarding myself emails, digging through
      attachments, misplacing PDFs, and saving duplicates across my cloud storage. There was no
      single place where everything just... clicked together.
    </p>
    <p>
      The moment of clarity came during a routine task — looking for a contract buried in a long
      thread. It wasn’t the first time, but this time something shifted.
    </p>
    <blockquote>
      <em>
        “What if we stopped treating email like a one-time communication tool and instead used it as
        a living archive — a knowledge hub?”
      </em>
    </blockquote>

    <h2>Reimagining Email and Document Convergence</h2>
    <p>
      Think of all the information locked inside your inbox: invoices, identity papers, travel
      documents, receipts, scanned forms. It’s a treasure trove — but hidden behind a dated
      interface and a terrible search function.
    </p>
    <p>
      Doka doesn’t reinvent email. It reinterprets it. It extracts, links, and elevates your
      documents so they work for you — not against you.
    </p>

    <h2>The Emotional Value</h2>
    <p>
      The true power of Doka isn’t just document retrieval. It’s mental clarity. No more asking
      “Where did I save that?” No more digging through attachments. No more forgetting what you
      already have.
    </p>
    <p>Doka gives you a sense of control in a world drowning in digital noise.</p>

    <h2>The Vision</h2>
    <p>
      Doka isn’t just launching a product. It’s starting a movement: a privacy-first, open-source
      approach to personal knowledge. An inbox that works for you. A system that grows smarter with
      every interaction — without selling your data.
    </p>

    <h2>📺 Behind the Scenes: Doka in Video</h2>
    <div class="video-grid">
      <div class="video-card" v-for="video in videos" :key="video.title">
        <div class="thumbnail" />
        <h3>{{ video.title }}</h3>
        <p>{{ video.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videos = [
  {
    title: '🧾 Licensing and Why Open Source',
    description:
        'Explore our commitment to transparency and community. Learn how you can contribute or audit the code.'
  },
  {
    title: '🧱 History of the Technical Stack',
    description:
        'Follow our backend/frontend decisions, challenges, and key architectural pivots from prototype to platform.'
  },
  {
    title: '🔍 Advanced Search Capabilities',
    description:
        'Full-text search across emails and files, using tags, filters, and semantic linking for total control.'
  },
  {
    title: '⚙️ Processing Flow Explained',
    description:
        'How Doka fetches, parses, indexes and stores documents — with privacy, performance, and offline access in mind.'
  },
  {
    title: '💻 Front-End Framework Comparison',
    description:
        'Vue vs React vs Svelte. We share why we chose Vue, and how it benefits developers and users alike.'
  }
]
</script>

<style scoped lang="scss">
.page {
  padding: 2rem;
  max-width: 750px;
  margin: auto;
  line-height: 1.6;

  h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: #222;
  }

  h3 {
    font-size: 1.2rem;
    margin-top: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
    color: #444;
  }

  blockquote {
    margin: 1rem 0;
    padding-left: 1rem;
    border-left: 3px solid #007aff;
    color: #666;
    font-style: italic;
  }

  .video-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;

    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }

    .video-card {
      background-color: #f8f8f8;
      border-radius: 8px;
      padding: 1rem;
      text-align: left;

      .thumbnail {
        width: 100%;
        height: 150px;
        background-color: #ddd;
        border-radius: 6px;
        margin-bottom: 0.75rem;
      }

      h3 {
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.95rem;
        color: #555;
      }
    }
  }
}
</style>
