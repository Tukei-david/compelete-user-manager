<template>
    <AuthLayout title="Forgot your password">
        <div class="-mt-5 mb-5">
            <p class="text-center text-gray-900 font-normal">
                We will send an email to your box, just follow that link to set your new password.
            </p>
        </div>
        <form class="space-y-6" @submit="forgotPassword">
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
                    >Username or email</label
                >
                <div class="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="email"
                        v-model="user.email"
                        required
                        class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                >
                    <svg
                        v-if="loading"
                        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Forgot
                </button>
            </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500">
            <router-link
                :to="{ name: 'Login' }"
                class="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"
                >Back to sign in</router-link
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
import ResetPassword from "./ResetPassword.vue";

const user = ref({
    email: "",
    password: "",
    remember: false,
});

const errors = ref("");
const loading = ref(false)
const router = useRouter();

function forgotPassword(ev) {
    ev.preventDefault();

    loading.value = true

}
</script>
