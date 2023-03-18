<script setup lang="ts">

</script>
<template>
    <div class="main">
        <TheHeader/>
    <div class="main__container">
        <Gallery/>
        <div class="main__container__article flex flex-row w-full mt-5 container mx-auto gap-4">
            <TheGenres class="basis-1/4"/>
        <PostLists class="basis-3/4"/>
        </div>
    </div>
    <TheFooter/>
    </div>
</template>