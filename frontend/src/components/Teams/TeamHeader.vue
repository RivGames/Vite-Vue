<script setup>
defineProps({
  team:Object,
})
</script>
<template>
  <header class="flex justify-between">
    <div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
              :disabled="team.members.length === team.spots"
      >
        Add member
      </button>
    </div>
  </header>
</template>