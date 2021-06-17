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
  mounted() {
    if (localStorage.getItem('altoContraste')) {
      try {
        if (JSON.parse(localStorage.getItem('altoContraste')) === 'true') {
          this.changeAltoContraste();
        }
      } catch (error) {
        localStorage.removeItem('atividades');
      }
    }
  },

  methods: {
    changeAltoContraste() {
      const pagina = document.getElementById('app');
      let parsed = '';
      if (pagina.classList.contains('alto-contraste')) {
        pagina.classList.remove('alto-contraste');
        parsed = JSON.stringify('false');
      } else {
        pagina.classList.add('alto-contraste');
        parsed = JSON.stringify('true');
      }
      localStorage.setItem('altoContraste', parsed);
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
