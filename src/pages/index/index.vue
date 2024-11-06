<template>
  <view class="flex flex-col items-center justify-center">
    <image class="mx-auto mt-[200rpx] h-[200rpx] w-[200rpx]" src="/static/logo.png" />
    <view>
      <text class="text-[#8f8f94] text-[32rpx]">{{ user.name }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useUserStore } from '@stores/userStore';

const { user } = useUserStore();
</script>
