import { computed, onUnmounted, ref } from 'vue';

export const useMedia = () => {
  const screenWidth = ref<number>(0);

  const changeSizeWindow = () => {
    screenWidth.value = window.innerWidth;
  };

  changeSizeWindow();

  window.addEventListener('resize', changeSizeWindow);

  onUnmounted(() => {
    window.removeEventListener('resize', changeSizeWindow);
  });

  const device = computed(() => {
    if (screenWidth.value >= 1280) {
      return 'desktop';
    } else if (screenWidth.value >= 768) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  });

  return {
    device,
  };
};
