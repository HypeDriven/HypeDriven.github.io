<template>
  <footer class="footer px-5 md:px-5">
    <div class="container flex my-auto py-4 flex-col md:flex-row gap-10">
      <a class="footer__logo md:m-auto" href="/"
        ><img :src="logo" alt="Logo"
      /></a>
      <div class="flex gap-y-5 gap-x-10 flex-wrap">
        <div class="information flex gap-5 md:my-auto">
          <div class="icon h-fit my-auto">
            <img src="../../../assets/img/icons/icon-mail.png" alt="Icon mail" />
          </div>
          <div class="h-fit my-auto">
            <p class="paragraph">hello@ukrainiansoftware.com</p>
            <p class="paragraph">career@ukrainiansoftware.com</p>
          </div>
        </div>

        <div class="information flex align-start flex-col md:my-auto">
          <div class="flex align-center w-full">
            <div class="icon icon_small my-auto">
              <img
                src="../../../assets/img/icons/icon-location.png"
                alt="Icon mail"
              />
            </div>
            <p class="paragraph">Kyiv, Ukraine</p>
          </div>
          <div class="flex align-center w-full">
            <div class="icon icon_small my-auto">
              <img
                src="../../../assets/img/icons/icon-phone.png"
                alt="Icon mail"
              />
            </div>
            <p class="paragraph">+38 063 573 78 84</p>
          </div>
        </div>

        <div class="information flex align-center  md:my-auto">
          <div>
            <p class="paragraph">
              <a
                href="https://www.linkedin.com/company/ukrainian"
                target="_blank"
                class="social flex gap-4"
                ><i class="fab fa-linkedin-in my-auto"></i>Contact us in LinkedIn</a
              >
            </p>
            <p class="paragraph">
              <a
                href="https://www.instagram.com/ukrainiansoftware/?hl=en"
                target="_blank"
                class="social flex gap-4"
                ><i class="fab fa-instagram my-auto"></i>Follow us on Instagram</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from "../../../assets/img/white_Logo_USS.svg"
export default {
  name: "FooterComponent",
  data: function () {
            return {
                logo: logo
            }
        }

};
</script>
