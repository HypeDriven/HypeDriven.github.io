<template>
    <div class="alert" :class="[type]">
        {{ message }}
        <button @click="closeAlert">&times;</button>
    </div>
</template>
  
<script>
export default {
    name: 'CustomAlertComponent',
    props: {
        show: Boolean,
        type: String,
        message: String,
    },
    methods: {
        closeAlert() {
            this.$emit('close');
        },
    },
};
</script>
  
<style scoped>
.alert {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
}

.success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #3c763d;
}

.error {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    float: right;
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    color: #000;
    opacity: 0.5;
}
</style>
  