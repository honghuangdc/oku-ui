<script setup lang="ts">
import type { EmitsToHookProps } from '../shared/index.ts'
import type { AlertDialogRootEmits, AlertDialogRootProps } from './AlertDialogRoot.ts'
import { convertPropsToHookProps } from '../shared/index.ts'
import { useAlertDialogRoot } from './AlertDialogRoot.ts'

defineOptions({
  name: 'AlertDialogRoot',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<AlertDialogRootProps>(), {
  open: undefined,
  defaultOpen: false,
})

const emit = defineEmits<AlertDialogRootEmits>()

useAlertDialogRoot(convertPropsToHookProps(
  props,
  ['open'],
  (): Required<EmitsToHookProps<AlertDialogRootEmits>> => ({
    onUpdateOpen(open) {
      emit('update:open', open)
    },
  }),
))
</script>

<template>
  <slot />
</template>
