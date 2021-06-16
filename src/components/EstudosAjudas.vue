<template>
  <section class="section container">
    <div class="columns block">
      <div class="column is-8">
        <h2 class="subtitle is-4">
          Nessa aba, você poderá salvar seus estudos realizados e ajudas dadas
          durante a semana do seu expediente. Desse modo, tornando mais
          fácil a citação delas, nas reuniões de equipes.
        </h2>
      </div>
      <div class="column is-4 button-add">
        <button
          class="button is-link is-medium is-fullwidth"
          data-target="modal-outros-add" aria-haspopup="true"
          @click="openModal('modal-outros-add')" title="Adicionar Ajuda/Estudo"
        >
          Adicionar Ajuda/Estudo
        </button>
        <ModalAddEstudosAjudas @criacaoOutro='addOutros($event)'/>
      </div>
    </div>
    <article class="message is-warning msg-alert" v-show="cardOutros.length === 0">
      <div class="message-body">
        <p><Icone classes='fas fa-exclamation'/> <b>Nenhuma Ajuda ou Estudo adicionado</b></p>
      </div>
    </article>
    <div v-show="cardOutros.length > 0">
      <div class="container div-cards columns is-multiline">
        <CardOutros
          v-for="card in cardOutros"
          :key="card.id"
          :dados='card'
          @deletarCard='dltOutros($event)'
        />
      </div>
      <div class="content-button">
        <button
          class="button is-danger is-outlined"
          title="Apagar toda lista de reuniões"
          @click='dltTodasOutras()'
        >
          <Icone classes='fas fa-trash-alt'/>
          <span>Apagar toda lista</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ModalAddEstudosAjudas from './modais/ModalAddOutros.vue';
import FunctionModais from './mixins/functionModais';
import Icone from './Icones.vue';
import CardOutros from './cards/CardTipo1.vue';

export default {
  name: 'EstudosAjudas',

  data() {
    return {
      cardOutros: [],
    };
  },

  mounted() {
    if (localStorage.getItem('outros')) {
      try {
        this.cardOutros = JSON.parse(localStorage.getItem('outros'));
      } catch (error) {
        localStorage.removeItem('outros');
      }
    }
  },

  mixins: [FunctionModais],

  components: {
    ModalAddEstudosAjudas,
    Icone,
    CardOutros,
  },

  methods: {
    addOutros($event) {
      this.cardOutros.push({
        id: Date.now(),
        nomeCampoPrimario: $event.nomeTypo,
        nomeCampoSecundario: $event.nomePonto,
        descricaoPrimario: $event.componentes,
        data: $event.data,
        descricaoSecundario: $event.pontosAbordados,
      });
      this.saveOutrosLS();
    },

    dltOutros($event) {
      this.cardOutros = this.cardOutros.filter((item) => item.id !== $event.id);
      this.saveOutrosLS();
    },

    dltTodasOutras() {
      this.cardOutros = [];
      this.saveOutrosLS();
    },

    saveOutrosLS() {
      const parsed = JSON.stringify(this.cardOutros);
      localStorage.setItem('outros', parsed);
    },
  },
};
</script>
