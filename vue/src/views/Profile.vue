<template>
    <PageComponent title="Your Profile">
        <!-- Layouts -->

        <div
            class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 shadow-inner shadow-gray-500/40 rounded-lg"
        >
            <div class="bg-white px-4 py-6 shadow-md rounded-lg my-4">
                <!-- Images container -->
                <div class="bg-[url('/images/city.png')] bg-cover h-80">

                </div>
                <div class="ml-4 -mt-36">
                    <img
                        class="rounded-full w-48 h-48 shadow-md border-4 border-white"
                        src="/images/city.png"
                        alt="image description"
                    />
                </div>
                <div>
                    <h4>Tukei David</h4>
                    Testing
                </div>
            </div>
            <div class="bg-white px-4 py-6 shadow-md rounded-lg my-4">
                <!-- Images container -->
                <div class="bg-[url('/images/city.png')] bg-cover h-80">

                </div>
                <div class="ml-4 -mt-36">
                    <img
                        class="rounded-full w-48 h-48 shadow-md border-4 border-white"
                        src="/images/city.png"
                        alt="image description"
                    />
                </div>
                <div>
                    <h4>Tukei David</h4>
                    Testing
                </div>
            </div>
        </div>
    </PageComponent>
</template>

<script setup>
import PageComponent from "../components/layouts/PageComponent.vue";
</script>
