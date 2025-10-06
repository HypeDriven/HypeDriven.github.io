<template>
  <header class="header">
    <div class="container">
      <router-link class="header__logo" to="/">
        <img :src="require('../../assets/img/white_Logo_USS.svg')" alt="Logo" />
      </router-link>
      <div class="header__nav">
        <ul class="menu">
          <li><router-link class="menu__item scroll" to="/#expertise" :class="currentRoutePath === '/' ?'menu__item active': 'menu__item'">Expertise</router-link></li>
          <li><router-link :class="currentRoutePath === '/careers' ?'menu__item active': 'menu__item'" to="/careers">Careers</router-link></li>
          <li>
            <a href="#contacts" class="menu__button button button_dark"
              >Get in touch</a
            >
          </li>
        </ul>

        <div class="menu__toggle">
          <span class="open-menu-btn">
            <img
              src="../../assets/img/icons/icon-menu-open.png"
              alt="Open menu"
            />
            <img
              src="../../assets/img/icons/icon-menu-close.png"
              alt="Close menu"
              class="hide"
            />
          </span>
        </div>

        <ul class="menu menu_responsive">
          <li><router-link class="menu__item active" to="/">Home</router-link></li>
          <li><router-link class="menu__item scroll" to="/#expertise">Expertise</router-link></li>
          <li><router-link class="menu__item active" to="/careers">Careers</router-link></li>
          <li><a href="#contacts" class="menu__item">Get in touch</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  computed: {
    currentRoutePath() {
        return this.$route.path;
    }
}
};
</script>
