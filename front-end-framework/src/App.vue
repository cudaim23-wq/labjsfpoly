<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link to="/" class="navbar-brand">Vue Labs</router-link>
      <ul class="navbar-nav flex-wrap">
        <li v-for="n in 7" :key="n" class="nav-item">
          <router-link :to="`/lab-${n}`" class="nav-link" active-class="active">Lab {{ n }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <main class="container pb-5">
    <router-view />
  </main>
</template>
