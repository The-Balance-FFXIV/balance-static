<template>
    {{ activeRole }}
    <aside class="w-[300px]">
        <swiper-container
            id="role-nav-thumbs"
            :slides-per-view="3"
            class="bg-blue-500"
        >
            <swiper-slide v-for="(role, index) in roles">
                <a
                    :href="`#${role.id}`"
                    :class="{
                        'bg-red-500': index === activeRole,
                        'bg-gray-500': index !== activeRole,
                    }"
                    @click="activeRole = index"
                >
                    {{ role.name }}
                </a>
            </swiper-slide>
        </swiper-container>
    </aside>
    <aside class="w-[800px]">
        <swiper-container
            :slides-per-view="1"
            :hashNavigation="{
                watchState: true,
                replaceState: true,
            }"
            thumbs-swiper="#role-nav-thumbs"
            @swiperslidechange="onSlideChange"
        >
            <swiper-slide v-for="role in roles" :data-hash="role.id">
                <div class="bg-red-500">
                    <h2>{{ role.name }}</h2>
                    <p>{{ role.description }}</p>
                </div>
            </swiper-slide>
        </swiper-container>
    </aside>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
// initialize swiper web components
import { register } from "swiper/element/bundle";
register();
type Role = {
    name: string;
};
const roles: Role[] = [
    {
        id: "tank-nav",
        name: "Tank",
        description: "Tanks are the front line of any party.",
    },
    {
        id: "healer-nav",
        name: "Healer",
        description: "Healers keep the party alive.",
    },
    {
        id: "dps-nav",
        name: "DPS",
        description: "DPS deal damage to the enemy.",
    },
];

export default {
    components: {},
    setup() {
        let activeRole = ref(0);
        const spaceBetween = 10;

        const onSlideChange = (e) => {
            const [swiper] = e.detail;
            console.log(`Swiper active index: ${swiper.activeIndex}`);
            activeRole.value = swiper.activeIndex;
        };

        return {
            activeRole,
            roles,
            spaceBetween,
            onSlideChange,
        };
    },
};
</script>
