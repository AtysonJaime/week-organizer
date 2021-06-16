<template>
  <section class="section container">
    <div class="columns block">
      <div class="column is-8">
        <h2 class="subtitle is-4">
          Nessa aba, você poderá salvar suas dificuldades encontradas durante a
          semana do seu expediente. Desse modo, tornando mais fácil a citação delas,
          nas reuniões de equipes.
        </h2>
      </div>
      <div class="column is-4 button-add">
        <button
          class="button is-link is-medium is-fullwidth"
          data-target="modal-dificuldades-add" aria-haspopup="true"
          @click="openModal('modal-dificuldades-add')" title="Adicionar Dificuldade"
        >
          Adicionar Dificuldade
        </button>
        <ModalAddDificuldades @criacaoDificuldade='addDificuldades($event)'/>
      </div>
    </div>
    <article class="message is-warning msg-alert" v-show="listDificuldades.length === 0">
      <div class="message-body">
        <p><Icone classes='fas fa-exclamation'/> <b>Nenhuma Dificuldade adicionada</b></p>
      </div>
    </article>
    <div v-show="listDificuldades.length > 0">
      <div class="container div-cards columns is-multiline">
        <cardDificuldades
          v-for="card in listDificuldades"
          :key="card.id"
          :dados='card'
          @deletarCard='dltDificuldades($event)'
        />
      </div>
      <div class="content-button">
        <button
          class="button is-danger is-outlined"
          title="Apagar toda lista de reuniões"
          @click='dltTodasDificuldades()'
        >
          <Icone classes='fas fa-trash-alt'/>
          <span>Apagar toda lista</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ModalAddDificuldades from './modais/ModalAddDificuldades.vue';
import FunctionModais from './mixins/functionModais';
import Icone from './Icones.vue';
import cardDificuldades from './cards/CardTipo1.vue';

export default {
  name: 'EstudosAjudas',

  data() {
    return {
      listDificuldades: [],
    };
  },

  mounted() {
    if (localStorage.getItem('dificuldades')) {
      try {
        this.listDificuldades = JSON.parse(localStorage.getItem('dificuldades'));
      } catch (error) {
        localStorage.removeItem('dificuldades');
      }
    }
  },

  mixins: [FunctionModais],

  components: {
    ModalAddDificuldades,
    Icone,
    cardDificuldades,
  },

  methods: {
    addDificuldades($event) {
      this.listDificuldades.push({
        id: Date.now(),
        nomeCampoPrimario: 'Dificuldade',
        nomeCampoSecundario: 'O Que Aconteceu',
        descricaoPrimario: $event.nomeTypo,
        data: $event.data,
        descricaoSecundario: $event.ocorrido,
      });
      this.saveDificuldadesLS();
    },

    dltDificuldades($event) {
      this.listDificuldades = this.listDificuldades.filter((item) => item.id !== $event.id);
      this.saveDificuldadesLS();
    },

    dltTodasDificuldades() {
      this.listDificuldades = [];
      this.saveDificuldadesLS();
    },

    saveDificuldadesLS() {
      const parsed = JSON.stringify(this.listDificuldades);
      localStorage.setItem('dificuldades', parsed);
    },
  },
};
</script>
