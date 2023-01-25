<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
</script>

<template>
<div>
    <h3 class="uppercase font-semibold text-xl text-center tracking-wider">Related products</h3>
    <p class="text-center text-sm py-2 font-thin">8 other products in the same categories</p>

    <livewire:product.related-products />
</div>

</template>