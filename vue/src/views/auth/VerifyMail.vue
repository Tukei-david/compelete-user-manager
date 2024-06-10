<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
            <div class="d-flex justify-center">
                <h1
                    class="text-3xl font-bold tracking-tight text-yellow-900 text-center"
                >
                    Verify Mail
                </h1>
            </div>
        </div>
    </header>
    <main>
        <div class="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8 text-center">
            <p class="text-yellow-900 text-lg font-semibold">
                Before proceeding, please check your email for a verification
                link. If you did not receive the email, click the button below
                to request another.
            </p>
            <button
                @click="showAddNewModal"
                class="py-2 px-3 my-6 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
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
                        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                </svg>

                Resend Verification Mail
            </button>

            <p class="text-yellow-900 text-sm font-semibold">
                Email Nofication sent!
            </p>
        </div>
    </main>
</template>
