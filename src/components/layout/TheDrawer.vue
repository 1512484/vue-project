<template>
    <div class="the-drawer-component">
        <div class="flex-center logo">
            <img src="@/assets/images/logo.png" class="logo-img" />
            <p class="svn-agency-fb-bold text-22px font-bold logo-text">TINY.VN</p>
            <!-- <img src="@/assets/images/logo-text.png" /> -->
        </div>

        <div class="avatar">
            <img src="@/assets/images/avatar.png" class="absolute-full" />
        </div>
        <p class="svn-rex user-name">Bond Nguyen</p>
        <p class="text-xs user-region">Viet Nam</p>
        <p class="text-xs user-id">ID: 679261</p>

        <div class="remaining-block">
            <p class="text-xs remaining-total">32 Days Remaining</p>
            <progress-bar :total="60" :remain="32" />
        </div>

        <div class="w-full nav-item-list">
            <div class="svn-agency-fb-bold nav-item" v-for="(item, index) in navItemList" :key="index"
                :class="{active: activeItem.name == item.name}"
                @click="goToItem(item)"
            >
                {{ item.title }}
            </div>
        </div>

        <div class="w-full recommend-service-list">
            <div class="service-item" v-for="(service, index) in recommendServiceList" :key="index"
                :style="`
                    --service-color: ${getRGBColor(service.color)};
                    --icon-color: ${service.icon_color}
                `"
            >
                <div class="service-info">
                    <p class="inter-bold text-lg mb-0.5 service-duration">{{ service.title }}</p>
                    <p class="inter-bold text-sm service-price">{{ formatPrice(service.price_per_month) }}đ <span class="inter-light text-10px">/tháng</span></p>
                </div>
                <div class="flex-center plus-icon">
                    <img src="@/assets/images/icons/plus.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { formatPrice } from "@/utils/price.js";
import { getRGBColor } from "@/utils/color.js";

import ProgressBar from "@/components/common/ProgressBar.vue";

const router = useRouter();

const navItemList = ref([
    { title: "TRANG CHỦ", name: "home", path: "/" },
    { title: "HỖ TRỢ", name: "support", path: "/support" },
    { title: "CÁC GÓI DỊCH VỤ", name: "service", path: "/service" }
]);

const activeItem = ref({ title: "TRANG CHỦ", name: "home", path: "/" });

const recommendServiceList = ref([
    { title: "1 month", price_per_month: 50000, color: "#01F3BC", icon_color: "#08738A" },
    { title: "3 months", price_per_month: 43000, color: "#FEB000", icon_color: "#6D5840" }
]);

const goToItem = (item) => {
    activeItem.value = item;
    router.push(item.path);
}
</script>