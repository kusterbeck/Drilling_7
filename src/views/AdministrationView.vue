<template>
    <div>
       <b-container>
            <h1 class="my-5">Administración</h1>
            <div>
                <b-button v-b-modal.modal-center variant="primary" class="mb-5">
                    <strong>AGREGAR CURSO</strong>
                </b-button>
                <b-modal id="modal-center" centered title="BootstrapVue">
                    <p class="my-4">Vertically centered modal!</p>
                </b-modal>
            </div>
            <TableComponent/>
            <SummaryComponent/>
        </b-container>
    </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import SummaryComponent from '@/components/SummaryComponent.vue'

export default {
    name: "AdministrationView",
    components: {TableComponent, SummaryComponent}
}
</script>

