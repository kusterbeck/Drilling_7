<template>
  <div class="home">
    <h1 class="my-4">Lista de Cursos</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CardComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CardComponent from '@/components/CardComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld, CardComponent
  }
}
</script>
