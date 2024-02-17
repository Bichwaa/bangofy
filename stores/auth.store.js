import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    isloggedIn:false
   }),
  actions: {
    async toggleLoginState(){
      this.isloggedIn = !this.isloggedIn
    },
    login(){
      this.isloggedIn = true 
    },
    logout(){
      this.isloggedIn = false
     }
  }
})
