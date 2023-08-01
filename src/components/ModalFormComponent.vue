<template >
    <div>
        <div class="d-block text-center">
            <b-form-input class="my-3" v-model="formulario.nombre" type="text"  placeholder="Nombre del Curso"></b-form-input>
            <b-form-input class="my-3" v-model="formulario.img" type="text"  placeholder="URL de imagen"></b-form-input>
            <b-form-input class="my-3" v-model.number="formulario.cupos" type="number"  placeholder="Cupos del curso"></b-form-input>
            <b-form-input class="my-3" v-model.number="formulario.inscritos" type="number" 
                placeholder="Inscritos del curso"></b-form-input>
            <b-form-input class="my-3" v-model.number="formulario.duracion" type="number"  placeholder="Duracion del curso"></b-form-input>
            <label for="example-datepicker" class="fecha ms-1">Fecha de registro</label>
            <b-form-input class="my-1" v-model="formulario.fecha_registro" type="date"  placeholder="Fecha de registro"></b-form-input>
            <b-form-input class="my-3" v-model.number="formulario.costo" type="number"  placeholder="Costo del curso"></b-form-input>
            <b-form-textarea rows="4" max-rows="6" class="my-3" v-model="formulario.descripcion" type="text" 
                placeholder="Descripción del curso"></b-form-textarea>
        </div>
            <b-button class="mt-2 mx-2 text-light" variant="outline-success bg-success" block @click="agregarCursoFormulario(formulario)" >
                <strong>AGREGAR</strong>
            </b-button>
            <b-button class="mt-2 mx-2 text-light" variant="outline-warning bg-warning" block @click="limpiarFormulario">
                <strong>LIMPIAR FORMULARIO</strong>
            </b-button>
            <b-button class="mt-2 mx-2 text-light" variant="outline-danger bg-danger" block @click="esconderModal">
                <strong>CANCELAR</strong>
            </b-button> 
    </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
    name: 'ModalFormComponent',
    
    data() {
        return {
            formulario: {
            id: 6,
            nombre: '',
            img: '',
            cupos: '',
            inscritos: '',
            duracion: '',
            fecha_registro: '',
            completado: false,
            costo: '',
            descripcion: '',
            }
        }
    },
    computed: {
        ...mapState(["cursos"])
    },
    methods: {
        esconderModal() {
            this.$emit("hideModal");
        },
        limpiarFormulario() {
            this.formulario.nombre = '';
            this.formulario.url = '';
            this.formulario.cupos = '';
            this.formulario.inscritos = '';
            this.formulario.duracion = '';
            this.formulario.fecha_registro = '';
            this.formulario.costo = '';
            this.formulario.descripcion = '';
        },
        agregarCursoFormulario(formulario) {
            if (this.formulario.nombre === '' || this.formulario.url === '' || this.formulario.cupos === '' || this.formulario.inscritos === '' || this.formulario.duracion === '' || this.formulario.fecha_registro === '' || this.formulario.costo === '' || this.formulario.descripcion === '') {
                return alert('Complete todos los campos disponibles para agregar el curso');
            }
            if (this.formulario.cupos > 100 || this.formulario.cupos <= 0) {
                return alert('Por favor ingrese una cantidad de cupos realista (máximo 100 cupos)');
            }
            if (this.formulario.inscritos > this.formulario.cupos || this.formulario.inscritos <= 0 ) {
                return alert('La cantidad de inscritos no puede ser mayor a los cupos disponibles del curso, o no pueden ser menores a 0');
            }
            if (this.formulario.duracion > 12 || this.formulario.duracion <= 0 ) {
                return alert('Los cursos no pueden tener una duración mayor a 12 meses o menor a 0 meses');
            }
            if (this.formulario.costo > 100000 ) {
                return alert('Esta es una institución publica, sea consciente del precio de sus cursos (máximo $100000)');
            }
            this.$store.dispatch("agregar_curso", formulario);
            this.esconderModal();
            this.formulario.id ++;
        },
    }

}
</script>

<style scoped>
.fecha {
    font-size: 13px;
    display: flex;
    flex-direction: row;
}
</style>