<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <h4>Reusable form and errors objects (dont forget about :key)</h4>
                <!-- Projects -->
                <div class="panel panel-default" v-for="(data, index) in items">
                    <project-component :data="data" :index="index" :key="data.id"></project-component>
                </div>
                <!-- /Project -->
                <!-- Add new projects form -->
                <add-new @completed="addToList"></add-new>
            </div>
        </div>
    </div>
</template>

<script>
    //Projects is model class
    import Projects from '../models/Projects';
    //Vue component
    import ProjectComponent from '../components/Project.vue';
    import AddNew from '../components/AddNew.vue';

    export default {
        components: { AddNew, ProjectComponent },

        data() {
            return {
                items: []
            }
        },

        created() {
            bus.$on('deleted',
                    (index) => this.items.splice(index, 1));
            console.log('test');
            this.refreshList();
        },

        methods: {
            refreshList(){
                Projects.all()
                    .then(response => this.items = response.data);
            },

            addToList(data){
                this.items.unshift(data);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style>
    h4 {
        text-align: center;
    }
</style>