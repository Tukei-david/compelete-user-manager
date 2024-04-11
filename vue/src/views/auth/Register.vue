<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="/public/images/logo.png"
                alt="Your Company"
            />
            <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
                Create your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit="register">
                <Alert v-if="Object.keys(errors).length">
                    <div>
                        <div v-for="(field, i) of Object.keys(errors)">
                            <div
                                v-for="(error, ind) of errors[field] || []"
                                :key="ind"
                                class="block"
                            >
                                {{ error }}
                            </div>
                        </div>
                    </div>

                    <div class="flex items-start h-auto">
                        <span
                            @click="errors = {}"
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
                        for="name"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Full Name</label
                    >
                    <div class="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            v-model="user.name"
                            required=""
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                        />
                    </div>
                </div>

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
                            required=""
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <div class="mt-2">
                        <label
                            for="password"
                            class="block text-sm font-medium leading-6 text-gray-900"
                            >Password</label
                        >
                        <input
                            id="password"
                            name="password"
                            type="password"
                            v-model="user.password"
                            autocomplete="current-password"
                            required=""
                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="password-confirmation"
                        class="block text-sm font-medium leading-6 text-gray-900"
                        >Confirm Password</label
                    >
                    <input
                        id="password-confirmation"
                        name="password-confirmation"
                        type="password"
                        autocomplete="current-password-confirmation"
                        v-model="user.password_confirmation"
                        required=""
                        class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                    />
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
                Already have an existing account?
                {{ " " }}
                <a
                    href="#"
                    class="font-semibold leading-6 text-yellow-600 hover:text-yellow-500"
                    >Login</a
                >
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../../store";
import Alert from "../../components/Alert.vue";

const user = ref({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
});

const errors = ref({});

function register(e) {
    e.preventDefault();

    console.log("Working");
    console.log(user);

    store
        .dispatch("register", user.value)
        .then((res) => {
            console.log("User created successfully!");
        })
        .catch((e) => {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
                console.log(errors.value);
            }
        });
}
</script>
