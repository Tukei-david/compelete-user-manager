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
            <tbody>
                <tr class="bg-white border-b border-gray-400 hover:bg-gray-50">
                    <UserDetails />
                </tr>
            </tbody>
        </table>
        <nav
            class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
        >
            <span
                class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto"
                >Showing
                <span class="font-semibold text-gray-900">1-10</span>
                of
                <span class="font-semibold text-gray-900">1000</span></span
            >
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border rounded-s-lg hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Previous</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >1</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >2</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        aria-current="page"
                        class="flex items-center justify-center px-3 h-8 text-yellow-600 border bg-yellow-50 hover:bg-yellow-100 hover:text-yellow-700 border-gray-400 dark:bg-gray-700"
                        >3</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >4</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >5</a
                    >
                </li>
                <li>
                    <a
                        href="#"
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border rounded-e-lg hover:bg-gray-100 hover:text-gray-700 border-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >Next</a
                    >
                </li>
            </ul>
        </nav>
    </div>
</template>


<script setup>
    import UserDetails from './UserDetails.vue';
</script>