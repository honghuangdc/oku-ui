<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '@oku-ui/primitives'
</script>

<template>
  <TabsRoot
    class="flex flex-col w-full sm:w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    default-value="tab1"
  >
    <TabsList
      class="relative shrink-0 flex border-b border-mauve6"
      aria-label="Manage your account"
    >
      <!-- <TabsIndicator class="absolute px-8 left-0 h-[2px] bottom-0 w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300">
        <div class="bg-grass8 w-full h-full" />
      </TabsIndicator> -->
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve12 select-none  rounded-tl-md  hover:text-mauve12 data-[state=active]:text-mauve12 outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
        value="tab1"
      >
        Account
      </TabsTrigger>
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve12 select-none  rounded-tr-md hover:text-mauve12 data-[state=active]:text-mauve12 outline-none cursor-default focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black"
        value="tab2"
      >
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p class="mb-5 !mt-0 text-mauve12 text-[15px] !leading-normal">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-indigo12 block"
          for="name"
        > Name </label>
        <input
          id="name"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
          value="Pedro Duarte"
        >
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-indigo12 block"
          for="username"
        > Username </label>
        <input
          id="username"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
          value="@peduarte"
        >
      </fieldset>
      <div class="flex justify-end mt-5">
        <button
          class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-indigo4 text-indigo11 hover:bg-indigo5 focus:shadow-[0_0_0_2px] focus:shadow-indigo7 outline-none cursor-default"
        >
          Save changes
        </button>
      </div>
    </TabsContent>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p class="mb-5 !mt-0 text-mauve12 text-[15px] !leading-normal">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-indigo12 block"
          for="currentPassword"
        >
          Current password
        </label>
        <input
          id="currentPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
          type="password"
        >
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-indigo12 block"
          for="newPassword"
        > New password </label>
        <input
          id="newPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
          type="password"
        >
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-indigo12 block"
          for="confirmPassword"
        >
          Confirm password
        </label>
        <input
          id="confirmPassword"
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-mauve12 shadow-[0_0_0_1px] shadow-indigo7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-indigo8 outline-none"
          type="password"
        >
      </fieldset>
      <div class="flex justify-end mt-5">
        <button
          class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-indigo4 text-indigo11 hover:bg-indigo5 focus:shadow-[0_0_0_2px] focus:shadow-indigo7 outline-none cursor-default"
        >
          Change password
        </button>
      </div>
    </TabsContent>
  </TabsRoot>
</template>
