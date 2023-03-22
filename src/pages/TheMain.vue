<script setup lang="ts">

</script>
<template>
    <div class="main">
        <TheHeader/>
    <div class="main__container">
        <Gallery/>
        <div class="main__container__article flex flex-row w-full mt-5 container mx-auto gap-4">
            <div class="main__container__article__sidebar basis-1/4 flex flex-col gap-5">
                <TheGenres class="w-full"/>
            <TheTops/>
            </div>
        <PostLists class="basis-3/4"/>
        </div>
    </div>
    <TheFooter/>
    </div>
</template>