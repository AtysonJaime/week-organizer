<template>
  <div id='modal-dificuldades-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <AlertErro :erros='errosForm' />
            <h1 class="title is-4"> Adicionar Dificuldades</h1>
            <div class="columns block">
              <div class="column is-6">
                <label class="label">
                    <Icone classes='fas fa-hard-hat'></Icone>
                    Dificuldade
                  </label>
                <div class="control">
                  <label class="radio">
                    <input
                      type="radio" name="answer" value='Interna' v-model="type" checked
                    >
                    Interna
                  </label>
                  <label class="radio">
                    <input
                      type="radio" name="answer" value="Externa" v-model="type"
                    >
                    Externa
                  </label>
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
                    Disserte sobre a dificuldade
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
      type: 'Interna',
      dificuldades: '',
      errosForm: [],
    };
  },

  components: {
    Icone,
    AlertErro,
  },

  methods: {
    addDificuldade() {
      this.errosForm = [];
      if (this.type === '') {
        this.errosForm.push('Necessário escolher um tipo');
      }
      if (this.dificuldades.trim() === '') {
        this.errosForm.push('Campo disserta sobre dificuldade não pode ser em branco');
      }
      if (this.data === '') {
        this.errosForm.push('Campo data não pode ser em branco');
      }
      if (this.errosForm.length === 0) {
        this.$emit('criacaoDificuldade', {
          nomeTypo: this.type,
          data: this.data,
          ocorrido: this.dificuldades.trim(),
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

  .fa-hands-helping {
    margin-right: 1px;
  }
</style>
