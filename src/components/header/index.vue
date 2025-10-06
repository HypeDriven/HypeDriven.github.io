<template>
    <div>
        <nav
            class="z-10 flex items-center justify-between flex-wrap bg-white p-4 md:px-16 lg:px-28 xl:px-28 4xl:px-52 5xl:px-64 6xl:px-80 7xl:px-96 w-full relative"> <!--lg:px-20 -->
            <div class="flex items-center flex-shrink-0 mr-6 z-10">
                <span class="font-semibold text-xl tracking-tight">
                    <router-link to="/">
                        <img :src="logo" alt="Logo" class="w-[205px]" />
                    </router-link>
                </span>
            </div>
            <div class="absolute xs:hidden xxs:hidden" :class="hideMenu ? '' : 'hidden'"> <!---->
                <div v-if="$route.path == '/'" class="rounded-full animation "></div>
                <div v-if="$route.path == '/'" class="rounded-full secAnimation "></div>
            </div>

            <div class="block z-10 xl:hidden">
                <button @click="toggleMenu()" class="flex items-center px-2 py-2">
                    <div class="burger-menu" :class="{ clicked: !hideMenu }">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </button>
            </div>
            <div class="w-full block flex-grow xl:flex xl:items-center xl:w-auto z-10"
                :class="!hideMenu ? 'md:h-auto' : ''">
                <div class="xl:flex-grow xl:flex justify-end xl:gap-6 md:gap-2"
                    :class="!hideMenu ? 'flex flex-col my-8 xl:my-0 xl:flex-grow xl:flex-row xl:flex xl:justify-end gap-6 xxs:gap-4' : 'hidden'">
                    <div
                        class="xl:hidden xxs:block xs:block sm:block md:block border-t-2 border-[#9DD3E1] w-[100vw] self-center">
                    </div>
                    <template v-for="(menu, menuIndex) in menus" :key="menuIndex">
                        <router-link :to="{ path: menu.link, query: { id: menu?.id } }"
                            :class="`font-extrabold xxs:text-center xxs:border-b-2 xxs:pb-3 xxs:border-[#9DD3E1] xxs:last:border-none xs:text-center xs:border-b-2 xs:pb-3 xs:border-[#9DD3E1] xs:last:border-none sm:text-center sm:border-b-2 sm:pb-3 sm:border-[#9DD3E1] sm:last:border-none sm:text-base md:text-center borderMd md:text-base lg:text-base xl:text-sm 5xl:text-base ${$route.path == menu.link && $route.query?.id == menu.id ? 'text-[#150DCE] border-b-2 border-[#150DCE]' : ''}`">
                            {{ menu?.name }}
                        </router-link>
                    </template>
                    <!-- <button v-if="!user" class="font-extrabold text-white p-1"
                        :style="{ backgroundColor: '#150DCE', borderRadius: '5px' }" @click="goToLoginPage">Log in</button>
                    <button v-if="user" class="font-extrabold text-white p-1" @click="logout" :style="{ backgroundColor: 'red', borderRadius: '5px' }">Log out <i class="fas fa-sign-out-alt"></i></button> -->
                    <button v-if="user" class="font-extrabold text-white p-1" @click="logout" :style="{ backgroundColor: 'red', borderRadius: '5px' }"><span class="log-out-btn-text">Log out </span><i class="fas fa-sign-out-alt"></i></button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import logo from "../../assets/img/logo.svg";
import { getAuth, signOut } from 'firebase/auth';

export default {
    name: "HeaderComponent",
    data: function () {
        return {
            logo: logo,
            hideMenu: true,
            user: null,
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
                },
                {
                    name: "Industries",
                    link: "/industries",
                },
                {
                    name: "Technologies",
                    link: "/technologies",
                },
                {
                    name: "Diversity",
                    link: "/diversity",
                },
                {
                    name: "Team",
                    link: "/team",
                },
                {
                    name: "Careers",
                    link: "/careers",
                },
                {
                    name: "Blog",
                    link: "/blog",
                },
                {
                    name: "Contact us",
                    link: "/contact-us",
                }
            ]
        };
    },
    mounted() {
        const auth = getAuth();
        auth.onAuthStateChanged(user => {
            this.user = user;
        });
    },
    methods: {
        toggleMenu: function () {
            this.hideMenu = !this.hideMenu;
        },
        // goToLoginPage() {
        //     this.$router.push('/log-in');
        // },
        async logout() {
            const auth = getAuth();
            await signOut(auth);
            console.log('Logged out successfully');
            this.$router.push('/');
        }
    }
};
</script>

<style>
@keyframes waves {
    100% {
        transform: scale(4);
        opacity: 0.2;

    }
}

.animation {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0);
    position: relative;
    z-index: 1;
}

.animation::before,
.animation::after {
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
    background-color: rgba(255, 255, 255, 0);
    position: relative;
    z-index: 1;
    top: -150px;
}

.secAnimation::before,
.secAnimation::after {
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

.burger-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20px;
    width: 40px;
    cursor: pointer;
}

.burger-menu .line:nth-child(2) {
    background-color: #9DD3E1;
}

.line {
    height: 3px;
    width: 100%;
    background-color: #150DCE;
    transition: transform 0.4s ease-out;
}

.log-out-btn-text {
    display: inline-block;
}

.clicked .line:nth-child(1) {
    transform: translateY(8px) rotate(135deg);
}

.clicked .line:nth-child(2) {
    /* opacity: 0; */
    transform: translateX(-70%) rotate(90deg);
}

.clicked .line:nth-child(3) {
    transform: translateY(-9px) rotate(-135deg);
}

@media (min-width: 1750px) {
    .animation {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0);
        position: relative;
        z-index: 1;
    }

    .animation::before,
    .animation::after {
        content: "";
        width: 270%;
        height: 270%;
        border: 1px solid rgba(211, 211, 211, 0.425);
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        position: absolute;
        opacity: 0.6;
    }

    .animation::before {
        animation: waves 4s .2s ease-out infinite;
        width: 300%;
        height: 300%;
    }

    .secAnimation {
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0);
        position: relative;
        z-index: 1;
        top: -250px;
    }

    .secAnimation::before,
    .secAnimation::after {
        content: "";
        width: 200%;
        height: 200%;
        border: 1px solid rgba(211, 211, 211, 0.425);
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        position: absolute;
        opacity: 0.6;
    }

    .secAnimation::before {
        animation: waves 4s .5s ease-out infinite;
        width: 240%;
        height: 240%;
    }
}

@media (min-width: 1280px) and (max-width: 1374.5px) {
    .log-out-btn-text {
        display: none;
    }
}

@media (min-width: 1024px) and (max-width: 1279.5px) {
    .borderMd {
        border-bottom: 2px solid #9DD3E1;
        padding-top: 8px;
        padding-bottom: 12px;
    }

    .borderMd:last-child {
        border-bottom: none;
    }
}

@media (min-width: 768px) and (max-width: 1023.5px) {
    .borderMd {
        border-bottom: 2px solid #9DD3E1;
        padding-top: 8px;
        padding-bottom: 12px;
    }

    .borderMd:last-child {
        border-bottom: none;
    }
}
</style>
