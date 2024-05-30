import { defineStore } from 'pinia'

export const useVideojuegoStore = defineStore('videojuegoStore', {
  state: () => ({
    videojuegos: []
  }),
  actions: {
    agregarVideojuego(videojuego) {
      this.videojuegos.push(videojuego)
    }
  }
})
