<!-- App.vue -->
<template>
  <div class="app-container">
    <div class="form-container">
      <VideojuegoForm />
    </div>
    <div class="table-details-container">
      <div class="table-container">
        <VideojuegoTable @seleccionarVideojuego="manejarSeleccionVideojuego" />
      </div>
      <div class="details-container">
        <VideojuegoDetails :videojuego="videojuegoSeleccionado" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import VideojuegoForm from './components/Formulario.vue'
import VideojuegoTable from './components/Tabla.vue'
import VideojuegoDetails from './components/MasInformacionJuego.vue'

export default {
  components: {
    VideojuegoForm,
    VideojuegoTable,
    VideojuegoDetails
  },
  setup() {
    const videojuegoSeleccionado = ref(null)

    const manejarSeleccionVideojuego = (videojuego) => {
      videojuegoSeleccionado.value = videojuego
    }

    return { videojuegoSeleccionado, manejarSeleccionVideojuego }
  }
}
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-container {
  width: 100%;
  max-width: 600px;
  margin-bottom: 2em;
}

.table-details-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
}

.table-container {
  flex: 1;
}

.details-container {
  flex: 1;
  margin-left: 2em;
}
</style>
