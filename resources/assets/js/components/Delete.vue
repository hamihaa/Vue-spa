<template>
    <div>
        <button class="btn btn-info btn-sm" @click="deleteProject">Odstrani
        </button>
    </div>
</template>

<script>

    export default {

        props: ['project', 'index'],

        name: 'delete-project',

        data() {
            return {
                item: []
            }
        },

        methods: {
            deleteProject() {
                if (confirm('Do you really want to delete this project?')) {
                    axios.delete('/projects/' + this.project.id);
                }
            }
        }
    }
</script>