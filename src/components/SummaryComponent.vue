<template>
    <div>
        <b-alert show variant="primary"  class="alerta text-start text-primary bg-white border-primary">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-users" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            Cantidad total de alumnos permitidos: {{ totalCupos }} alumnos.
        </b-alert>
        <b-alert show variant="secondary" class="alerta text-start text-secondary bg-white border-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-check" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                <path d="M15 19l2 2l4 -4" />
            </svg>
            Cantidad total de alumnos inscritos: {{ totalInscritos }} alumnos.
        </b-alert>
        <b-alert show variant="success" class="alerta text-start text-success bg-white border-success">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-plus" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
            </svg>
            Cantidad total de cupos restantes: {{ totalCuposRestantes}} alumnos.
        </b-alert>
        <b-alert show variant="danger" class="alerta text-start text-danger bg-white border-danger">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ban" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M5.7 5.7l12.6 12.6" />
            </svg>
            Cantidad total de cursos terminados: {{ totalCursosTerminados[0] }} cursos.
        </b-alert>
        <b-alert show variant="warning" class="alerta text-start text-warning bg-white border-warning">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
            </svg>
            Cantidad total de cursos activos: {{ totalCursosTerminados[1] }} cursos.
        </b-alert>
        <b-alert show variant="info" class="alerta text-start text-info bg-white border-info">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bell-ringing" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                <path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
                <path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
            </svg>
            Cantidad total de cursos: {{ totalCursosTerminados[0] + totalCursosTerminados[1] }} cursos. 
        </b-alert>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
    name: "SummaryComponent",
    computed: {
        ...mapState(["cursos"]),
        ...mapGetters(["totalCupos", "totalInscritos", "totalCuposRestantes", "totalCursosTerminados"]),
    },
    methods: {},
}

</script>

<style scoped>
.alerta {
    font-weight: bold;
}
h1 {
    font-size: 4rem;
}
</style>