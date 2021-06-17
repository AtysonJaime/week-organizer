<template>
  <span class="icon is-small">
    <i :class="classes"></i>
  </span>
</template>

<script>
export default {
  props: {
    classes: String,
  },
};
</script>
