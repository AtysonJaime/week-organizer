<template>
  <div id='modal-atividade-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <AlertErro :erros='errosForm' />
            <h1 class="title is-4"> Adicionar atividades realizadas</h1>
            <div class="columns block">
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <IconeForm classes='fas fa-laptop-code'></IconeForm>
                    Projeto
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      placeholder="Digite o nome do projeto"
                      v-model="nomeProjeto"
                    />
                  </div>
                </div>
              </div>
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <IconeForm classes='far fa-calendar'></IconeForm>
                    Data da Realização
                  </label>
                  <div class="control">
                    <input class="input" type="date" v-model="dataAtividade"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block">
              <div class="column is-12">
                <div class="field">
                  <label class="label">
                    <IconeForm classes='fas fa-tasks'></IconeForm>
                    Atividades Realizadas
                  </label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      placeholder="Atividades Realizadas"
                      v-model="atividadesRealizadas"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block is-right container-button">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-success" @click="addAtividade()">
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
import IconeForm from '../Icones_forms.vue';
import AlertErro from '../AlertErro.vue';

export default {
  data() {
    return {
      nomeProjeto: '',
      dataAtividade: '',
      atividadesRealizadas: '',
      errosForm: [],
    };
  },

  components: {
    IconeForm,
    AlertErro,
  },

  computed: {
    verDatas() {
      return this.errosForm;
    },
  },

  methods: {
    addAtividade() {
      console.log(this.atividadesRealizadas.trim());
      if (this.nomeProjeto.trim() === '') {
        this.errosForm.push('Campo projeto não pode ser em branco');
      }
      if (this.dataAtividade === '') {
        this.errosForm.push('Campo data não pode ser em branco');
      }
      if (this.atividadesRealizadas.trim() === '') {
        this.errosForm.push('Campo atividades realizadas não pode ser em branco');
      }
      if (this.errosForm.length === 0) {
        this.$emit('criacaoAtividade', {
          projeto: this.nomeProjeto.trim(),
          data: this.dataAtividade,
          atividades: this.atividadesRealizadas.trim(),
        });
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
