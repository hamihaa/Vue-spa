<template>
    <div class="crud-body container-fluid">
        <div class="parallax"></div>

        <div class="row">
            <div class="container">
                <div class="col-md-8 col-md-offset-2">
                    <alert></alert>
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
            bus.$on('deleted',
                    (index) => this.removeFromList(index));
            this.refreshList();
        },

        methods: {
            refreshList(){
                Projects.all()
                    .then(response => this.items = response.data);
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

    .parallax {
        /* The image used */
        /* Full height */
        height: 100%;

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    h4 {
        text-align: center;
    }
</style>