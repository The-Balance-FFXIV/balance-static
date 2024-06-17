<script lang="ts">
type Role = {
    name: string;
};
const roles: Role[] = [
    {
        id: 0,
        name: "Tank",
    },
    {
        id: 1,
        name: "Healer",
    },
    {
        id: 2,
        name: "DPS",
    },
];

export default {
    setup() {
        const activeRole = ref(roles[0]);

        return {
            activeRole,
        };
    },
    data() {
        return {
            roles,
        };
    },
};
</script>

<template>
    <div id="roleSlider" class="flex flex-row space-x-4">
        <input
            v-for="role in roles"
            id="tab-{{ role.name | urlize }}"
            name="css-tabs"
            :value="role.name"
            :class="{
                'bg-red-500': role.id === activeRole.id,
                'bg-green-500': role.id !== activeRole.id,
            }"
            @click="activeRole = role"
        />
    </div>
</template>
