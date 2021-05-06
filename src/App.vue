<template>
  <div id="app">
    <b-navbar toggleable="lg" type="light " variant="primary">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <b-navbar-brand href="#">EIS GRAN MARISCAL</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-nav-text>
          <router-link to="/">Inicio</router-link> |
          <router-link to="/equipo">Equipo</router-link> |
          <router-link to="/circuitos">Circuitos</router-link> |
          <router-link to="/instituciones">Instituciones</router-link> |
          <router-link to="/poblacion">Poblacion</router-link>
        </b-nav-text>
        <b-navbar-nav id="nav" class="ml-auto ">
          <b-nav-item-dropdown left>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(
    to right top,
    #c46bd1,
    #b57adc,
    #a687e3,
    #9992e8,
    #8e9ce9,
    #7fa8f1,
    #72b4f6,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
}

/*#nav {
  padding: 30px;
  text-align: initial;
  background-color: ivory;
}
*/
/*#nav a {
  font-weight: bold;
  color: #0a0a0a;
 
}

#nav a.router-link-exact-active {
  color: #f1f1f5;
}
*/
img {
  width: 60px;
  height: 60px;
  margin-right: 2%;
}
</style>
