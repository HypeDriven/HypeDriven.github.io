<template>
    <div>
        <nav
            class="z-20 flex items-center justify-between flex-wrap bg-white p-4 md:px-16 lg:px-28 xl:px-28 w-full mt-[-50px]"
            :class="`${$route.path=='/' ? '' : 'mt-[0px]'}`">
            <div class="flex items-center flex-shrink-0 mr-6 z-10">
                <span class="font-semibold text-xl tracking-tight">
                    <router-link to="/">
                        <img :src="logo" alt="Logo" />
                    </router-link>
                </span>
            </div>
            <div v-if="$route.path=='/'" class="rounded-full animation"></div>
            <div v-if="$route.path=='/'" class="rounded-full secAnimation"></div>
            <div class="block md:hidden">
                <button @click="toggleMenu()"
                    class="flex items-center px-3 py-2 border rounded text-primary-button border-primary-button hover:text-secondary-button hover:border-secondary-button">
                    <svg class="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path v-if="hideMenu" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        <path v-else
                            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                    </svg>
                </button>
            </div>
            <div class="w-full block flex-grow md:flex md:items-center md:w-auto z-10"
                :class="!hideMenu ? 'h-screen md:h-auto' : ''">
                <div class="md:flex-grow md:flex justify-end gap-6"
                    :class="!hideMenu ? 'flex flex-col my-8 md:my-0 md:flex-grow md:flex-row md:flex md:justify-end gap-6' : 'hidden'">
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <a class="text-black font-extrabold" v-if="menu?.id == 'contactus'"
                            href="mailto:careers@hypedriven.com">
                            {{ menu?.name }}
                        </a>
                        <router-link v-else :to="{ path: menu.link, query: { id: menu?.id } }"
                            :class="`font-extrabold ${$route.path == menu.link && $route.query?.id == menu.id ? 'text-[#314FA5] border-b-2 border-[#314FA5] ' : ''}`">
                            {{ menu?.name }}
                        </router-link>
                    </template>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from "../../assets/img/logo.svg";
export default {
    name: "HeaderComponent",
    data: function () {
        return {
            logo: logo,
            hideMenu: true,
            menus: [
                {
                    name: "Home",
                    link: "/"
                },
                {
                    name: "About Us",
                    link: "/about-us"
                },
                {
                    name: "Services",
                    link: "/services",
                    // id: "services"
                },
                {
                    name: "Industries",
                    link: "/industries",
                    // id: "industries"
                },
                {
                    name: "Technologies",
                    link: "/technologies",
                    // id: "technologies"
                },
                {
                    name: "Diversity",
                    link: "/diversity",
                    // id: "diversity"
                },
                {
                    name: "Team",
                    link: "/team",
                    // id: "team"
                },
                {
                    name: "Careers",
                    link: "/careers",
                    // id: "careers"
                },
                {
                    name: "Contact us",
                    link: "/",
                    id: "contactus"
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

<style>

    @keyframes waves {
        100%{
            /*box-shadow: 0 0 0 1000px #b3822700;*/
            transform: scale(4);
            opacity: 0.2;
            
        }
    }

    .animation {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 0 0 #ffffff;
        /*animation: waves 4s infinite linear;*/
        position: relative;
        z-index: 1;
        top: -40px; left: -200px;
    }

    .animation::before,
    .animation::after{
        content: "";
        width: 200%;
        height: 200%;
        border: 1px solid rgba(211, 211, 211, 0.425);
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        position: absolute;
        opacity: 0.6;
    }

    .animation::before {
        animation: waves 4s .2s ease-out infinite;
        width: 230%;
        height: 230%;
    }
    .animation::after {
        animation: waves 4s .3s ease-out infinite;
    }

    .secAnimation {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 0 0 #ffffff;
        position: relative;
        z-index: 1;
        top: -40px; left: -350px;
    }

    .secAnimation::before,
    .secAnimation::after{
        content: "";
        width: 140%;
        height: 140%;
        border: 1px solid rgba(211, 211, 211, 0.425);
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        position: absolute;
        opacity: 0.6;
    }

    .secAnimation::before {
        animation: waves 4s .5s ease-out infinite;
        width: 170%;
        height: 170%;
    }
    .secAnimation::after {
        animation: waves 4s .6s ease-out infinite;
    }

</style>
