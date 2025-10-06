<template>
    <IconButton>
        <a @click="shareOnLinkedIn">
            <img :src="linkedin" alt="Linkedin" class="m-auto">
        </a>
    </IconButton>
    <IconButton>
        <a @click="shareOnGmail">
            <img :src="mail" alt="Mail" class="m-auto">
        </a>
    </IconButton>
    <IconButton>
        <a @click="shareOnInstagram">
            <input ref="copyInput" type="text" style="position: absolute; left: -9999px;"> <!-- Прихований input -->
            <img :src="instagram" alt="Instagram" class="m-auto">
        </a>
    </IconButton>
    <!-- <IconButton>
        <a @click="shareOnFacebook">
            <img :src="facebook" alt="Facebook" class="m-auto">
        </a>
    </IconButton> -->
</template>

<script>
import IconButton from "../../buttons/icon-button.vue";
import linkedin from "../../../assets/img/icons/socials/linkedin.svg";
import mail from "../../../assets/img/icons/socials/mail.svg";
import facebook from "../../../assets/img/icons/socials/facebook.svg";
import instagram from "../../../assets/img/icons/socials/instagram.svg";

export default {
    name: "ShareThisPostSocialsComponent",
    emits: ['showAlert'],
    components: {
        IconButton,
    },
    props: {
        postId: {
            type: String,
            required: true,
        }
    },
    data: function () {
        return {
            linkedin: linkedin,
            mail: mail,
            facebook: facebook,
            instagram: instagram,
        };
    },
    methods: {
        shareOnLinkedIn() {
            const baseUrl = process.env.NODE_ENV === 'production' ? 'https://hypedriven.com' : 'https://localhost:8080';
            const postLink = `${baseUrl}/detailed-post/${this.postId}`;
            const textToShare = encodeURIComponent(`Checkout this cool article! ${postLink} #NewPost`);
            const linkedInShareURL = `https://www.linkedin.com/feed/?shareActive=true&text=${textToShare}`;

            window.open(linkedInShareURL, '_blank', 'width=600,height=400');
        },
        shareOnGmail() {
            const baseUrl = process.env.NODE_ENV === 'production' ? 'https://hypedriven.com' : 'http://localhost:8080';
            const postLink = `${baseUrl}/detailed-post/${this.postId}`;
            const gmailShareURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to&body=${encodeURIComponent(postLink)}`;

            window.open(gmailShareURL, '_blank', 'width=600,height=400');
        },
        shareOnInstagram() {
            const baseUrl = process.env.NODE_ENV === 'production' ? 'https://hypedriven.com' : 'http://localhost:8080';
            const postLink = `${baseUrl}/detailed-post/${this.postId}`;
            const additionalText = 'Checkout this cool article! ';

            // Копіювати посилання в буфер обміну
            this.copyToClipboard(additionalText + postLink);

            // Додаткова логіка або повідомлення для користувача
            this.$emit('showAlert', 'success', 'Link for this post is copied!');

            // Відкрити Instagram в новому вікні
            setTimeout(() => window.open('https://www.instagram.com/direct/inbox/', '_blank', 'width=600,height=400'), 2000)
        },
        copyToClipboard(text) {
            const input = this.$refs.copyInput;
            input.value = text;
            input.select();
            document.execCommand('copy');
        },
        shareOnFacebook() {
            const baseUrl = process.env.NODE_ENV === 'production' ? 'https://hypedriven.com' : 'http://localhost:8080';
            const postLink = `${baseUrl}/detailed-post/${this.postId}`;
            const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postLink)}`;

            window.open(facebookShareURL, '_blank', 'width=600,height=400');

            // if (navigator.share) {
            //     navigator.share({
            //         text: 'Checkout this cool article!',
            //         url: postLink,
            //     })
            // } else {
            //     navigator.clipboard.writeText('Code we want copied')
            // }
        },
        
    }
};
</script>

