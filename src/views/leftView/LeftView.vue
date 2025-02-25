<template>
    <div class="left-container">
        <el-button v-if="!isAuthenticated" @click="onClickSignIn">
            Sign In
        </el-button>
        <el-button v-else @click="onClickSignOut">
            Sign Out
        </el-button>

        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
                <el-icon>
                    <location />
                </el-icon>
                <template #title>Navigator One</template>
            </el-menu-item>

            <el-menu-item index="2">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>Navigator Two</template>
            </el-menu-item>

            <el-menu-item index="3" disabled>
                <el-icon>
                    <document />
                </el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>

            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useLogto } from '@logto/vue';
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const { signIn, signOut, isAuthenticated } = useLogto();


const onClickSignIn = () => {
    signIn('http://localhost:5173/callback');
}
const onClickSignOut = () => signOut('http://localhost:5173/home');


const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="css" scoped>
.left-container {
    width: 200px;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>