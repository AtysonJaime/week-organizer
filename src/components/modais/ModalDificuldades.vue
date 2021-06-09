<template>
  <div id='modal-dificuldades-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <AlertErro :erros='errosForm' />
            <h1 class="title is-4"> Adicionar Dificuldade</h1>
            <div class="columns block">
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <Icone classes='fas fa-user-friends'></Icone>
                    Escolha qual foi so tipo da dificuldade
                  </label>
                  <div class="control">
                    <label class="radio">
                      <input
                        type="radio" name="answer" value='Pessoal'
                        v-model="type" checked
                      >
                      Pessoal
                    </label>
                    <label class="radio">
                      <input
                        type="radio" name="answer" value="Técnica"
                        v-model="type"
                      >
                      Técnica
                    </label>
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <Icone classes='far fa-calendar'></Icone>
                    Data do ocorrido
                  </label>
                  <div class="control">
                    <input class="input" type="date" v-model="data"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block">
              <div class="column is-12">
                <div class="field">
                  <label class="label">
                    <Icone classes='fas fa-tasks'></Icone>
                    Discorra sobre sua Dificuldade
                  </label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder='Dificuldades'
                      v-model="dificuldades"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block is-right container-button">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-success" @click="addDificuldade()">
                    <span class="icon is-medium">
                      <i class="fas fa-check"></i>
                    </span>
                    <span>Adicionar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import Icone from '../Icones.vue';
import AlertErro from '../AlertErro.vue';

export default {
  data() {
    return {
      data: '',
      type: 'Pessoal',
      dificuldades: '',
      errosForm: [],
    };
  },

  components: {
    Icone,
    AlertErro,
  },

  methods: {
    addOutros() {
      this.errosForm = [];
      if (this.type === '') {
        this.errosForm.push('Necessário escolher um tipo');
      }
      if (this.data === '') {
        this.errosForm.push('Campo data não pode ser em branco');
      }
      if (this.dificuldades.trim() === '') {
        this.errosForm.push(`Campo dificuldades não pode ser em branco`);
      }
      if (this.errosForm.length === 0) {
        this.$emit('criacaoDificuldade', {
          dificuldades: this.dificuldades.trim(),
          data: this.dataReuniao,
          type: this.type,
        });
        this.dificuldades = '';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .container-button {
    justify-content: flex-end;
    padding: 2%;
  }
</style>
