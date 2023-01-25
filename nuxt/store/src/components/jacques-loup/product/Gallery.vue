<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
</script>

<template>
<div class="relative">
    <div class="flex gap-5">
        <!-- preview thumbnails -->
        <div class="flex flex-col items-start gap-5 text-center">
            @foreach(range(1,4) as $i)
                <a class="w-[40px] md:w-[80px] delete-rounded-3xl block border border-transparent hover:border-neutral-400 transition" href="#">
                    <img class="h-full w-full" src="uinel-assets/images/ecommerce-product-info/placeholder{{ $i }}.png" alt="">
                </a>
            @endforeach
        </div>

        <div class="">
            <img src="uinel-assets/images/ecommerce-product-info/ph-phone1.png" alt="">
        </div>
    </div>
</div>

</template>