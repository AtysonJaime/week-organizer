<template>
  <section class="section container">
    <div class="columns block">
      <div class="column is-8">
        <h2 class="subtitle is-4">
          Nessa aba, você poderá salvar suas participações em
          reuniões durante a semana do seu expediente.
          Desse modo, tornando mais fácil a citação delas, nas reuniões de equipes.
        </h2>
      </div>
      <div class="column is-4 button-add">
        <button
          class="button is-link is-medium is-fullwidth"
          data-target="modal-reuniao-add" aria-haspopup="true"
          @click="openModal('modal-reuniao-add')" title="Adicionar Reunião"
        >
          Adicionar Reunião
        </button>
        <ModalAddReuniao @criacaoReuniao = 'addReunioes($event)'/>
      </div>
    </div>
    <article class="message is-warning msg-alert" v-show="cardReuniao.length === 0">
      <div class="message-body">
        <p><Icone classes='fas fa-exclamation'/> <b>Nenhuma reunião adicionada</b></p>
      </div>
    </article>
    <div v-show="cardReuniao.length > 0">
      <div class="container div-cards columns is-multiline">
        <CardReuniao
          v-for="card in cardReuniao"
          :key="card.id"
          :titulos='cardTitulos'
          :dataDado='card.data'
          :primDado='card.componentes'
          :secunDado='card.assuntos'
          :idDado='card.id'
          @deletarCard='dltReuniao($event)'
        />
      </div>
      <div class="content-button">
        <button
          class="button is-danger is-outlined"
          title="Apagar toda lista de reuniões"
          @click='dltTodasReunioes()'
        >
          <Icone classes='fas fa-trash-alt'/>
          <span>Apagar toda lista</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ModalAddReuniao from './modais/ModalAddReuniao.vue';
import FunctionModais from './mixins/functionModais';
import CardReuniao from './cards/CardTipo1.vue';
import Icone from './Icones.vue';

export default {
  name: 'Reunioes',

  data() {
    return {
      cardTitulos: ['Componentes', 'Data', 'Assuntos Tratados'],
      cardReuniao: [],
    };
  },

  mounted() {
    if (localStorage.getItem('reunioes')) {
      try {
        this.cardReuniao = JSON.parse(localStorage.getItem('reunioes'));
      } catch (error) {
        localStorage.removeItem('reunioes');
      }
    }
  },

  mixins: [FunctionModais],

  components: {
    ModalAddReuniao,
    CardReuniao,
    Icone,
  },

  methods: {
    addReunioes($event) {
      this.cardReuniao.push({
        id: Date.now(),
        componentes: $event.componentes,
        data: $event.data,
        assuntos: $event.assuntos,
      });
      this.saveReunioesLS();
    },

    dltReuniao($event) {
      this.cardReuniao = this.cardReuniao.filter((item) => item.id !== $event.id);
      this.saveReunioesLS();
    },

    dltTodasReunioes() {
      this.cardReuniao = [];
      this.saveReunioesLS();
    },

    saveReunioesLS() {
      const parsed = JSON.stringify(this.cardReuniao);
      localStorage.setItem('reunioes', parsed);
    },
  },
};
</script>
