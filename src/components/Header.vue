<template>
  <nav class="navbar">
    <div class="container">
      <span class="navbar-item">
        <a class="button is-info is-inverted" @click.prevent='changeAltoContraste'>
          <span class="icon">
            <i class="fas fa-adjust"></i>
          </span>
          <span>Alto Contraste</span>
        </a>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    changeAltoContraste() {
      const pagina = document.getElementById('app');
      if (pagina.classList.contains('alto-contraste')) {
        pagina.classList.remove('alto-contraste');
      } else {
        pagina.classList.add('alto-contraste');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .navbar-item {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
</style>
