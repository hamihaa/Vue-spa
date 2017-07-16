<template>
    <div class="crud-body container-fluid">

        <div class="row">
            <div class="container-fluid parallax">
                <div class="col-md-8 col-md-offset-2">
                    <h4>Reusable form and errors objects (dont forget about :key)</h4>
                    <alert></alert>
                    <!-- Projects -->
                    <div class="panel panel-default" v-for="(data, index) in items">
                        <project-component :data="data" :index="index" :key="data.id"></project-component>
                    </div>
                    <!-- /Project -->
                    <!-- Add new projects form -->
                    <!-- @completed="addToList" <- use this if not using broadcast -->
                    <add-new></add-new>
                </div>
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
    import Alert from '../components/Alert.vue';

    export default {
        components: { AddNew, ProjectComponent, Alert },

        data() {
            return {
                items: []
            }
        },

        created() {
            this.refreshList();

            Echo.channel('chatroom')
                .listen('ProjectAdded', (data) => {
                    this.addToList(data.project)
                })
                .listen('ProjectUpdated', (data) => {
                    var project = this.items.find((project) => project.id === data.project.id);
//                        console.log(project);
                    if(project) {
                        var index = this.items.indexOf(project);
                        this.items[index].body = data.project.body;
                        bus.$emit('newEvent',  {msg:'Object has been updated.', isSuccess: true});
                    }
                })
                .listen('ProjectDeleted',(data) => {
                    var project = this.items.find((project) => project.id === data.project.id);
//                        console.log(project);
                    if (project) {
                        var index = this.items.indexOf(project);
                        this.removeFromList(index);
                    }
                })
        },

        methods: {
            refreshList(){
                Projects.all()
                    .then(response => {
                        this.items = response.data;
                    });
            },

            removeFromList(index) {
                this.items.splice(index, 1)
                bus.$emit('newEvent', {msg:'Object has been removed.', isSuccess: true});
            },
            addToList(data){
                this.items.unshift(data);
                window.scrollTo(0,0);
                bus.$emit('newEvent', {msg:'Object has been added.', isSuccess: true});
            }
        }
    }
</script>

<style>
    .crud-body {
        height: 100%;
    }
    h4 {
        text-align: center;
    }
</style>