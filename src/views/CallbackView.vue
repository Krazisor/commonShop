<!-- 本页面用于完成登录的重定向 -->

<template>
    <!-- When it's working in progress -->
    <p v-if="isLoading">Redirecting...</p>
    123123123123123123
</template>

<script setup lang="ts">
import { useHandleSignInCallback } from '@logto/vue';
import router from '../router';
import { ElMessage } from 'element-plus';
import { onMounted } from 'vue';

const { isLoading, isAuthenticated, error } = useHandleSignInCallback(() => {
    console.log(isLoading.value, isAuthenticated.value);
    console.log('error', error.value);
    ElMessage.success('Login successfully');
    router.push('/home');

});

onMounted(() => {
    useHandleSignInCallback()
});


</script>