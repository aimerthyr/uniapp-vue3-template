<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';

onLaunch(() => {
  console.log('App Launch11');
});
onShow(() => {
  console.log('App Show');
});
onHide(() => {
  console.log('App Hide');
});
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
