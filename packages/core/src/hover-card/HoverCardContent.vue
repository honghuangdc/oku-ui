<script setup lang="ts">
import type { HoverCardContentProps } from './HoverCardContent.ts'
import { convertPropsToHookProps } from '../shared/index.ts'
import { DEFAULT_HOVER_CARD_CONTENT_PROPS, useHoverCardConten } from './HoverCardContent.ts'
import HoverCardContentImpl from './HoverCardContentImpl.vue'

defineOptions({
  name: 'HoverCardContent',
})

const props = withDefaults(defineProps<HoverCardContentProps>(), DEFAULT_HOVER_CARD_CONTENT_PROPS)

const hoverCardConten = useHoverCardConten(convertPropsToHookProps(props))
</script>

<template>
  <HoverCardContentImpl v-if="hoverCardConten.isPresent.value">
    <slot />
  </HoverCardContentImpl>
</template>
