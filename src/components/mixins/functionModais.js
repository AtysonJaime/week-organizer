/* eslint-disable import/prefer-default-export */
export const functionModais = {
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

      if (dataModal === 'modal-outros-add' || dataModal === 'modal-dificuldades-add') {
        const inputCheckbox = modal.querySelector('input[type="radio"]');
        inputCheckbox.checked = true;
      }
    },

    closeModal(modal) {
      const html = document.querySelector('html');
      html.classList.remove('is-clipped');
      modal.classList.remove('is-active');
    },
  },
};

export default functionModais;
