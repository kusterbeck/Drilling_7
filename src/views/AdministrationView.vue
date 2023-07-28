<template>
    <div>
       <b-container>
            <h1 class="my-5">Administración</h1>
            <div>
                <ModalFormComponent/>
            </div>
            <TableComponent/>
            <SummaryComponent/>
        </b-container>
    </div>
</template>

<script>
import TableComponent from '@/components/TableComponent.vue'
import SummaryComponent from '@/components/SummaryComponent.vue'
import ModalFormComponent from '@/components/ModalFormComponent.vue'

export default {
    name: "AdministrationView",
    components: {TableComponent, SummaryComponent, ModalFormComponent},
    methods: {
        
    }
}
</script>

