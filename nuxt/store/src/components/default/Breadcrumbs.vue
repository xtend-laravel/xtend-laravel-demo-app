<script setup lang="ts">
import { createPinia } from 'pinia'
import { createApp } from 'vue'
</script>

<template>
@props(['items' => []])
<div class="w-full bg-neutral-100 py-3">
    <Container id="container" class="mx-auto h-3">
        <ul class="flex flex-wrap items-center gap-5 text-xs font-medium text-gray-400">
            <li>
                <a class="flex items-center" href="/">
                    <IconHome class="w-4 h-4" />
                </a>
            </li>
            @foreach($items as $label => $url)
                <li class="flex gap-5 items-center capitalize {{ $loop->last ? 'font-medium text-black' : '' }}">
                    <IconAngleRight class="w-3 h-4 inline" />
                    <a class="flex items-center hover:text-neutral-700 transition duration-300" href="{{ $url }}">
                        {{ $label }}
                    </a>
                </li>
            @endforeach
        </ul>
    </Container>
</div>

</template>