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
                                >
                                    <!-- {{
                                        userProfile.id
                                            ? `Update User: ${props.user.name}`
                                            : "Create new User"
                                    }} -->
                                    Edit Contact Information
                                </DialogTitle>
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
                                <Alert
                                    v-if="Object.keys(errors).length"
                                    :class="[
                                        Object.keys(errors).length
                                            ? 'mb-3'
                                            : '',
                                    ]"
                                >
                                    <div class="text-sm">
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
                                <form>
                                    <div class="space-y-12">
                                        <div
                                            class="border-b border-gray-900/10 pb-12"
                                        >
                                            <div
                                                class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                                            >
                                                <div class="col-span-full">
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
                                                            v-model="
                                                                userProfile.gender
                                                            "
                                                            autocomplete="email"
                                                            required=""
                                                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-span-full">
                                                    <label
                                                        for="phone"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >Phone number</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            id="tel"
                                                            name="phone"
                                                            type="tel"
                                                            v-model="
                                                                userProfile.phone_number
                                                            "
                                                            autocomplete="tel"
                                                            required=""
                                                            class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500 sm:text-sm"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        class="mt-6 flex items-center justify-end gap-x-6"
                                    >
                                        <button
                                            type="button"
                                            @click="closeModal"
                                            class="text-sm font-semibold leading-6 text-gray-900"
                                        >
                                            Cancel
                                        </button>
                                        <button

                                            type="submit"
                                            class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                                        >
                                            Save
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
import { PhotoIcon } from "@heroicons/vue/24/solid";
import store from "../../store";
import Spinner from "../core/Spinner.vue";
import Alert from "../Alert.vue";

const props = defineProps({
    modelValue: Boolean,
    userProfile: {
        required: true,
        type: Object,
    },
});

const userProfile = ref({
    id: props.userProfile.id,
    cover_photo: props.userProfile.cover_photo,
    birthday_date: props.userProfile.birthday_date,
    gender: props.userProfile.gender,
    street_address: props.userProfile.street_address,
    zip_code: props.userProfile.zip_code,
    country: props.userProfile.country,
    province: props.userProfile.province,
    about: props.userProfile.about,
    phone_number: props.userProfile.phone_number,
    sub_title: props.userProfile.sub_title,
});

const loading = ref(false);
const errors = ref("");

onUpdated(() => {
    userProfile.value = {
        id: props.userProfile.id,
        cover_photo: props.userProfile.cover_photo,
        birthday_date: props.userProfile.birthday_date,
        gender: props.userProfile.gender,
        street_address: props.userProfile.street_address,
        zip_code: props.userProfile.zip_code,
        country: props.userProfile.country,
        province: props.userProfile.province,
        about: props.userProfile.about,
        phone_number: props.userProfile.phone_number,
        sub_title: props.userProfile.sub_title,
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
    errors.value = "";
}
</script>
