<script setup lang="ts">
import type { EmitsToHookProps } from '../shared/index.ts'
import type { MenuItemEmits, MenuItemProps } from './MenuItem.ts'
import { Primitive } from '../primitive/index.ts'
import { convertPropsToHookProps, normalizeAttrs } from '../shared/index.ts'
import { DEFAULT_MENU_ITEM_PROPS, useMenuItem } from './MenuItem.ts'

defineOptions({
  name: 'MenuItem',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<MenuItemProps>(), DEFAULT_MENU_ITEM_PROPS)
const emit = defineEmits<MenuItemEmits>()

const menuItem = useMenuItem(convertPropsToHookProps(
  props,
  ['disabled'],
  (): Required<EmitsToHookProps<MenuItemEmits>> => ({
    onSelect(event) {
      emit('select', event)
    },
  }),
))
</script>

<template>
  <Primitive v-bind="normalizeAttrs(menuItem.attrs([$attrs]))">
    <slot />
  </Primitive>
</template>
