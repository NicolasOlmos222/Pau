<template>
    <div class="videojuego-table">
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Plataforma</th>
            <th>Estado</th>
            <th>Puntaje</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(videojuego, index) in videojuegos" :key="index">
            <td>{{ videojuego.nombre }}</td>
            <td>{{ videojuego.plataforma }}</td>
            <td>{{ videojuego.estado }}</td>
            <td>{{ videojuego.puntaje }}</td>
            <td><button @click="seleccionarVideojuego(videojuego)">Mostrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useVideojuegoStore } from '../stores/videojuegoStore'
  
  export default {
    props: {
      onSeleccionarVideojuego: {
        type: Function,
        required: true
      }
    },
    setup(props) {
      const videojuegoStore = useVideojuegoStore()
  
      const seleccionarVideojuego = (videojuego) => {
        props.onSeleccionarVideojuego(videojuego)
      }
  
      return { videojuegos: videojuegoStore.videojuegos, seleccionarVideojuego }
    }
  }
  </script>
  
  <style>
  .videojuego-table {
    display: flex;
    flex-direction: column;
  }

  tr, td, th {
    color: black;
  }
  </style>
  