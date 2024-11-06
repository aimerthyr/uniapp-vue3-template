import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const user = ref({ name: 'Hello paychai' });

  function changeName() {
    user.value.name = 'Hello paychai !!!';
  }

  return { user, changeName };
});
