<template>
    <Disclosure as="nav" class="bg-yellow-800" v-slot="{ open }">
        <div class="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <img
                            class="h-8 w-8"
                            src="/images/logo.png"
                            alt="Your Company"
                        />
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.to }"
                                :class="[
                                    $route.name === item.to
                                        ? 'bg-yellow-900 text-white'
                                        : 'text-yellow-300 hover:bg-yellow-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium',
                                ]"
                                >{{ item.name }}</router-link
                            >
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <button
                            type="button"
                            class="relative rounded-full bg-yellow-800 p-1 text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-800"
                        >
                            <span class="absolute -inset-1.5" />
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative ml-3">
                            <div>
                                <MenuButton
                                    class="relative flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-800 px-2 py-1 shadow-xl"
                                >
                                    <span class="absolute -inset-1.5" />
                                    <span class="sr-only">Open user menu</span>
                                    <p class="font-medium px-2 text-yellow-400">
                                        {{ currentUser.name }}
                                    </p>
                                    <img
                                        v-if="currentUser.image"
                                        class="h-8 w-8 rounded-full"
                                        :src="currentUser.image"
                                        :alt="currentUser.name"
                                    />
                                    <span
                                        v-else
                                        class="flex items-center justify-center h-8 w-8 rounded-full overflow-hidden"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="size-10 text-yellow-400"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                            />
                                        </svg>
                                    </span>
                                </MenuButton>
                            </div>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <MenuItems
                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <MenuItem v-slot="{ active }">
                                        <router-link
                                            :to="{ name: 'Profile' }"
                                            :class="[
                                                active ? 'bg-yellow-100' : '',
                                                'block px-4 py-2 text-sm text-yellow-700',
                                            ]"
                                            >Your Profile</router-link
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <router-link
                                            :to="{ name: 'Settings' }"
                                            :class="[
                                                active ? 'bg-yellow-100' : '',
                                                'block px-4 py-2 text-sm text-yellow-700',
                                            ]"
                                            >Settings</router-link
                                        >
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <a
                                            @click="logout"
                                            class="cursor-pointer"
                                            :class="[
                                                active ? 'bg-yellow-100' : '',
                                                'block px-4 py-2 text-sm text-yellow-700',
                                            ]"
                                            >Sign Out</a
                                        >
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <DisclosureButton
                        class="relative inline-flex items-center justify-center rounded-md bg-yellow-800 p-2 text-yellow-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-800"
                    >
                        <span class="absolute -inset-0.5" />
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon
                            v-if="!open"
                            class="block h-6 w-6"
                            aria-hidden="true"
                        />
                        <XMarkIcon
                            v-else
                            class="block h-6 w-6"
                            aria-hidden="true"
                        />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <DisclosurePanel class="md:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <DisclosureButton
                    v-for="item in navigation"
                    :key="item.name"
                    as="a"
                    @click="routeTo(item.name)"
                    :class="[
                        item.current
                            ? 'bg-yellow-900 text-white'
                            : 'text-yellow-300 hover:bg-yellow-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                    >{{ item.name }}</DisclosureButton
                >
            </div>
            <div class="border-t border-yellow-700 pb-3 pt-4">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <img
                            class="h-10 w-10 rounded-full"
                            :src="user.imageUrl"
                            alt=""
                        />
                    </div>
                    <div class="ml-3">
                        <div
                            class="text-base font-medium leading-none text-white"
                        >
                            {{ currentUser.name }}
                        </div>
                        <div
                            class="text-sm font-medium leading-none text-yellow-400"
                        >
                            {{ currentUser.email }}
                        </div>
                    </div>
                    <button
                        type="button"
                        class="relative ml-auto flex-shrink-0 rounded-full bg-yellow-800 p-1 text-yellow-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-yellow-800"
                    >
                        <span class="absolute -inset-1.5" />
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-3 space-y-1 px-2">
                    <DisclosureButton
                        @click="routeTo('Profile')"
                        as="a"
                        class="block rounded-md px-3 py-2 text-base font-medium text-yellow-400 hover:bg-yellow-700 hover:text-white cursor-pointer"
                        >Your Profile</DisclosureButton
                    >
                    <DisclosureButton
                        @click="routeTo('Settings')"
                        as="a"
                        class="block rounded-md px-3 py-2 text-base font-medium text-yellow-400 hover:bg-yellow-700 hover:text-white cursor-pointer"
                        >Settings</DisclosureButton
                    >
                    <DisclosureButton
                        @click="logout"
                        as="a"
                        class="block rounded-md px-3 py-2 text-base font-medium text-yellow-400 hover:bg-yellow-700 hover:text-white cursor-pointer"
                        >Sign out</DisclosureButton
                    >
                </div>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import routeTo from "../includes/routeTo";
import store from "../store";

const { currentUser } = defineProps({
    currentUser: Object,
});

const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
    { name: "Dashboard", to: "Dashboard", current: true },
    { name: "Users", to: "Users", current: false },
];

function logout() {
    store.dispatch("logout").then(() => {
        routeTo("Login");
    });
}
</script>
