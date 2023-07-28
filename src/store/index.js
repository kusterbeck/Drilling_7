import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      {
        id: 1,
        img: 'https://i.blogs.es/545cf8/es6-logo/450_1000.png',
        nombre: 'JavaScript Avanzado', 
        costo: 30000,
        duracion: '2', 
        cupos: 20, 
        inscritos: 10, 
        completado: false,
        fecha_registro: '2022-06-03', 
        descripcion: 'Curso con las nuevasactualizaciones de JavaScript.'
      },
      {
        id: 2, 
        img: 'https://desarrolloweb.com/storage/tag_images/actual/sT1RLpDHzInATuKnDUkwXhKoaIOrtS97gBtgiQ6M.png', 
        nombre: 'CSS para principiantes',
        costo: 10000, 
        duracion: '1', 
        cupos: 35, 
        inscritos: 23,
        completado: false, 
        fecha_registro: '2022-03-05', 
        descripcion: 'Aprendiendo estilos con CSS desde el nivel más básico.'
      },
      {
        id: 3, 
        img: 'https://logowik.com/content/uploads/images/javascript.jpg', 
        nombre: 'JavaScript Básico de 0 a 100', 
        costo: 20000, 
        duracion: '2', 
        cupos: 25, 
        inscritos: 0, 
        completado: true, 
        fecha_registro: '2022-03-05',
        descripcion: 'Programando para la web con JavaScript.'
      },
      {
        id: 4, 
        img: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png', 
        nombre: 'HTML Básico', 
        costo: 10000, 
        duracion: '1', 
        cupos: 35, 
        inscritos: 0, 
        completado: true, 
        fecha_registro: '2022-01-31', 
        descripcion: 'Aprende HTML 5 y crea tus primeras páginas web paso a paso condecenas de ejercicios.'
      },
      {
        id: 5, 
        img: 'https://logowik.com/content/uploads/images/vue2883.jpg', 
        nombre: 'Vue JS de 0 a 100', 
        costo: 85500, 
        duracion: '5', 
        cupos: 35, 
        inscritos: 35, 
        fecha_registro: '2022-03-06',
        completado: false, 
        descripcion: 'Aprende desde cerocomo usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo queofrece el framework.'
      },
      {
        id: 6, 
        img: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png', 
        nombre: 'Estilos con SASS', 
        costo: 45000, 
        duracion: '1', 
        cupos: 40, 
        inscritos: 35, 
        completado: false, 
        fecha_registro: '2022-03-06', 
        descripcion: 'Con SASS aprenderás a escribir mejor código de CSS contodas las funciones necesarias.'
      },
    ],
  },
  getters: {
    totalCupos: (state) => {
      return state.cursos.reduce((total, cuposActual) => {
        return total + cuposActual.cupos
      }, 0);
    },
    totalInscritos: (state) => {
      return state.cursos.reduce((total, inscritosActual) => {
        return total + inscritosActual.inscritos
      }, 0);
    },
    totalCuposRestantes: (state, getters) => {
      return getters.totalCupos - getters.totalInscritos
    },
    totalCursosTerminados: (state) => {
      let cursosTerminados = 0;
      let cursosNoTerminados = 0;
      for (const curso of state.cursos) {
        if (curso.completado) {
          cursosTerminados++
        } else {
          cursosNoTerminados++
        }
      }
      return [cursosTerminados, cursosNoTerminados]
    }
  },
  mutations: {
    AGREGAR_CURSO: (state, formulario) => {
      state.cursos.push(formulario);
    }
  },
  actions: {
    agregar_curso({commit}, formulario) {
      commit("AGREGAR_CURSO", formulario);
    },
  },
  modules: {
  }
})
