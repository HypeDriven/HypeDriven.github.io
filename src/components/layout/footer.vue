<template>
  <footer class="footer">
    <div class="container">
      <a class="footer__logo" href="/"
        ><img src="../../assets/img/white_Logo_USS.svg" alt="Logo"
      /></a>
      <div class="footer__information display-flex">
        <div class="information display-flex">
          <div class="icon">
            <img src="../../assets/img/icons/icon-mail.png" alt="Icon mail" />
          </div>
          <div>
            <p class="paragraph">hello@ukrainiansoftware.com</p>
            <p class="paragraph">career@ukrainiansoftware.com</p>
          </div>
        </div>

        <div class="information display-flex align-start column">
          <div class="display-flex align-center full-width">
            <div class="icon icon_small">
              <img src="../../assets/img/icons/icon-location.png" alt="Icon mail" />
            </div>
            <p class="paragraph">Kyiv, Ukraine</p>
          </div>
          <div class="display-flex align-center full-width">
            <div class="icon icon_small">
              <img src="../../assets/img/icons/icon-phone.png" alt="Icon mail" />
            </div>
            <p class="paragraph">+38 063 573 78 84</p>
          </div>
        </div>

        <div class="information display-flex align-center">
          <div>
            <p class="paragraph">
              <a
                href="https://www.linkedin.com/company/ukrainian"
                target="_blank"
                class="social"
                ><i class="fab fa-linkedin-in"></i>Contact us in LinkedIn</a
              >
            </p>
            <p class="paragraph">
              <a
                href="https://www.instagram.com/ukrainiansoftware/?hl=en"
                target="_blank"
                class="social"
                ><i class="fab fa-instagram"></i>Follow us on Instagram</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>
