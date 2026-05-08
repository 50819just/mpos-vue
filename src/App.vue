<template>
  <main class="app">
    <section class="card">
      <p class="eyebrow">Vite + Vue</p>
      <h1>專案骨架已經建好啦～</h1>
      <p class="desc">
        之後你可以直接開始接 Figma、拆 component，或加 router / state 管理都很方便。
      </p>
      <button class="button" type="button">開始開發</button>
    </section>
  </main>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 24px;
}

.card {
  width: min(100%, 560px);
  padding: 40px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.12);
  backdrop-filter: blur(14px);
}

.eyebrow {
  margin: 0 0 12px;
  color: #7c3aed;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.1;
  color: #111827;
}

.desc {
  margin: 0 0 24px;
  color: #4b5563;
  font-size: 1rem;
  line-height: 1.7;
}

.button {
  border: 0;
  border-radius: 999px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
}
</style>
