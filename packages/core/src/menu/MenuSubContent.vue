<script setup lang="ts">
import type { MenuSubContentProps } from './MenuSubContent.ts'
import { convertPropsToHookProps } from '../shared/index.ts'
import { DEFAULT_MENU_SUB_CONTENT_PROPS, useMenuSubContent } from './MenuSubContent.ts'
import MenuSubContentImpl from './MenuSubContentImpl.vue'

defineOptions({
  name: 'MenuSubContent',
})

const props = withDefaults(defineProps<MenuSubContentProps>(), DEFAULT_MENU_SUB_CONTENT_PROPS)

const menuContent = useMenuSubContent(convertPropsToHookProps(props))
</script>

<template>
  <MenuSubContentImpl v-if="menuContent.isPresent.value">
    <slot />
  </MenuSubContentImpl>
</template>
