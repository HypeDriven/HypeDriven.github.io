<template>
  <section class="vacancy">
    <div class="container">
      <!--dropdown start-->
      <template v-for="(vacancyData, index) in vacancyJson" :key="index">
        <div
          id="xamarin-developer"
          class="dropdown wow flipInX center"
          data-wow-duration="1.2s"
        >
          <div
            class="vacancy__item dropdown-item display-flex align-center justify-space-between"
          >
            <a href="#xamarin-developer">
              <h4 class="like-h4">{{ vacancyData?.title }}</h4>
            </a>
            <div class="icon">
              <span>+</span>
              <span class="hide">−</span>
            </div>
          </div>
          <div class="dropdown__open" style="display: block">
            <div class="vacancy__information">
              <p class="title">Responsibilities</p>
              <ul class="list">
                <li
                  class="list__item"
                  v-for="(
                    responsibilities_data, responsibilities_index
                  ) in vacancyData?.responsibilities"
                  :key="responsibilities_index"
                >
                  {{ responsibilities_data }}
                </li>
              </ul>
              <p class="title">Requirements</p>
              <ul class="list">
                <li class="list__item">
                  3+ years experience in software development
                </li>
                <li class="list__item">Excellent knowledge of .NET</li>
                <li class="list__item">
                  Experience with Xamarin or other mobile development
                </li>
                <li class="list__item">
                  Strong technical and troubleshooting skills
                </li>
                <li class="list__item">
                  Experience working extensively with design patterns in
                  architecting solutions, Knowledge/Experience with SOA
                </li>
              </ul>
              <!--form-->
              <div class="dropdown-form display-flex justify-center wrap">
                <div class="apply button button_primary">
                  Apply for this position
                </div>
                <div class="dropdown-form__open" style="display: none">
                  <form
                    class="form form_dark"
                    action="https://formspree.io/career@ukrainiansoftware.com"
                    method="POST"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      class="form__item input"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your E-mail Address"
                      required
                      class="form__item input"
                    />
                    <input
                      type="text"
                      name="link"
                      placeholder="Link to Resume or LinkedIn Profile"
                      class="form__item input"
                    />
                    <textarea
                      name="letter"
                      placeholder="Cover Letter (optional)"
                      class="form__item textarea"
                      rows="3"
                    ></textarea>
                    <input
                      type="submit"
                      value="Click to apply"
                      class="form__item button button_dark"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <!--dropdown end-->
    </div>
  </section>
</template>

<script>
import vacancyJson from "../../assets/json/vacancies.json";
export default {
  name: "VacanciesComponent",
  data() {
    return {
      vacancyJson: vacancyJson,
    };
  },
};
</script>
