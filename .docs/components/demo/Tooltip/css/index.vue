<script setup lang="ts">
import { TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '@oku-ui/primitives'
import { Icon } from '@iconify/vue'
import './styles.css'
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger
        class="IconButton"
      >
        <Icon icon="radix-icons:plus" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          as="template"
          class="TooltipContent"
          :side-offset="5"
        >
          Add to library
          <TooltipArrow
            class="TooltipArrow"
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
