<template>

    <div @mouseenter="onHover" @mouseleave="onLeave">
        <div class="project-info panel-heading clearfix">
            <div class="panel-heading pull-left">{{ data.user.name }}
            </div>
            <div class="panel-heading pull-right">
                <div class="project-date">{{ data | sloFormat | capitalize }}</div>
               <transition name="fade">
                    <div v-show="isVisible">
                        <delete class="delete-button" :project="data" :index="index"></delete>
                        <button class="btn btn-default btn-sm" @click="toggleEdit">Uredi</button>
                    </div>
               </transition>
            </div>
        </div>
        <div class="panel-body">
            <p v-show="! doEdit">
                {{ data.body }}</p>
            <div v-if="doEdit">
                <edit-form :data="data" @updated="wasUpdated" @dontedit="toggleEdit"></edit-form>
            </div>
        </div>
    </div>

</template>

<script>

    import moment from 'moment';
    import Delete from '../components/Delete.vue';
    import EditForm from '../components/Edit.vue';

    export default {
        props: ['data', 'index'],

        components: { Delete, EditForm },

        data() {
            return {
                isVisible : false,
                doEdit: false
            }
        },

        filters: {
            sloFormat(project) {
                moment.locale('sl');
                return moment(project.created_at).fromNow();
            },

            capitalize(date) {
                return date.toUpperCase();
            }
        },

        methods: {
            wasUpdated(data){
                this.data.body = data.body;
                this.doEdit = false;
            },

            onHover() {
                this.isVisible = true;
            },
            onLeave() {
                this.isVisible = false;
            },

            toggleEdit(){
                this.doEdit = ! this.doEdit;
            }
        }
    }
</script>

<style>
    .project-info {
        height:100px;
    }

    .delete-button {
        display:inline-block;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
        opacity: 0
    }
</style>