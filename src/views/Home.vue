<template>
    <el-container class="home-container">
        <el-aside width="200px">
            <LeftView />
        </el-aside>
        <el-main>
            <CenterView />
        </el-main>
    </el-container>
</template>

<script setup lang="ts">
import LeftView from './leftView/LeftView.vue';
import CenterView from './centerView/CenterView.vue';

</script>

<style scoped></style>