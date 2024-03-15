<script setup lang="ts">

import { useProductStore } from '@/stores/product/productStore';
import EditProductModal from './EditProductModal.vue';

const productStore = useProductStore()

productStore.getProducts()
</script>

<template>
    <h1>Produse</h1>
    <Button label="Add product" icon="pi pi-check" />

    <div class="post">
        <div v-if="productStore.response.success == false">{{ productStore.response.message }}</div>
        <div v-if="productStore.response.success" class="content">
            <DataTable :value="productStore.response.result" stripedRows paginator :rows="10" removableSort>
                <Column field="id" header="Id" sortable></Column>
                <Column field="denumire" header="Denumire" sortable></Column>
                <Column field="stoc" header="Stoc" sortable> </Column>
                <Column field="pret" header="Preț" sortable></Column>
                <Column header="Acțiuni">
                    <template #body="{  }">
                        <ButtonGroup>
                            <Button label="Edit" icon="pi pi-check" />
                            <Button label="Delete" icon="pi pi-trash" severity="danger"/>
                        </ButtonGroup>
                    </template>
                </Column>
                <template #footer> În total sunt {{ productStore.response ? productStore.response.result.length : 0 }}
                    produse. </template>
            </DataTable>
        </div>
    </div>
</template>