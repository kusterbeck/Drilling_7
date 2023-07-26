<template>
    <div>
        <b-container>
            <h1 class="my-5">Administración</h1>
            <b-button variant="primary" class="mb-5">
                <strong>AGREGAR CURSO</strong>
            </b-button>
            <b-table-simple small caption-top responsive>
                <b-thead head-variant="dark">
                    <b-tr>
                        <b-th>Curso</b-th>
                        <b-th>Cupos</b-th>
                        <b-th>Inscritos</b-th>
                        <b-th>Duración</b-th>
                        <b-th>Costo</b-th>
                        <b-th>Terminado</b-th>
                        <b-th>Fecha</b-th>
                        <b-th>Acciones</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody v-for="(curso, index) in cursos" :key="index">
                    <b-tr>
                        <b-td class="py-3"><strong>{{ curso.nombre }}</strong></b-td>
                        <b-td class="py-3">{{ curso.cupos }}</b-td>
                        <b-td class="py-3">{{ curso.inscritos }}</b-td>
                        <b-td class="py-3">{{ curso.duracion }}</b-td>
                        <b-td class="py-3 rounded-pill bg-lightgreen text-light"><span>${{ curso.costo }}</span></b-td>
                        <b-td class="py-3" v-if="curso.completado"><span class="span-completado text-light">Sí</span></b-td>
                        <b-td class="py-3" v-else><span class="span-no-completado text-light">No</span></b-td>
                        <b-td class="py-3 rounded-pill bg-lightgreen text-light"><span>{{ curso.fecha_registro }}</span></b-td>
                        <b-td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil mx-4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash mx-4" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff2825" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                        </b-td>
                    </b-tr>
                </b-tbody>
            </b-table-simple>
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
        </b-container>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'AdministrationView',
    computed: {
        ...mapState(["cursos"]),
        ...mapGetters(["totalCupos","totalInscritos", "totalCuposRestantes", "totalCursosTerminados"]),
    },
    methods: {
    }
    }

</script>

<style scoped>
td span {
    background-color: rgb(76, 222, 105);
    border-radius: 20px;
    padding-top: .7rem;
    padding-bottom: .7rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
}
.span-completado {
    background-color: rgb(55, 204, 245);
    border-radius: 20px;
    padding-top: .7rem;
    padding-bottom: .7rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
}
.span-no-completado {
    background-color: rgb(186, 196, 199);
    border-radius: 20px;
    padding-top: .7rem;
    padding-bottom: .7rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
}
.alerta {
    font-weight: bold;
}
h1 {
    font-size: 4rem;
}
</style>