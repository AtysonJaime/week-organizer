<template>
  <div id='modal-reuniao-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <AlertErro :erros='errosForm' />
            <h1 class="title is-4"> Adicionar Reuniões</h1>
            <div class="columns block">
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <Icone classes='fas fa-user-friends'></Icone>
                    Componentes
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Digite os componentes da Reunião"
                      v-model="componentes"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <Icone classes='far fa-calendar'></Icone>
                    Data da Realização
                  </label>
                  <div class="control">
                    <input class="input" type="date" v-model="dataReuniao"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block">
              <div class="column is-12">
                <div class="field">
                  <label class="label">
                    <Icone classes='fas fa-tasks'></Icone>
                    Assunstos Abordados
                  </label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Assunstos Abordados"
                      v-model="assuntos"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block is-right container-button">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-success" @click="addReuniao()">
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
      componentes: '',
      dataReuniao: '',
      assuntos: '',
      errosForm: [],
    };
  },

  components: {
    Icone,
    AlertErro,
  },

  methods: {
    addReuniao() {
      this.errosForm = [];
      if (this.componentes.trim() === '') {
        this.errosForm.push('Campo componentes não pode ser em branco');
      }
      if (this.dataReuniao === '') {
        this.errosForm.push('Campo data não pode ser em branco');
      }
      if (this.assuntos.trim() === '') {
        this.errosForm.push('Campo assuntos não pode ser em branco');
      }
      if (this.errosForm.length === 0) {
        this.$emit('criacaoReuniao', {
          componentes: this.componentes.trim(),
          data: this.dataReuniao,
          assuntos: this.assuntos.trim(),
        });
        this.componentes = '';
        this.assuntos = '';
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
