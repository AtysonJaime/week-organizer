<template>
  <div class="notification is-danger is-light" v-show='erros.length != 0'>
    <p><Icone classes='fas fa-exclamation' /> Erros encontrados:</p>
    <ul>
      <li v-for="erro in erros" :key="erro">{{erro}}</li>
    </ul>
  </div>
</template>

<script>
import Icone from './Icones.vue';

export default {
  components: {
    Icone,
  },

  props: {
    erros: Object,
  },
};
</script>
