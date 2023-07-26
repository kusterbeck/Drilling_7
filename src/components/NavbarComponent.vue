<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="dark" class="d-flex">
                <b-navbar-brand href="#" class="ps-5 me-auto">Cursos AlfaWeb</b-navbar-brand>
                <div >
                    <b-button variant="danger" class="me-3">
                        <b-link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
                            </svg>
                        </b-link>
                    </b-button>
                    <b-button variant="danger" class="me-3">
                        <b-link to="/administration">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tool" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="#fff" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"/>
                            </svg>
                        </b-link>
                    </b-button>
                </div>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavbarComponent',

}
</script>
