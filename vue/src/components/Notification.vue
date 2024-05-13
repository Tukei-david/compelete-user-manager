<template>
    <div
        v-if="notification.show"
        class="fixed w-[400px] right-4 bottom-4 py-2 px-4 text-white animate-fade-in-down rounded text-sm"
        :class="[
            notification.type === 'success' ? 'bg-emerald-500' : 'bg-red-500',
        ]"
    >
        {{ notification.message }}
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const notification = computed(() => store.state.notification);
</script>
