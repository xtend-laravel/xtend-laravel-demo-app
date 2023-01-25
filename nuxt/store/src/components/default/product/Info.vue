<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
</script>

<template>
<div>
    <!-- brand -->
    <h3 class="uppercase font-bold text-xl">Apple</h3>
    <!-- title -->
    <h1 class="mt-2 font-heading text-lg font-medium md:text-2xl">Apple iPhone 12 Pro (256GB) - Silver</h1>
    <!-- SKU -->
    <div class="mt-3 text-sm flex items-center gap-5">
        <div>
            <label class="font-medium">Reference</label> <span class="text-brand-500">5004913020440</span>
        </div>
        <label class="font-medium">Instock</label>
        <a href="#" class="border border-neutral-200 p-1">Plus d'infos</a>
    </div>

    <!-- price -->
    <div class="mt-6">
        <span class="text-3xl font-semibold">€450.00</span>
        <span class="text-neutral-400 text-xs">Tax Included</span>
    </div>

    <!-- actions -->
    <form class="mt-10 p-5 flex flex-col gap-8 md:gap-12 border border-neutral-200 text-xs md:text-sm">
        <!-- Size -->
        <Option :options="['36', '36 1/2', '37 1/2', '38', '38 1/2']" selected="2" name="size" label="Size">
            <x-slot:after class="ml-5">
                <button type="button" class="flex items-center gap-1 px-3 py-0.5 rounded-full uppercase text-xxs border border-neutral-200">
                    <IconHelp class="w-2 h-2 inline" />
                    Size chart
                </button>
            </x-slot:after>
        </Option>

        <!-- Color -->
        <Option :options="['Red', 'Blue', 'Green']" name="color" label="Color" />

        <div class="mt-2 w-full flex flex-col xl:flex-row items-center gap-2 lg:gap-6">
            <!-- Quantity -->
            <div class="flex items-center w-full">
                <button type="button" class="z-20 w-8 h-10 border border-neutral-200 flex justify-center items-center border-r-0">
                    <IconMinus class="w-2 h-2" />
                </button>
                <input type="number" class="z-10 h-10 w-full xl:w-24 3xl:w-28 px-2 py-2 inline-flex text-center text-xs border border-neutral-200 focus:ring-brand-600 focus:border-brand-600" style="appearance: textfield" value="1" inputmode="numeric">
                <button type="button" class="z-20 w-8 h-10 border border-neutral-200 flex justify-center items-center border-l-0">
                    <IconPlus class="w-2 h-2" />
                </button>
            </div>

            <!-- add to cart button -->
            <button type="button" class="w-full flex items-center justify-center gap-1 bg-black uppercase text-white px-7 py-3 text-xs font-semibold hover:bg-brand-500 transition-colors">
                <IconShoppingCart class="w-3 h-3 fill-white" />
                Add to cart
            </button>

            <button type="button" class="w-full flex items-center justify-center gap-1 border border-px h-[40px] border-black uppercase text-black px-7 py-3 text-xs font-semibold hover:border-transparent hover:bg-brand-500 hover:text-white transition-colors">
                Add to wishlist
                <IconHeart />
            </button>
        </div>
    </form>

    <!-- extra shipping information -->
    <div class="mt-4 flex items-center justify-evenly border border-neutral-200 py-3 uppercase font-bold text-sm">
        <div class="flex items-center gap-1">
            <IconTruck class="w-4 h-4 inline-block" />
            <p>Livraison <span class="text-red-500">Gratuite</span></p>
        </div>
        <div class="flex items-center gap-1">
            <IconBag class="w-4 h-4 inline-block" />
            <p>Retour <span class="text-red-500">GRATUIT</span></p>
        </div>
    </div>

    <!-- tabs -->
    <div class="mt-5">
        <div class="border-b border-neutral-200 text-sm">
            <nav class="-mb-px flex justify-center space-x-6 font-medium" aria-label="Tabs">
                <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                <a href="#" class="border-neutral-700 text-neutral-900 whitespace-nowrap py-4 px-1 border-b-2" aria-current="page">Description</a>
                <a href="#" class="border-transparent text-neutral-400 hover:text-neutral-900 hover:border-neutral-700 whitespace-nowrap py-4 px-1 border-b-2">Product details</a>
                <a href="#" class="border-transparent text-neutral-400 hover:text-neutral-900 hover:border-neutral-700 whitespace-nowrap py-4 px-1 border-b-2">Reviews</a>
                <a href="#" class="border-transparent text-neutral-400 hover:text-neutral-900 hover:border-neutral-700 whitespace-nowrap py-4 px-1 border-b-2">Delivery</a>
            </nav>
        </div>

        <div class="text-normal text-xs font-thin py-5">
            <section>
                <h2 class="font-semibold text-lg mb-5">Shoe Collection for Women</h2>
                <p>
                    White rising sneakers - Rebel - in leather and neoprene, by Hogan for women.
                    The outer sole is made of white rubber and offers good cushioning while the inner sole has shape memory which makes walking very comfortable.
                </p>
            </section>
        </div>
    </div>

    <!-- socials sharing -->
    <div class="mt-5">
        <button type="button" class="w-full py-2 flex items-center justify-center gap-2 rounded border border-neutral-200 bg-white uppercase text-sm font-medium tracking-wider hover:border-brand-400 hover:bg-neutral-50/10 hover:text-brand-500 transition-colors">
            <CarbonUserAvatar class="w-4 h-4 text-black" />
            send to a friend
        </button>

        <!-- share buttons -->
        <div class="mt-3 flex items-center justify-center gap-5">
            <a href="#" class="group flex items-center gap-1 px-3 rounded py-1.5 text-xs tracking-wide hover:text-white hover:bg-[#3b5998]">
                <IconparkFacebook class="w-3 h-3 text-[#3b5998] group-hover:text-white" />
                Share
            </a>
            <a href="#" class="group flex items-center gap-1 px-3 rounded py-1.5 text-xs tracking-wide hover:text-white hover:bg-[#55acee]">
                <IconparkTwitter class="w-3 h-3 text-[#55acee] group-hover:text-white" />
                Share
            </a>
            <a href="#" class="group flex items-center gap-1 px-3 rounded py-1.5 text-xs tracking-wide hover:text-white hover:bg-[#cb2027]">
                <BxlPinterest class="w-3 h-3 text-[#cb2027] group-hover:text-white" />
                Share
            </a>
        </div>
    </div>
</div>

</template>