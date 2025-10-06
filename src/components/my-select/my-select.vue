<template>
    <div class="custom-select">
      <select v-model="selectedOption" class="rounded-3xl" @change="onChange">
        <option class="bg-[white]" v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: "CustomSelect",
    props: {
      options: {
        type: Array,
        required: true,
      },
      value: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        selectedOption: this.value,
      };
    },
    methods: {
      onChange(event) {
        this.$emit("update:modelValue", event.target.value);
      },
    },
  };
  </script>
  
  <style>
  .custom-select {
    position: relative;
  }
  
  .custom-select select {
    appearance: none;
    width: 100%;
    padding: 10px;
    font-size: 16px;

    background-color: #fff;
    cursor: pointer;
  }
  
  .custom-select select:focus {
    outline: none;
    border-color: #555;
  }
  
  .custom-select::after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
    pointer-events: none;
  }
  </style>