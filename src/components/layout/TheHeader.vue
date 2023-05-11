<template>
    <div class="the-header-component">
        <search-input v-model="keyword" v-if="route?.name == 'home'" />
        <div class="flex-center right-content">
            <custom-select v-model="language" :options="languageList" />
            <div class="logout-btn">
                <img src="@/assets/images/icons/logout.svg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

import SearchInput from "@/components/common/SearchInput.vue";
import CustomSelect from "@/components/common/CustomSelect.vue";

const route = useRoute();

const keyword = ref("");

const language = ref({ title: "EN", value: "en" });
const languageList = ref([
    { title: "EN", value: "en" },
    { title: "VI", value: "vi" }
]);

watch(() => language.value, () => {
    console.log(language.value);
}, { immediate: true, deep: true });
</script>