<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
</script>

<template>
<section {{ $attributes->merge(['class' => 'container px-4']) }}>
    {{ $slot }}
</section>

</template>