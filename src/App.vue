<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from './AppState.js';
import { treeMinerService } from './services/TreeMinerService.js';

const cheese = computed(() => AppState.cheese);
const clickUpgrades = computed(() => AppState.clickUpgrades); 
const autoUpgrades = computed(() => AppState.autoUpgrades); 

function mine() {
    treeMinerService.mine();
}

function buyClickUpgrade(upgrade) {
    treeMinerService.buyClickUpgrade(upgrade);
}

function buyAutoUpgrade(upgrade) {
    treeMinerService.buyAutoUpgrade(upgrade);
}

onMounted(() => {
    setInterval(() => {
        treeMinerService.collectAutoCheese();
    }, 1000); 
});
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
          <div @click="mine()" class="d-flex justify-content-center align-items-center">
            <img class="img-fluid tree-image"
              src="https://static.vecteezy.com/system/resources/previews/027/251/652/original/apple-tree-isolated-on-white-or-transparent-background-cutout-generative-ai-png.png"
              alt="Tree image">
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer class="bg-success">
    <div class="container">
      <section class=" d-flex row justify-content-center">
        <div class="col-lg-6">
          <div class=" card mt-3  align-items-center">
            <div class="fs-3"> Picked Cheese : {{ cheese }} </div>
          </div>
        </div>
      </section>

      <section class=" d-flex row">
        <div class="col-12">
          <section class="row">
            <div class="col-lg-6">
              <div class=" card mt-3">
                <label type="text" class="fs-3"> ClickUpgrades </label>
                <div v-for="upgrade in clickUpgrades" :key="upgrade.id">
                  <button class="btn btn-primary" @click="buyClickUpgrade(upgrade)">
                    {{ upgrade.name }} {{ upgrade.cost }}
                  </button>
                </div>
              </div>
            </div>

            <div class="col-lg-6">
              <div class=" card mt-3">
                <label type="text" class="fs-3"> AutoUpgrades </label>
                <div v-for="upgrade in autoUpgrades" :key="upgrade.id">
                  <button class="btn btn-primary" @click="buyAutoUpgrade(upgrade)">
                    {{ upgrade.name }} {{ upgrade.cost }}
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  </footer>
</template>


<style lang="scss">
@import "./assets/scss/main.scss";

.tree-image {
  height: 50vh;
}
button {
  height: 10vh;
  padding: 10rem;
  margin: 5px;
}
</style>
