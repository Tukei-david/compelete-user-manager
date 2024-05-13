<template>
    <PageComponent>
        <template v-slot:header>
            <div class="flex justify-between items-center">
                <h1 class="text-3xl font-bold tracking-tight text-yellow-900">Users</h1>
                <button
                    @click="showAddNewModal"
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
                </button>
            </div>
        </template>
        <UsersTable @clickEdit="editUser" @clickDelete="deleteUser"/>
        <UserModal v-model="showUserModal" :user="userModel" @close="onModalClose"/>
        <UserDeleteModal v-model="showUserDeleteModel" :user="userModel" @close="onDeleteModalClose"/>
    </PageComponent>
</template>

<script setup>

import { ref } from 'vue';
import PageComponent from '../components/layouts/PageComponent.vue';
import UsersTable from '../components/Users/UsersTable.vue';
import UserModal from '../components/Users/UserModal.vue'
import UserDeleteModal from '../components/Users/UserDeleteModal.vue';
const DEFAULT_USER = {
    id: '',
    name: '',
    email: ''
}

const userModel = ref({...DEFAULT_USER})
const showUserModal = ref(false)
const showUserDeleteModel = ref(false)

function showAddNewModal() {
    showUserModal.value = true
}

function onModalClose() {
    userModel.value = {...DEFAULT_USER}
}

function editUser(u) {
    userModel.value = u
    showAddNewModal()
}



function showDeleteModal() {
    showUserDeleteModel.value = true
}

function onDeleteModalClose() {
    userModel.value = {...DEFAULT_USER}
}

function deleteUser(u) {
    userModel.value = u
    showDeleteModal()
}

</script>