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
    },

    closeModal(modal) {
      const html = document.querySelector('html');
      html.classList.remove('is-clipped');
      modal.classList.remove('is-active');
    },
  },
};

export default functionModais;
