<template>
    <div class="search-input-component">
        <input v-model="keyword" :placeholder="placeholder" />
        <img src="@/assets/images/icons/magnify.svg" class="magnify-icon" />
    </div>
</template>

<script setup>
import { computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: "Search..."
    }
});

const keyword = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit("update:modelValue", newValue);
    }
})
</script>