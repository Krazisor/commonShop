import { defineStore } from 'pinia';

interface User {
    id: string;
    name: string;
    email: string;
    token: string;
}

interface UserLoginState {
    user: User | null;
}

export const useUserLoginStore = defineStore('userLogin', {
    state: (): UserLoginState => ({
        user: null,
    }),
    actions: {
        login(user: User) {
            this.user = user;
        },
        logout() {
            this.user = null;
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        getUserName: (state) => state.user?.name || '',
    },
});