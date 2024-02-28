<template>
  <div>
    <h1>Butons</h1>
    <span v-for="num in 10" :key="num">
      <button @click="click(num)">{{ num }}</button>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    click(num) {
      console.log(num);
    }
  }
};
</script>

<style lang="scss" scoped></style>
