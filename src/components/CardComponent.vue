<template>
    <div>
        <b-container>
            <b-row>
                <b-col v-for="(curso, index) in cursos" :key="index">
                    <b-card :title="curso.nombre" sub-title="Información" style="width: 25rem;" :img-src="curso.img" :img-alt="curso.img" img-top class="card-title my-3">
                        <b-list-group>
                            <b-list-group-item>Costo: {{ curso.costo }}</b-list-group-item>
                            <b-list-group-item>Duración: {{ curso.duracion }}</b-list-group-item>
                            <b-list-group-item>Cupos: {{ curso.cupos }}</b-list-group-item>
                            <b-list-group-item v-if="curso.completado">Completado: Sí</b-list-group-item>
                            <b-list-group-item v-else>Completado: No</b-list-group-item>
                            <b-list-group-item>Fecha de registro: {{ curso.fecha_registro }}</b-list-group-item>
                            <b-list-group-item>Descripción: {{ curso.descripcion }}</b-list-group-item>
                        </b-list-group>    
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: 'CardComponent',
    computed: {
        ...mapState(["cursos"])
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}

</style>