<template>
  <!-- Para abrir o modal, precisa adicinar is-active no .modal e is-clipped no html -->
  <div id='modal-atividade-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="notification is-danger is-light" v-show='erros.lenght > 0'>
              <ul>
                <li v-for="erro in erros" :key="erro"></li>
              </ul>
            </div>
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
                  <button class="button is-success">
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

export default {
  data() {
    return {
      namoProjeto: '',
      dataAtividade: '',
      atividadesRealizadas: '',
      erros: [],
    };
  },

  components: {
    IconeForm,
  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>
  .container-button {
    justify-content: flex-end;
    padding: 2%;
  }
</style>
