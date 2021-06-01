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
          <ModalAddAtiv/>
        </div>
      </div>
    </section>
</template>

<script>
import ModalAddAtiv from './modais/ModalAddAtividades.vue';

export default {
  components: {
    ModalAddAtiv,
  },

  methods: {
    openModal(dataModal) {
      const modal = document.getElementById(dataModal);
      const buttonBackground = modal.querySelector('.modal-background');
      const buttonClose = modal.querySelector('.modal-close');
      const html = document.querySelector('html');
      html.classList.add('is-clipped');
      modal.classList.add('is-active');
      buttonBackground.addEventListener('click', () => {
        this.closeModal(modal);
      });
      buttonClose.addEventListener('click', () => {
        this.closeModal(modal);
      });
    },

    closeModal(modal) {
      const html = document.querySelector('html');
      html.classList.remove('is-clipped');
      modal.classList.remove('is-active');
    },
  },
};
</script>
