<template>
  <section class="section container">
      <div class="columns block">
        <div class="column is-8">
          <h2 class="subtitle is-4">
            Nessa aba, você poderá salvar suas atividades realizadas
            em projetos durante a semana do seu expediente.
            Desse modo, tornando mais fácil a citação delas nas reuniões de equipe.
          </h2>
        </div>
        <div class="column is-4 button-add">
          <button
            class="button is-link is-medium is-fullwidth"
            data-target="modal-atividade-add" aria-haspopup="true"
            @click="openModal('modal-atividade-add')" title="Adicionar Atividade"
          >
            Adicionar Atividade
          </button>
          <ModalAddAtiv @criacaoAtividade = 'addAtividade($event)'/>
        </div>
      </div>
      <div class="container div-cards columns is-multiline">
        <CardAtividade
          v-for="card in cardAtividades"
          :key="card.id"
          :titulos='cardTitulos'
          :dataDado='card.data'
          :primDado='card.projeto'
          :secunDado='card.atividades'
        />
      </div>
    </section>
</template>

<script>
import ModalAddAtiv from './modais/ModalAddAtividades.vue';
import FunctionModais from './mixins/functionModais';
import CardAtividade from './cards/CardTipo1.vue';

export default {
  name: 'Atividades',

  data() {
    return {
      cardTitulos: ['Projeto', 'Data', 'Atividades Realizadas'],
      cardAtividades: [],
    };
  },

  mixins: [FunctionModais],

  components: {
    ModalAddAtiv,
    CardAtividade,
  },

  methods: {
    addAtividade($event) {
      this.cardAtividades.push({
        id: Date.now(),
        projeto: $event.projeto,
        data: $event.data,
        atividades: $event.atividades,
      });
    },
  },
};
</script>
