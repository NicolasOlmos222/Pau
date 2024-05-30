<template>
  <form @submit.prevent="guardarDatos">
    <label for="nombre" class="labels">Nombre</label>
    <input type="text" v-model="nombre" id="nombre" required>

    <label class="labels">Plataforma</label>
    <select v-model="plataforma" required>
      <option value="">PC | PlayStation | Xbox One</option>
      <option value="PC">PC</option>
      <option value="PlayStation">PlayStation</option>
      <option value="Xbox One">Xbox One</option>
    </select>

    <label class="labels">Estado</label>
    <select name="estado" id="estado" v-model="estado" required>
      <option value="">Pendiente | Jugando | Completado</option>
      <option value="Jugando">Jugando</option>
      <option value="Completado">Completado</option>
    </select>

    <label for="puntaje" class="labels">Puntaje</label>
    <input type="number" v-model="puntaje" name="puntaje" id="puntaje" min="1" max="10">

    <div class="botonRegistrar">
      <button type="submit">Registrar videojuego</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useVideojuegoStore } from '../stores/videojuegoStore'

export default {
  setup() {
    const videojuegoStore = useVideojuegoStore()
    const nombre = ref('')
    const plataforma = ref('')
    const estado = ref('')
    const puntaje = ref(1)

    const guardarDatos = () => {
      const nuevoVideojuego = {
        nombre: nombre.value,
        plataforma: plataforma.value,
        estado: estado.value,
        puntaje: puntaje.value
      }
      videojuegoStore.agregarVideojuego(nuevoVideojuego)
      nombre.value = ''
      plataforma.value = ''
      estado.value = ''
      puntaje.value = 1
    }

    return { nombre, plataforma, estado, puntaje, guardarDatos }
  }
}
</script>

<style>
  .labels{
    color: black;
  }
</style>