<template>
    <div v-if="isAuthenticated && user">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in user" v-bind:key="key">
                    <td>{{ key }}</td>
                    <td>{{ typeof value === "string" ? value : JSON.stringify(value) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useLogto, type IdTokenClaims } from '@logto/vue';
import { ref } from 'vue';

const { isAuthenticated, getIdTokenClaims } = useLogto();
const user = ref<IdTokenClaims>();

if (isAuthenticated.value) {
    (async () => {
        const claims = await getIdTokenClaims();
        user.value = claims;
    })();
}
</script>