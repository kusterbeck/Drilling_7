<template>
    <div>     
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
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TableComponent',
    computed: {
        ...mapState(["cursos"]),
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
</style>