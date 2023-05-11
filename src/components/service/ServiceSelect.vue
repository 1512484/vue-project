<template>
    <div class="service-select-component">
        <p class="gradient-text title-text mb-2.5">BẢNG GIÁ DỊCH VỤ</p>
        <p class="subtitle-text">Tiny hỗ trợ game trên toàn thế giới, dù game bạn ở đâu Tiny vẫn tối ưu tốc độ đường truyền, giảm lag cho game bạn, phản hồi nhanh chóng & không lag.</p>

        <div class="service-list">
            <div class="service-item">

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const serviceList = ref([
    { 
        id: 1, 
        title: "6 months", 
        value: "6_months",
        price: 200000,
        options: ["1 thiết bị mỗi tài khoản", "Chơi GAME ping cực thấp", "Packetloss cực thấp", "Định tuyến ưu tiên", "Hỗ trợ nhiệt tình"]
    },
    { 
        id: 2, 
        title: "3 months", 
        value: "3_months",
        price: 200000,
        options: ["1 thiết bị mỗi tài khoản", "Chơi GAME ping cực thấp", "Packetloss cực thấp", "Định tuyến ưu tiên", "Hỗ trợ nhiệt tình"]
    },
    { 
        id: 3, 
        title: "6 months", 
        value: "6_months",
        price: 200000,
        options: ["1 thiết bị mỗi tài khoản", "Chơi GAME ping cực thấp", "Packetloss cực thấp", "Định tuyến ưu tiên", "Hỗ trợ nhiệt tình"]
    }
]);
</script>
