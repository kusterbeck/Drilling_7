<template >
    <div>
        <div class="d-block text-center">

            <b-form-input class="my-3"  type="number" v-model="cursosPrueba.id" placeholder="Nombre del Curso" hidden></b-form-input>
            <b-form-input class="my-3"  type="text" v-model="cursosPrueba.nombre" placeholder="Nombre del Curso"></b-form-input>
            <b-form-input class="my-3"  type="text" v-model="cursosPrueba.img" placeholder="URL de imagen"></b-form-input>
            <b-form-input class="my-3"  type="number" v-model.number="cursosPrueba.cupos"  placeholder="Cupos del curso"></b-form-input>
            <b-form-input class="my-3"  type="number" v-model.number="cursosPrueba.inscritos" placeholder="Inscritos del curso"></b-form-input>
            <b-form-input class="my-3"  type="number" v-model.number="cursosPrueba.duracion" placeholder="Duracion del curso"></b-form-input>
            <label for="example-datepicker" class="fecha ms-1">Fecha de registro</label>
            <b-form-input class="my-1"  type="date" v-model="cursosPrueba.fecha_registro"  placeholder="Terminado"></b-form-input>
            <label for="example-datepicker" class="fecha ms-1">¿Curso Completado?</label>
            <b-form-select v-model="cursosPrueba.completado" :options="options" size="sm" class="mt-3"></b-form-select>
            <b-form-input class="my-3"  type="number" v-model.number="cursosPrueba.costo"  placeholder="Costo del curso"></b-form-input>
            <b-form-textarea rows="4" max-rows="6" class="my-3"  type="text" v-model="cursosPrueba.descripcion" 
                placeholder="Descripción del curso"></b-form-textarea>
        </div>
            <b-button class="mt-2 mx-2 text-light" variant="outline-success bg-success" block @click="actualizarCurso" >
                <strong>EDITAR</strong>
            </b-button>
            <b-button class="mt-2 mx-2 text-light" variant="outline-danger bg-danger" block @click="esconderModal">
                <strong>CERRAR</strong>
            </b-button> 
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    name: 'EditFormComponent',
    data() {
        return {
            cursosPrueba: {
            id: '',
            nombre: '',
            img: '',
            cupos: '',
            inscritos: '',
            duracion: '',
            costo: '',
            completado: false,
            fecha_registro: '',
            descripcion: ''
            },
            options: [
                { value: true, text: 'Si ' },
                { value: false, text: 'No ' },
                ]
        }
    },
    computed: {
        ...mapState(["cursos", "id_asignatura_id"]),
        ...mapGetters(["obtenerCursoPorId"]),
    },
    methods: {
        ...mapActions(["editar_curso"]),
        esconderModal() {
            this.$emit("hideModalEdit");
        },
        actualizarCurso() {
            if (this.cursosPrueba.id === '' ||
                this.cursosPrueba.nombre === '' ||
                this.cursosPrueba.img === '' ||
                this.cursosPrueba.cupos === '' ||
                this.cursosPrueba.inscritos === '' ||
                this.cursosPrueba.duracion === '' ||
                this.cursosPrueba.costo === '' ||
                this.cursosPrueba.fecha_registro === '' ||
                this.cursosPrueba.descripcion === '' ) {
                    alert('Porfavor complete todos los campos con la información solicitada')
                } else if ( this.cursosPrueba.inscritos > this.cursosPrueba.cupos || this.cursosPrueba.inscritos < 0 ) {
                    alert('El numero de alumnos inscritos no puede ser mayor al numero de cupos');
                } else {
                    if ( this.cursosPrueba.completado ) {
                        this.cursosPrueba.inscritos = 0;
                    }
                    let objeto = { ...this.cursosPrueba, id: this.id_asignatura_id };
                    this.editar_curso(objeto);
                    this.esconderModal();
                }
        },
        limpiarFormulario() {
            this.cursosPrueba.nombre = '';
            this.cursosPrueba.img = '';
            this.cursosPrueba.cupos = '';
            this.cursosPrueba.inscritos = '';
            this.cursosPrueba.duracion = '';
            this.cursosPrueba.fecha_registro = '';
            this.cursosPrueba.costo = '';
            this.cursosPrueba.descripcion = '';
        },
        mostrarCursoPorId() {
            console.log(this.id_asignatura_id)
            let curso = this.obtenerCursoPorId(this.id_asignatura_id);
            this.cursosPrueba.id = curso.id;
            this.cursosPrueba.img = curso.img;
            this.cursosPrueba.nombre = curso.nombre;
            this.cursosPrueba.cupos = curso.cupos;
            this.cursosPrueba.inscritos = curso.inscritos;
            this.cursosPrueba.duracion = curso.duracion;
            this.cursosPrueba.costo = curso.costo;
            this.cursosPrueba.completado = curso.completado;
            this.cursosPrueba.fecha_registro = curso.fecha_registro;
            this.cursosPrueba.descripcion = curso.descripcion;
        }
    },
    mounted: function() {
        this.mostrarCursoPorId();
    }

}
</script>