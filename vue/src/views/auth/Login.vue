<template>
    <AuthLayout title="Sign in to your account">
        <form class="space-y-6" @submit="login">
            <Alert v-if="errors">
                <div class="text-sm">
                    <div>
                        {{ errors }}
                    </div>
                </div>
                <div class="text-sm">
                    <span
                        @click="errors = ''"
                        class="cursor-pointer transition-colors hover:bg-[rgba(0,0,0,0.2)] w-6 h-6 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    </span>
                </div>
            </Alert>
            <div>
                <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Email address</label
                >
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        v-model="user.email"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label
                        for="password"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Password</label
                    >
                    <div class="text-sm">
                        <a
                            href="#"
                            class="font-semibold text-yellow-600 hover:text-yellow-500"
                            >Forgot password?</a
                        >
                    </div>
                </div>
                <div class="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="current-password"
                        v-model="user.password"
                        required
                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        v-model="user.remember"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        for="remember-me"
                        class="ml-2 block text-sm text-gray-900"
                        >Remember me</label
                    >
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                    Sign in
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            {{ " " }}
            <router-link
                :to="{ name: 'Register' }"
                class="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"
                >Register here</router-link
            >
        </p>
    </AuthLayout>
</template>

<script setup>
import { ref } from "vue";
import AuthLayout from "../../components/layouts/AuthLayout.vue";
import store from "../../store";
import { useRouter } from "vue-router";
import Alert from "../../components/Alert.vue";

const user = ref({
    email: "",
    password: "",
    remember: false,
});

const errors = ref("");

const router = useRouter();

function login(ev) {
    ev.preventDefault();

    console.log(user.value);

    store
        .dispatch("login", user.value)
        .then(() => {
            router.push({
                name: "Dashboard",
            });
            console.log("Succesfully logged in!");
        })
        .catch((err) => {
            console.log(err);
            errors.value = err.response.data.error
        });
}
</script>
