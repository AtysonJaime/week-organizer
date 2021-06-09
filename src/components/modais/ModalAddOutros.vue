<template>
  <div id='modal-outros-add' class="modal">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <AlertErro :erros='errosForm' />
            <h1 class="title is-4"> Adicionar Ajuda ou Estudo</h1>
            <div class="columns block">
              <div class="column is-12">
                <label class="label">
                    <Icone classes='fas fa-user-friends'></Icone>
                    Escolha entre Ajuda ou Estudo
                  </label>
                <div class="control">
                  <label class="radio">
                    <input
                      type="radio" name="answer" value='Estudo'
                      v-model="type" checked @change="changeType('Estudo')"
                    >
                    Estudo
                  </label>
                  <label class="radio">
                    <input
                      type="radio" name="answer" value="Ajuda"
                      v-model="type" @change="changeType('Ajuda')"
                    >
                    Ajuda
                  </label>
                </div>
              </div>
            </div>
            <div class="columns block">
              <div class="column is-6">
                <div class="field">
                  <label class="label">
                    <Icone class="fas fa-hands-helping"></Icone>
                    {{nomeEstudosAjuda}}
                  </label>
                  <div class="control">
                    <input
                      class="input"
                      type="text"
                      :placeholder='nomeEstudosAjuda'
                      v-model="estudosAjudas"
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
                    {{nomePontos}}
                  </label>
                  <div class="control">
                    <textarea
                      class="textarea"
                      :placeholder='nomePontos'
                      v-model="pontos"
                    >
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns block is-right container-button">
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-success" @click="addOutros()">
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
      nomeEstudosAjuda: 'Tecnologia Estudada',
      estudosAjudas: '',
      data: '',
      type: 'Estudo',
      nomePontos: 'Pontos Estudados',
      pontos: '',
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
      if (this.estudosAjudas.trim() === '') {
        this.errosForm.push(`Campo ${this.nomeEstudosAjuda} não pode ser em branco`);
      }
      if (this.data === '') {
        this.errosForm.push('Campo data não pode ser em branco');
      }
      if (this.pontos.trim() === '') {
        this.errosForm.push(`Campo ${this.nomePontos} não pode ser em branco`);
      }
      if (this.errosForm.length === 0) {
        this.$emit('criacaoOutro', {
          nomeTypo: this.nomeEstudosAjuda,
          componentes: this.estudosAjudas.trim(),
          data: this.dataReuniao,
          nomePonto: this.nomePontos,
          pontosAbordados: this.pontos.trim(),
        });
        this.EstudosAjudas = '';
        this.pontos = '';
      }
    },

    changeType(tipo) {
      if (tipo === 'Estudo') {
        this.nomeEstudosAjuda = 'Tecnologia Estudada';
        this.nomePontos = 'Pontos Estudados';
      } else {
        this.nomeEstudosAjuda = 'Pessoa Ajudada';
        this.nomePontos = 'Pontos Ajudados';
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
