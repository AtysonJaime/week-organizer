<template>
  <section class="hero is-info is-medium">
    <div class="hero-head">
      <Header/>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title is-1 is-spaced">
          Weekly Organizer
        </p>
        <p class="subtitle is-3">
          Modo simples para você organizar suas tarefas produzidas na semana.
        </p>
      </div>
    </div>

    <div class="hero-foot">
      <nav class="tabs is-medium is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li :class="{'is-active' : isAtividades}">
              <a
                @click="changeTab('Atividades')"
                title="Acessar Atividades Realizadas"
                tabindex="0"
                @keyup.enter="changeTab('Atividades')"
              >
                <span class="icon is-small">
                  <i class="fas fa-briefcase" aria-hidden="true"></i>
                </span>
                <span>Atividades Realizadas</span>
              </a>
            </li>
            <li :class="{'is-active' : isReunioes}">
              <a
                @click="changeTab('Reunioes')"
                title="Acessar Reuniões"
                tabindex="0"
                @keyup.enter="changeTab('Reunioes')"
              >
                <span class="icon is-small"><i class="fas fa-users" aria-hidden="true"></i></span>
                <span>Reuniões</span>
              </a>
            </li>
            <li :class="{'is-active' : isOutros}">
              <a
                @click="changeTab('Outros')"
                title="Acessar Ajudas e Estudos"
                tabindex="0"
                @keyup.enter="changeTab('Outros')"
              >
                <span class="icon is-small">
                  <i class="fas fa-hands-helping" aria-hidden="true"></i>
                </span>
                <span>Ajudas/Estudos</span>
              </a>
            </li>
            <li :class="{'is-active' : isDificuldades}">
              <a
                @click="changeTab('Dificuldades')"
                title="Acessar Dificuldades"
                tabindex="0"
                @keyup.enter="changeTab('Dificuldades')"
              >
                <span class="icon is-small"><i class="fas fa-wrench" aria-hidden="true"></i></span>
                <span>Dificuldades</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <Atividades v-show="isAtividades"></Atividades>
  <Reunioes v-show="isReunioes"></Reunioes>
  <Outros v-show="isOutros"></Outros>
  <Dificuldades v-show="isDificuldades"></Dificuldades>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        @2021, por Atyson Jaime.
      </p>
    </div>
  </footer>
</template>

<script>
import Atividades from './components/Atividades.vue';
import Reunioes from './components/Reunioes.vue';
import Outros from './components/EstudosAjudas.vue';
import Dificuldades from './components/Dificuldades.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',

  data() {
    return {
      isAtividades: true,
      isReunioes: false,
      isOutros: false,
      isDificuldades: false,
    };
  },

  components: {
    Atividades,
    Reunioes,
    Outros,
    Dificuldades,
    Header,
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

    a {
      outline: none;
    }

    .button-add {
      margin: auto 0;
    }

    .msg-alert{
      margin: 40px;
      text-align: center;
      .message-body{
        background-color: #fff1be;
      }
    }

    .div-cards {
      padding: 3%;
      overflow-y: auto;
      height: auto;
      max-height: 800px;
      justify-content: space-around;
      .card {
        box-shadow: 0px 0em 1em 1em #0a0a0a1f, -2px 0 0px 1px #0a0a0a05;
        border: 2px solid #00000026;
      }
    }

    .content-button {
      display: flex;
      justify-content: flex-end;
    }

    .footer {
      background-color: #3298dc;
      color: #fff;
    }
  };

  #app.alto-contraste {
    background-color: #000015 !important;

    h1,h2,h3,h4,h5,p,span,i, label {
      color: #fff;
    }

    a,button,.button {
      background-color: #fff;
      color: #000;

      i,span {
        color: #000;
      }

      &:hover, &:focus {
        background-color: #ffdd57;
        color: #000 !important;

        i,span {
          color: #000;
        }
      }

      &.is-danger {
        border-color: #fff;
        &:hover, &:focus {
          border-color: #ffdd57;
        }
      }
    }

    section, footer {
      background-color: #000015 !important;
    }

    section {
      &.hero {
        border-bottom: 5px solid #fff !important;

        .hero-foot {
          li {
            &.is-active {
              a {
                border: 2px solid #fff;
                background-color: #fff;
                color: #000;

                i,span {
                  color: #000;
                }
              }
            }

            a {
              background-color: #000015;
              color: #fff;

              i,span {
                color: #fff;
              }

              &:hover, &:focus {
                background-color: #ffdd57;
                color: #000;

                i,span {
                  color: #000;
                }
              }
            }
          }
        }
      }

      .message {
        .message-body {
          border-width: 1px 1px 1px 4px;
          background-color: #ffdd57;
          p, i {
            color: #000015 !important;
          }
        }
      }

      .card{
        box-shadow: none;
        border: 2px solid #ffdd57;
        background-color: #000015;
      }
    }

    input, textarea {
      background: #000015;
      color: #fff;
      box-shadow: none;

      &::placeholder {
        color: #fff;
      }

      &:focus {
        border-color: #ffdd57;
      }

      &[type="date"] {
        &::-webkit-calendar-picker-indicator {
          filter: invert(100%);
        }

        &::-webkit-datetime-edit-month-field,
        &::-webkit-datetime-edit-day-field,
        &::-webkit-datetime-edit-year-field {
          &:focus {
            background: #fff;
            color: #000015;
          }
        }
      }
    }

    footer {
      border-top: 5px solid #ffdd57;
    }
  }
</style>
