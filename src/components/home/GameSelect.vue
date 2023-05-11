<template>
    <div class="game-select-component">
        <div class="w-full flex items-center justify-between mb-1.5">
            <p class="svn-agency-fb-bold uppercase">Lựa chọn game</p>
            <custom-select v-model="filter" :options="filterOptions" no-selected-title="Filter favorite " />
        </div>

        <div class="relative game-list-container">
            <div id="game-list" class="game-list">
                <div class="game-item" v-for="i in gameListNum" :key="i">
                    <div class="game-thumbnail">
                        <img src="@/assets/images/game-thumbnail.png" class="absolute-full" />
                    </div>
                    <div class="game-info">
                        <div class="flex justify-between top-info">
                            <p class="svn-avo-bold text-lg game-title">Art</p>
                            <img src="@/assets/images/icons/heart.svg" class="ml-2 heart-icon" />
                        </div>
                        <div class="text-10px game-description">
                            Creative IRL
                        </div>
                    </div>
                    <div class="hover-layout">
                        <button class="btn btn-primary">
                            <span class="btn-text">CONNECT</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="bottom-layout">
            </div>
            <div class="loading" v-if="loading"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import CustomSelect from "@/components/common/CustomSelect.vue";

const filter = ref(null);
const filterOptions = ref([
    { title: "Option 1", value: "1" },
    { title: "Option 2", value: "2" },
    { title: "Option 3", value: "3" },
    { title: "Option 4", value: "4" },
    { title: "Option 5", value: "5" }
]);
const container = ref(null);
const timer = ref(null);
const gameListNum = ref(20);
const loading = ref(false);

onMounted(() => {
    container.value = document.getElementById("game-list");
    
    container.value.addEventListener("wheel", wheelHandler);
});

onBeforeUnmount(() => {
    container.value.removeEventListener("wheel", wheelHandler);
});

const wheelHandler = () => {
    if(!container.value || loading.value) return;

    let scrollTotalHeight = container.value.scrollHeight;
    let scrollViewHeight = container.value.clientHeight;
    let scrollTop = container.value.scrollTop;

    if(scrollTop > scrollTotalHeight - scrollViewHeight - 50) {
        loading.value = true;
        clearTimeout(timer.value);
        timer.value = setTimeout(() => {
            gameListNum.value += 20;
            loading.value = false;
        }, 1000);
    }
}
</script>