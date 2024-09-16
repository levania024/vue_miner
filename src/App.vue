<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import{ref} from 'vue'


const cheese = ref(0)


</script>


<template>
  <header>
    <div class="container">
      <section class="row">
        <div class="col">
          <div class="d-flex justify-content-center mt-3 mb-3">
            <h1><b>Tree Miner</b></h1>
          </div>
        </div>
      </section>
    </div>
  </header>
  <main>
    <div class="container">
      <section class="row">
        <div class="col-12">
          <div @click="cheese++" class="d-flex justify-content-center align-items-center">
            <img class="img-fluid tree-image" src="https://static.vecteezy.com/system/resources/previews/027/251/652/original/apple-tree-isolated-on-white-or-transparent-background-cutout-generative-ai-png.png" alt="Tree image">
          </div>
        </div>
        <div class="col-12">
          <div class="mt-3">
            <div type="text" class="fs-3"> Picked Cheese : {{cheese}} </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

.tree-image{
  height: 50vh;
}

</style>
