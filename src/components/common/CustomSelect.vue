<template>
    <div class="custom-select-component">
        <button class="custom-select" ref="customSelectRef">
            <div class="selected-item">
                {{ customValue?.title || noSelectedTitle }}
            </div>
    
            <div class="option-menu" :style="optionMenuStyles">
                <div class="option" v-for="(option, index) in options" :key="index"
                    @click="selectOption(option)"
                >
                    {{ option.title }}
                </div>
            </div>
        </button>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => null
    },
    noSelectedTitle: {
        type: String,
        default: "Select..."
    },
    options: {
        type: Array,
        default: () => []
    },
    placement: {
        type: String,
        default: "right"
    }
});

const customSelectRef = ref(null);

// const customList = ref([
//     { title: "EN", value: "en" },
//     { title: "VI", value: "vi" }
// ]);

const customValue = computed({
    get() {
        return props.modelValue;
    },
    set(newValue) {
        emit("update:modelValue", newValue);
    }
});

const optionMenuStyles = computed(() => {
    let result = {};
    if(props.placement == "left") {
        result.left = 0;
        result.textAlign = "left";
    }
    if(props.placement == "right") {
        result.right = 0;
        result.textAlign = "right";
    }
    return result;
});

const selectOption = (option) => {
    customValue.value = option;
    customSelectRef.value?.blur?.();
}
</script>