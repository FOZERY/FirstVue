<template>
  <div class="post">
    <div><strong>Название:</strong> {{ post.title }}</div>
    <div><strong>Описание:</strong> {{ post.body }}</div>
    <div class="post__btns">
      <my-button @click="$emit('remove', post)">Удалить</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 15px;
  margin-top: 15px;
  border: 1px solid rgb(113, 113, 113);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 1px 4px 5px 0px rgba(34, 60, 80, 0.1);
  -moz-box-shadow: 1px 4px 5px 0px rgba(34, 60, 80, 0.1);
  box-shadow: 1px 4px 5px 0px rgba(34, 60, 80, 0.1);
}
</style>
