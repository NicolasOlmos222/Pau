<template>
    <div v-if="videojuego" class="infoJuego">
        <p>Nombre {{ videojuego.nombre }} </p>
        <p>Plataforma {{ videojuego.plataforma }}</p>
        <p>Estado {{ videojuego.estado }}</p>
        <p>Puntaje {{ videojuego.puntaje }}</p>

    </div>
</template>

<script>
export default {
    props: {
        videojuego: {
            type: Object,
            default: null
        }
    }
}

</script>

<style>

.infoJuego 
{
    border: black 1px solid;
    padding: 1em;
    margin-top: 1em;
}
p
{
    color: black;
}

</style>