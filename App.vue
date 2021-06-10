<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <h1 class="l-titulo">ACESSOS</h1>

      <div class="r-links">
        <router-link to="/">HOME</router-link>
        <router-link to="/Sobre">Sobre</router-link>
      </div>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon class="l-button" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Sistema de Login</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style>


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.r-links{
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.r-links a{
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-bottom: 1px solid black;
}

.l-titulo{
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
}

.l-button{
  color: white !important;
}

.v-toolbar__title{
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
}

header{
  background-image: url('./assets/topo.jpg');
  background-position: center;
  background-size: cover;
}
</style>