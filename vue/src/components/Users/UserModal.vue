<template>
    <TransitionRoot as="template" :show="open">
        <Dialog class="relative z-10" @close="open = false">
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <TransitionChild
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                        >
                            <header
                                class="py-3 px-4 flex justify-between items-center"
                            >
                                <DialogTitle
                                    as="h3"
                                    class="text-lg font-medium leading-6 text-gray-900"
                                    >{{
                                        user.id
                                            ? `Update User: ${props.user.name}`
                                            : "Create new User"
                                    }}</DialogTitle
                                >
                                <button
                                    @click="closeModal"
                                    class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-yellow-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </header>
                            <Spinner v-if="loading" />
                            <div
                                class="bg-white px-4 pb-4 pt-2z sm:p-6 sm:pb-4"
                                v-else
                            >
                                <Alert v-if="Object.keys(errors).length" :class="[ Object.keys(errors).length ? 'mb-3' : ''  ]">
                                    <div class="text-sm" >
                                        <div
                                            v-for="(field, i) of Object.keys(
                                                errors
                                            )"
                                        >
                                            <div
                                                v-for="(error, ind) of errors[
                                                    field
                                                ] || []"
                                                :key="ind"
                                                class="block"
                                            >
                                                {{ error }}
                                            </div>
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
                                <form @submit.prevent="saveUser">
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
                                                v-model="user.name"
                                                autocomplete="name"
                                                required=""
                                                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div class="mt-2">
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
                                                v-model="user.email"
                                                autocomplete="email"
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
                                    <div
                                        class="py-6 sm:flex sm:flex-row-reverse"
                                    >
                                        <button
                                            type="submit"
                                            class="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                                        >
                                            {{
                                                user.id
                                                    ? "Update User"
                                                    : "Create User"
                                            }}
                                        </button>
                                        <button
                                            @click="closeModal"
                                            type="button"
                                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            ref="cancelButtonRef"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
import { computed, onUpdated, onMounted, ref } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
import store from "../../store";
import Spinner from "../core/Spinner.vue";
import Alert from "../Alert.vue";

const props = defineProps({
    modelValue: Boolean,
    user: {
        required: true,
        type: Object,
    },
});

const user = ref({
    id: props.user.id,
    name: props.user.name,
    email: props.user.email,
});

const loading = ref(false);
const errors = ref("");

onUpdated(() => {
    user.value = {
        id: props.user.id,
        name: props.user.name,
        email: props.user.email,
    };
});

const open = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
});

const emit = defineEmits(["update:modelValue", "close"]);

function closeModal() {
    open.value = false;
    emit("close");
    store.dispatch("getUsers");
    errors.value = ""
}

function saveUser() {
    loading.value = true;
    let action = "created";

    if (user.value.id) {
        action = "updated";
    }

    store
        .dispatch("saveUser", { ...user.value })
        .then((res) => {
            loading.value = false;
            store.commit("notify", {
                type: "success",
                message: `You have succesfully ${action} ${user.value.name}`,
            });
            closeModal();
        })
        .catch((e) => {
            loading.value = false;
            console.log("Error", e);
            errors.value = e.response.data.errors;
        });
}
</script>
