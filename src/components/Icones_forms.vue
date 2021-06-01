<template>
   <span class="icon is-small is-left">
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
