<template>
  <div class="relative">
    <header class="header">
      <div class="container flex my-auto py-4 flex-col md:flex-row gap-10">
        <router-link class="header__logo md:m-auto" to="/"
          ><img :src="logo" alt="Logo"
        /></router-link>
        <div class="flex gap-5">
          <ul class="menu">
            <li>
              <router-link
                class="menu__item scroll"
                to="/expertise"
                :class="
                  currentRoutePath === '/' ? 'menu__item active' : 'menu__item'
                "
                >Expertise</router-link
              >
            </li>
            <li>
              <router-link
                :class="
                  currentRoutePath === '/careers'
                    ? 'menu__item active'
                    : 'menu__item'
                "
                to="/careers"
                >Careers</router-link
              >
            </li>
            <li>
              <a href="#contacts" class="menu__button button button_dark"
                >Get in touch</a
              >
            </li>
          </ul>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import logo from "../../../assets/img/white_Logo_USS.svg";
export default {
  name: "headerComponent",
  data: function () {
    return {
      logo: logo,
    };
  },
};
</script>
