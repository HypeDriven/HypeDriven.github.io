<template>
    <IconButton>
        <a href="https://www.linkedin.com/company/hypedriven/mycompany/">
            <img :src="linkedin" alt="Linkedin" class="m-auto">
        </a>
    </IconButton> 
    <IconButton>
        <a href="mailto:careers@hypedriven.com">
            <img :src="mail" alt="Mail" class="m-auto">
        </a>
    </IconButton>
     <IconButton>
        <a href="https://instagram.com/hype.driven?igshid=YmMyMTA2M2Y=">
            <img :src="instagram" alt="Instagram" class="m-auto">
        </a>
    </IconButton>
</template>

<script>
import IconButton from "../buttons/icon-button.vue";
import linkedin from "../../assets/img/icons/socials/linkedin.svg";
import mail from "../../assets/img/icons/socials/mail.svg";
import instagram from "../../assets/img/icons/socials/instagram.svg";
import facebook from "../../assets/img/icons/socials/facebook.svg";

export default {
    name: "SocialsComponent",
    components: {
        IconButton
    },
    data: function () {
        return {
            linkedin: linkedin,
            mail: mail,
            instagram: instagram,
            facebook: facebook
        };
    }
};
</script>

