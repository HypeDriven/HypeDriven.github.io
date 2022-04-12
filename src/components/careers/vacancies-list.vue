<template>
  <section class="vacancy mt-5">
    <div class="container">
      <!--dropdown start-->
      <template v-for="(vacancyData, index) in vacancyJson" :key="index">
        <div class="bg-white shadow-lg">
          <div
            class="px-4 py-5 sm:px-6 bg-gray-50 cursor-pointer flex justify-between"
            @click="toggleSelection(index)"
          >
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ vacancyData?.title }}
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                {{ vacancyData?.subtitle }}
              </p>
            </div>
            <div>+</div>
          </div>
          <div class="border-t border-gray-200" v-show="selected == index">
            <dl>
              <div
                class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">Email Address</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ vacancyData?.email }}
                </dd>
              </div>
              <div
                class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">
                  Responsibilities
                </dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul style="list-style-type: disc">
                    <template
                      v-for="(
                        responsibility, responsibility_index
                      ) in vacancyData.responsibilities"
                      :key="responsibility_index"
                    >
                      <li>{{ responsibility }}</li>
                    </template>
                  </ul>
                </dd>
              </div>
              <div
                class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">Requirements</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul style="list-style-type: disc">
                    <template
                      v-for="(
                        requirement, requirements_index
                      ) in vacancyData.requirements"
                      :key="requirements_index"
                    >
                      <li>{{ requirement }}</li>
                    </template>
                  </ul>
                </dd>
              </div>
              <div
                class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="text-sm font-medium text-gray-500">Desctiption</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {{ vacancyData?.desctiption }}
                </dd>
              </div>
              <div class="bg-white-50 px-4 py-5">
                <div
                  class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex justify-end"
                >
                  <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </dl>
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
      selected: -1,
    };
  },
  methods: {
    toggleSelection(current) {
      if (this.selected == current) {
        this.selected = -1;
      } else {
        this.selected = current;
      }
    },
  },
};
</script>
