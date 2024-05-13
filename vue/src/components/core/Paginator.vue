<template>
    <nav
        class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
    >
        <span
            class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
            >Showing
            <span class="font-semibold text-gray-900">{{ users.from }}</span>
            of
            <span class="font-semibold text-gray-900">{{
                users.to
            }}</span></span
        >
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li
                v-for="(link, i) of users.links"
                    :key="i"
            >
                <a
                    v-html="link.label"
                    @disabled="!link.url"
                    @click="getForPage($event, link)"
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border "
                    :class="[
                        link.active ? 'z-10 bg-gray-700 border-gray-400 text-white' 
                        : 'hover:bg-gray-700 hover:text-white border-gray-400', i === 0 ? 'rounded-l-md' : '',
                        i === users.links.length - 1 ? 'rounded-r-md' : ''
                    ]"
                    ></a
                >
            </li>
        </ul>
    </nav>
</template>


<script setup>

const { users } = defineProps({
    users: Object
})

const emit = defineEmits([ "getForPage" ])

function getForPage(e, u) {
    console.log(u);
    emit("getForPage", [e, u])
}

</script>