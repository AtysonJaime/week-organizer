<template>
  <div class="notification is-danger is-light" v-show='erros.length != 0'>
    <p><IconForm classes='fas fa-exclamation' /> Erros encontrados:</p>
    <ul>
      <li v-for="erro in erros" :key="erro">{{erro}}</li>
    </ul>
  </div>
</template>

<script>
import IconForm from './Icones_forms.vue';

export default {
  components: {
    IconForm,
  },

  props: {
    erros: Object,
  },
};
</script>
