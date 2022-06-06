<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-black p-2 md:px-20 lg:px-28 xl:px-28">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">
                    <img :src="logo" alt="Logo" class="w-36"/>
                </span>
            </div>
            <div class="block md:hidden">
                <button @click="toggleMenu()" class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                <div class="hidden md:flex-grow md:flex justify-end gap-6">
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <a class="block md:inline-block cursor-pointer text-white hover:bg-gray-500 font-bold px-4 py-2 border-solid border-2 rounded-md border-sky-500">
                            {{menu?.name}}
                        </a>
                    </template>
                </div>
            </div>
        </nav>

        <nav :class="`${hideMenu ? 'transition-all duration-1000 -left-2/3' : 'block'} hidden items-center justify-between flex-wrap bg-white p-2 top-0 h-screen`" style="min-width: 50%">
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto">
                <div class="flex flex-col gap-6 my-4">
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <a class="block md:inline-block cursor-pointer text-white hover:bg-gray-500 font-bold px-4 py-2 border-solid border-2 rounded-md border-sky-500">
                            {{menu?.name}}
                        </a>
                    </template>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from "../../assets/img/white_Logo_USS.svg";
export default {
  name: "HeaderComponent",
    data: function() {
        return {
        logo: logo,
        hideMenu: true,
        menus:[
            {
            name: "Home",
            link: "/"
            },
            {
            name: "About",
            link: "/about"
            },
            {
            name: "Services",
            link: "/services"
            },
            {
            name: "Contact",
            link: "/contact"
            }
        ]
        };
  },
  methods: {
        toggleMenu: function () {
            this.hideMenu = !this.hideMenu;
        }
    }
};
</script>
