<script setup lang="ts">
import type { MenuContentProps } from './MenuContent.ts'
import { convertPropsToHookProps } from '../shared/index.ts'
import { DEFAULT_MENU_CONTENT_PROPS, useMenuContent } from './MenuContent.ts'
import MenuContentImpl from './MenuContentImpl.vue'

defineOptions({
  name: 'MenuContent',
})

const props = withDefaults(defineProps<MenuContentProps>(), DEFAULT_MENU_CONTENT_PROPS)

const menuContent = useMenuContent(convertPropsToHookProps(props))
</script>

<template>
  <MenuContentImpl v-if="menuContent.isPresent.value">
    <slot />
  </MenuContentImpl>
</template>
