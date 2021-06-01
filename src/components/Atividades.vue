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
            @click="openModal('modal-atividade-add')"
          >
            Adicionar Atividade
          </button>
          <ModalAddAtiv @criacaoAtividade = 'addAtividade($event)'/>
        </div>
      </div>
    </section>
</template>

<script>
import ModalAddAtiv from './modais/ModalAddAtividades.vue';
import FunctionModais from './mixins/functionModais';

export default {
  name: 'Atividades',

  mixins: [FunctionModais],

  components: {
    ModalAddAtiv,
  },

  methods: {
    addAtividade($event) {
      console.log($event);
    },
  },
};
</script>
