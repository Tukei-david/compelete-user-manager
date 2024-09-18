<template>
    <div class="min-h-full" v-if="currentUser.id">
        <Navbar :currentUser="currentUser"/>
        <router-view></router-view>
        <Notification/>
    </div>
</template>

<script setup>
import Notification from "../Notification.vue";
import { onMounted, computed } from "vue";
import store from "../../store";
import Navbar from "../Navbar.vue";


// Get user
const currentUser = computed(() => store.state.user.data);

console.log(currentUser);


onMounted( () => {
    store.dispatch('getCurrentUser');
})




</script>
