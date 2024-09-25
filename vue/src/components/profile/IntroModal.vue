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
                                    Edit Intro
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
                                <form @submit.prevent="updateIntro">
                                    <div class="space-y-12">
                                        <div
                                            class="border-b border-gray-900/10 pb-12"
                                        >
                                            <div
                                                class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                                            >
                                                <div class="col-span-full">
                                                    <label
                                                        for="cover-photo"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >Cover photo</label
                                                    >
                                                    <div
                                                        class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"
                                                    >
                                                        <div
                                                            class="text-center"
                                                        >
                                                            <PhotoIcon
                                                                class="mx-auto h-12 w-12 text-gray-300"
                                                                aria-hidden="true"
                                                            />
                                                            <div
                                                                class="mt-4 flex text-sm leading-6 text-gray-600"
                                                            >
                                                                <label
                                                                    for="file-upload"
                                                                    class="relative cursor-pointer rounded-md bg-white font-semibold text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 hover:text-yellow-500"
                                                                >
                                                                    <span
                                                                        >Upload
                                                                        a
                                                                        file</span
                                                                    >
                                                                    <input
                                                                        id="file-upload"
                                                                        name="file-upload"
                                                                        type="file"
                                                                        class="sr-only"
                                                                    />
                                                                </label>
                                                                <p class="pl-1">
                                                                    or drag and
                                                                    drop
                                                                </p>
                                                            </div>
                                                            <p
                                                                class="text-xs leading-5 text-gray-600"
                                                            >
                                                                PNG, JPG, GIF up
                                                                to 10MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mb-2 col-span-full">
                                                    <label
                                                        class="block text-sm font-medium text-gray-700"
                                                    >
                                                        Profile picture
                                                    </label>
                                                    <div
                                                        class="mt-1 flex items-center"
                                                    >
                                                        <img
                                                            v-if="
                                                                userProfile.cover_photo
                                                            "
                                                            :src="
                                                                userProfile.cover_photo
                                                            "
                                                            :alt="
                                                                userProfile.gender
                                                            "
                                                            class="h-12 w-12 object-cover rounded-full"
                                                        />
                                                        <span
                                                            v-else
                                                            class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke-width="1.5"
                                                                stroke="currentColor"
                                                                class="h-[80%] w-[80%] text-gray-300"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <button
                                                            type="button"
                                                            class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm test-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus-ring-offset-2 focus:ring-yellow-500"
                                                        >
                                                            <input
                                                                type="file"
                                                                @change="
                                                                    onImageChoose
                                                                "
                                                                class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
                                                            />
                                                            {{
                                                                userProfile.id
                                                                    ? "Change"
                                                                    : "Upload"
                                                            }}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            class="border-b border-gray-900/10 pb-12"
                                        >
                                            <div
                                                class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                                            >
                                                <div class="col-span-full">
                                                    <label
                                                        for="first-name"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >Full names</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autocomplete="name"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label
                                                        for="country"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >Country</label
                                                    >
                                                    <div class="mt-2">
                                                        <select
                                                            id="country"
                                                            name="country"
                                                            v-model="userProfile.country"
                                                            autocomplete="country-name"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                                        >
                                                            <option>
                                                                United States
                                                            </option>
                                                            <option>
                                                                Canada
                                                            </option>
                                                            <option>
                                                                Mexico
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label
                                                        for="region"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >State / Province</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            type="text"
                                                            name="region"
                                                            id="region"
                                                            v-model="userProfile.province"
                                                            autocomplete="address-level1"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label
                                                        for="city"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >City</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            autocomplete="address-level2"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label
                                                        for="postal-code"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >ZIP / Postal
                                                        code</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            type="text"
                                                            name="postal-code"
                                                            id="postal-code"
                                                            v-model="userProfile.zip_code"
                                                            autocomplete="postal-code"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="sm:col-span-3">
                                                    <label
                                                        for="street-address"
                                                        class="block text-sm font-medium leading-6 text-gray-900"
                                                        >Street address</label
                                                    >
                                                    <div class="mt-2">
                                                        <input
                                                            type="text"
                                                            name="street-address"
                                                            id="street-address"
                                                            v-model="userProfile.street_address"
                                                            autocomplete="street-address"
                                                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:border-yellow-500 focus:outline-none focus:ring-yellow-500"
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

function onImageChoose(ev) {
    const file = ev.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
        user.value.image = reader.result;
    };

    reader.readAsDataURL(file);
}

function updateIntro() {
    console.log("Form Values ", userProfile.value);
    store.dispatch("updateIntro", { ...userProfile.value });
}

// function saveUser() {
//     loading.value = true;
//     let action = "created";

//     if (user.value.id) {
//         action = "updated";
//     }

//     store
//         .dispatch("saveUser", { ...user.value })
//         .then((res) => {
//             console.log(user.value, "User");
//             loading.value = false;
//             store.commit("notify", {
//                 type: "success",
//                 message: `You have succesfully ${action} ${user.value.name}`,
//             });
//             closeModal();
//         })
//         .catch((e) => {
//             loading.value = false;
//             console.log("Error", e);
//             errors.value = e.response.data.errors;
//         });
// }
</script>
