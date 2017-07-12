
<template>
    <div class="vertical-alignment-helper">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click="toggleModal">&times;</button>
                    <h4 class="modal-title">Project details</h4>
                </div>
                <div class="modal-body">
                    <p>ID: {{ data.id }} </p>
                    <p>Body: {{ data.body }}</p>
                    <p>Created at: {{ data.created_at }}</p>
                    <p>Created by: {{ data.user.name }}</p>
                    <button type="button" class="btn btn-default" @click="toggleModal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data'],

        methods: {
            toggleModal() {
                this.$emit('closedetails');
            }
        }
    }
</script>

<style lang="scss">
    .vertical-alignment-helper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 13;
    }

    .modal-dialog {
        position:fixed;
        left: 50%;
        transform: translate(-50%, 0);

    }
</style>