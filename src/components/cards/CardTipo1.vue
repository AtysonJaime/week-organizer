<template>
  <div class="column is-10">
    <div class="card">
      <button
        class="button is-danger is-light button-delete is-outlined"
        title="Excluir Cartão"
        @click='deleteCard()'
      >
        <Icone classes='fas fa-trash-alt'/>
      </button>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-6">
              <p class="title is-4">{{titulos[0]}}:</p>
              <p class="subtitle is-5">{{primDado}}</p>
            </div>
            <div class="column is-6">
              <p class="title is-4">{{titulos[1]}}:</p>
              <p class="subtitle is-5">{{ajustaData}}</p>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <p class="title is-4">{{titulos[2]}}:</p>
              <p
                class="subtitle is-5 p-atividades"
                v-for="(text,index) in ajustaDadosArray" :key="index"
              >
                {{text}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icone from '../Icones.vue';

export default {
  components: {
    Icone,
  },

  props: {
    titulos: Object,
    idDado: Number,
    dataDado: String,
    primDado: String,
    secunDado: String,
  },

  computed: {
    ajustaDadosArray() {
      const newArray = this.secunDado.split('\n');
      return newArray;
    },

    ajustaData() {
      const arrayData = this.dataDado.split('-');
      const ano = arrayData[0];
      const mes = arrayData[1];
      const dia = arrayData[2];

      return `${dia}/${mes}/${ano}`;
    },
  },

  methods: {
    deleteCard() {
      this.$emit('deletarCard', { id: this.idDado });
    },
  },
};
</script>

<style lang="scss" scoped>
  .card {
    position: relative;

    .button-delete {
      position: absolute;
      right: 2%;
      top: 3%;
    }

    .title {
      margin-bottom: 30px;
    }
    .p-atividades {
      margin-bottom: 10px;
    }
  }

</style>
