<script setup lang="ts">
import type { SeparatorProps } from './Separator.ts'
import { Primitive } from '../primitive/index.ts'
import { convertPropsToHookProps, normalizeAttrs } from '../shared/index.ts'
import { DEFAULT_SEPARATOR_PROPS, useSeparator } from './Separator.ts'

defineOptions({
  name: 'Separator',
})

const props = withDefaults(defineProps<SeparatorProps>(), DEFAULT_SEPARATOR_PROPS)

const separator = useSeparator(convertPropsToHookProps(props))
</script>

<template>
  <Primitive v-bind="normalizeAttrs(separator.attrs([$attrs]))">
    <slot />
  </Primitive>
</template>
