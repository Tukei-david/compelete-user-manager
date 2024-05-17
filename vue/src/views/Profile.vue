<template>
    <PageComponent title="Your Profile">
        <!-- Layouts -->

        <div
            class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 shadow-inner shadow-gray-500/40 rounded-lg"
        >
            <div class="bg-white px-4 py-6 shadow-md rounded-lg my-4">
                <!-- Images container -->
                <div class="flex justify-end pb-3">
                    <button
                        class="hover:text-yellow-600 text-gray-500"
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
                </div>
                <div class="bg-[url('/images/city.png')] bg-cover h-80"></div>
                <div class="ml-4 -mt-36">
                    <img
                        class="rounded-full w-48 h-48 shadow-md border-4 border-white"
                        src="/images/city.png"
                        alt="image description"
                    />
                </div>
                <div class="pt-3">
                    <h4 class="text-xl font-bold text-yellow-900">
                        Tukei David
                    </h4>
                    <p class="text-sm font-medium">Front Web Developer</p>
                    <p class="text-sm font-normal text-gray-500">
                        Lodwar, Turkana County, Kenya
                    </p>
                </div>
            </div>
            <div class="bg-white px-4 py-6 shadow-md rounded-lg my-4">
                <div class="flex justify-between pb-3">
                    <h4 class="text-xl font-bold text-yellow-900">About me</h4>
                    <button
                        class="hover:text-yellow-600 text-gray-500"
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
                </div>
                <p class="text-sm font-normal text-gray-500 mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas dolorum ipsa dolorem assumenda! Repellendus dolorem
                    nulla est distinctio nam, molestiae rerum sed mollitia quae.
                    Temporibus est animi molestias blanditiis totam? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Repellat earum
                    et suscipit tempora sed facere dicta nostrum, consequatur
                    illo accusantium quibusdam mollitia atque in voluptatem. Non
                    omnis laudantium corporis. Iusto? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Fugit aut officiis vel earum
                    in. Autem dicta, perspiciatis, expedita incidunt veniam ea
                    recusandae magni nemo quia quasi tempore temporibus
                    voluptate velit?
                </p>
            </div>
            <div class="bg-white px-4 py-6 shadow-md rounded-lg my-4">
                <div class="flex justify-between pb-3">
                    <h4 class="text-xl font-bold text-yellow-900">Contact Info</h4>
                    <button
                        class="hover:text-yellow-600 text-gray-500"
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
                </div>
                
                <p class="text-sm">
                    <span class="font-medium"> Email: </span> <span class="font-normal text-gray-500 mt-3">tukeidavid6@gmail.com</span>
                </p>
                <p class="text-sm">
                    <span class="font-medium"> Phone No: </span> <span class="font-normal text-gray-500 mt-3">+254 114 167 517</span>
                </p>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
import PageComponent from "../components/layouts/PageComponent.vue";
</script>
