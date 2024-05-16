<template>
    <div class="relative overflow-x-auto">
        <table
            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input
                                id="checkbox-all-search"
                                type="checkbox"
                                class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
                            />
                            <label for="checkbox-all-search" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </th>
                    <th scope="col">User name</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody v-if="users.loading || !users.data.length">
                <tr>
                    <td colspan="6">
                        <Spinner v-if="users.loading" />
                        <p v-else class="text-center py-8 text-gray-700">
                            There are no users
                        </p>
                    </td>
                </tr>
            </tbody>
            <tbody v-for="(user, ind) in users.data" :key="user.id" v-else>
                <tr class="bg-white border-b border-gray-400 hover:bg-gray-50">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input
                                :id="`checkbox-table-search-${ind}`"
                                type="checkbox"
                                class="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700"
                            />
                            <label for="checkbox-table-search-1" class="sr-only"
                                >checkbox</label
                            >
                        </div>
                    </td>
                    <th
                        scope="row"
                        class="font-medium text-gray-900 whitespace-nowrap"
                    >
                        {{ user.name }}
                    </th>
                    <td>{{ user.email }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>
                        <div class="flex">
                            <button
                                class="mr-2 hover:text-yellow-600"
                                @click="editUser(user)"
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
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                            </button>
                            <button @click="deleteUser(user)">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6 text-red-400 hover:text-red-600"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <nav
            v-if="!users.loading"
            class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
        >
            <span
                v-if="users.data.length"
                class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
                >Showing
                <span class="font-semibold text-gray-900">{{
                    users.from
                }}</span>
                of
                <span class="font-semibold text-gray-900">{{
                    users.to
                }}</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8" v-if="users.total > users.limit">
                <li v-for="(link, i) of users.links" :key="i">
                    <a
                        v-html="link.label"
                        @disabled="!link.url"
                        @click="getForPage(link)"
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border"
                        :class="[
                            link.active
                                ? 'z-10 bg-gray-700 border-gray-400 text-white'
                                : 'hover:bg-gray-700 hover:text-white border-gray-400',
                            i === 0 ? 'rounded-l-md' : '',
                            i === users.links.length - 1 ? 'rounded-r-md' : '',
                        ]"
                    ></a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import store from "../../store";
import { computed, onMounted } from "vue";
import Spinner from "../core/Spinner.vue";
import Paginator from "../core/Paginator.vue";

const emit = defineEmits(["clickEdit", "clickDelete"]);
const users = computed(() => store.state.users);

onMounted(() => {
    store.dispatch("getUsers");
});

function editUser(p) {
    emit("clickEdit", p);
}

function deleteUser(p) {
    emit("clickDelete", p);
}

function getForPage(link) {
    console.log(link);
    if (!link.url || link.active) {
        return
    }
    window.scrollTo(0, 0);
    store.dispatch("getUsers", { url: link.url })
}
</script>
