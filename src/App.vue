<template>
  <div class="layout-container">
    <div class="background-layout">
      <div class="light-left"></div>
      <div class="light-right"></div>
      <img src="@/assets/images/gems-left.png" class="gems-left" />
      <img src="@/assets/images/gems-right.png" class="gems-right" />
    </div>
    <aside>
      <the-drawer />
    </aside>
    <div class="main-view">
      <header>
        <the-header />
      </header>
      <main>
        <RouterView />
      </main>
      <div class="service-extension" v-if="serviceExtensionVisible">
        <p class="svn-avo-bold text-2xl text-center mb-10">Thời lượng của bạn đã hết <br />
          Vui lòng gia hạn ngay để tiếp tục sử dụng dịch vụ</p>
        <button class="btn btn-primary">
          <span class="text-lg btn-text">GIA HẠN NGAY</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import TheHeader from "@/components/layout/TheHeader.vue";
import TheDrawer from "@/components/layout/TheDrawer.vue";

const serviceExtensionVisible = ref(false);
</script>
