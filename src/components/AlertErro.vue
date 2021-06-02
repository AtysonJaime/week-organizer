<template>
  <article class="message is-danger" v-show='erros.length != 0'>
    <div class="message-body">
      <p><Icone classes='fas fa-exclamation' /> Erros encontrados:</p>
      <ul>
        <li v-for="erro in erros" :key="erro">{{erro}}</li>
      </ul>
    </div>
  </article>
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
