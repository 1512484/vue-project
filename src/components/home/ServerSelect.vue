<template>
    <div class="server-select-component">
        <p class="svn-agency-fb-bold uppercase mb-1.5">Lựa chọn server</p>
        <div class="relative">
            <div id="server-list" class="server-list">
                <div class="p-2 server-item" v-for="i in 9" :key="i">
                    <div class="flex">
                        <img src="@/assets/images/flag.png" class="flag-img" />
                        <div class="ml-2 server-info">
                            <p class="svn-avo-bold text-lg mb-1">Vietnam</p>
                            <p class="text-10px mb-1">Vietel Ho Chi Minh</p>
                            <p class="text-10px">20ms</p>
                        </div>
                    </div>
                    <div class="hover-layout">
                        <button class="btn btn-primary">
                            <span class="btn-text">CONNECT</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="left-arrow" v-show="arrow.left" @click="scrollTo(-1)">
                <img src="@/assets/images/icons/arrow-right-circle.svg" />
            </div>
            <div class="right-arrow" v-show="arrow.right" @click="scrollTo(1)">
                <img src="@/assets/images/icons/arrow-right-circle.svg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

const container = ref(null);
const pos = ref({ top: 0, left: 0, x: 0, y: 0 });
const arrow = reactive({ left: false, right: false });

onMounted(() => {
    container.value = document.getElementById('server-list');

    document.addEventListener("mousedown", mouseDownHandler);
    container.value?.addEventListener('wheel', wheelHandler);

    setArrowVisible();
});

onBeforeUnmount(() => {
    document.removeEventListener("mousedown", mouseDownHandler);
    container.value?.removeEventListener('wheel', wheelHandler);
});

const mouseDownHandler = (e) => {
    if(!e.target?.closest("#server-list")) return;

    pos.value = {
        // The current scroll
        left: container.value?.scrollLeft,
        top: container.value?.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

const mouseMoveHandler = (e) => {
    // How far the mouse has been moved
    const dx = e.clientX - pos.value.x;
    const dy = e.clientY - pos.value.y;

    if(container.value) {
        // Scroll the element
        container.value.scrollTop = pos.value.top - dy;
        container.value.scrollLeft = pos.value.left - dx;
    }

    setArrowVisible();
}

const mouseUpHandler = () => {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
}

const wheelHandler = (event) => {
    event.preventDefault();

    console.log({event});
    if(event.deltaY) {
        container.value?.scrollBy({
            left: event.deltaY < 0 ? -30 : 30,
        });
    } else if(event.deltaX) {
        container.value?.scrollBy({
            left: event.deltaX < 0 ? -30 : 30,
        });
    }

    setArrowVisible();
}

const scrollTo = (value) => {
    if(!container.value) return;

    container.value.style.scrollBehavior = "smooth";
    container.value?.scrollBy({
        left: value < 0 ? -182 : 182,
    });
    container.value.style.scrollBehavior = "unset";

    setTimeout(() => {
        setArrowVisible();
    }, 200);
}

const setArrowVisible = () => {
    if(!container.value) return;

    let scrollTotalWidth = container.value.scrollWidth;
    let scrollViewWidth = container.value.clientWidth;
    let scrollLeft = container.value.scrollLeft;

    if(scrollTotalWidth <= scrollViewWidth) {
        arrow.left = false;
        arrow.right = false;
        return;
    }

    if(scrollLeft > 30) {
        arrow.left = true;
    } else {
        arrow.left = false;
    }

    if(scrollLeft < scrollTotalWidth - scrollViewWidth - 30) {
        arrow.right = true;
    } else {
        arrow.right = false;
    }
}
</script>