<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight text-yellow-900">Users</h1>
                <router-link
                    :to="{ name: 'Dashboard' }"
                    class="py-2 px-3 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 -mt-1 inline-block"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                        />
                    </svg>

                    Add new User
                </router-link>
            </div>
        </template>
        <UsersTable/>
    </PageComponent>
</template>

<script setup>

import PageComponent from '../components/layouts/PageComponent.vue';
import UsersTable from '../components/Users/UsersTable.vue';

</script>