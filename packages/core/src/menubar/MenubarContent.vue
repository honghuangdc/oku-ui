<script setup lang="ts">
import type { MenubarContentProps } from './MenubarContent.ts'
import { convertPropsToHookProps } from '../shared/index.ts'
import { DEFAULT_MENUBAR_CONTENT_PROPS, useMenubarContent } from './MenubarContent.ts'
import MenubarContentImpl from './MenubarContentImpl.vue'

defineOptions({
  name: 'MenubarContent',
})

const props = withDefaults(defineProps<MenubarContentProps>(), DEFAULT_MENUBAR_CONTENT_PROPS)

const menubarContent = useMenubarContent(convertPropsToHookProps(props))
</script>

<template>
  <MenubarContentImpl v-if="menubarContent.isPresent.value">
    <slot />
  </MenubarContentImpl>
</template>
