<template>
  <div id="app">
    <section class="hero is-info is-medium">
      <!-- <div class="hero-head">
        <Header/>
      </div> -->

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title is-1">
            Weekly Organizer
          </p>
          <p class="subtitle is-3">
            Modo simples para você organizar suas tarefas produzidas na semana.
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li :class="{'is-active' : isAtividades}">
                <a @click="changeTab('Atividades')">
                  <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                  <span>Atividades Realizadas</span>
                </a>
              </li>
              <li :class="{'is-active' : isReunioes}">
                <a @click="changeTab('Reunioes')">
                  <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                  <span>Reuniões</span>
                </a>
              </li>
              <li :class="{'is-active' : isOutros}">
                <a @click="changeTab('Outros')">
                  <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                  <span>Ajudas/Estudos</span>
                </a>
              </li>
              <li :class="{'is-active' : isDificuldades}">
                <a @click="changeTab('Dificuldades')">
                  <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
                  <span>Dificuldades</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section class="section container display-content" v-show="isAtividades">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>,
        like the one you're currently reading.
      </h2>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAtividades: true,
      isReunioes: false,
      isOutros: false,
      isDificuldades: false,
    };
  },

  methods: {
    /**
     * Tem como funcionalidade alterar entre as páginas possiveis.
     */
    changeTab(tab) {
      switch (tab) {
        case 'Atividades':
          this.isAtividades = true;
          this.isReunioes = false;
          this.isOutros = false;
          this.isDificuldades = false;
          break;
        case 'Reunioes':
          this.isAtividades = false;
          this.isReunioes = true;
          this.isOutros = false;
          this.isDificuldades = false;
          break;
        case 'Outros':
          this.isAtividades = false;
          this.isReunioes = false;
          this.isOutros = true;
          this.isDificuldades = false;
          break;
        case 'Dificuldades':
          this.isAtividades = false;
          this.isReunioes = false;
          this.isOutros = false;
          this.isDificuldades = true;
          break;
        default:
      }
    },
  },
};
</script>

<style lang="scss">
  #app {
    .tabs.is-boxed {
      li.is-active {
        a {
          color: #3298dc;
          transition: background-color 0.5s;
        };
      }
    }
    .section {

    }
  };
</style>
