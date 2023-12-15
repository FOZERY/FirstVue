<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.btn {
  padding: 10px 15px;
  background: rgb(241, 241, 241);
  border: none;
  color: rgb(104, 104, 104);
  border-radius: 15px;
  cursor: pointer;
  transition: color ease 0.2s;
}

.btn:hover {
  color: black;
}
</style>
