<template>
    <div>
        <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
            <div class="form-group">
                <textarea placeholder="vsebina projekta..." class="form-control" id="input" v-model="form.body"></textarea>
                <span class="error-msg" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
            </div>
            <!-- Button Form Input  -->
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-sm" :disabled="form.errors.any()" required>Potrdi spremembe</button>
            </div>
        </form>
        <button class="btn btn-default btn-sm" @click="toggleEdit">Prekliči</button>
    </div>
</template>

<script>
    export default{
        props: ['data'],

        data() {
            return {
                form: new Form({id: this.data.id, body: this.data.body }),
                doEdit: false
            }
        },

        mounted(){
            this.form =  new Form({id: this.data.id, body: this.data.body});
        },

        methods: {
            onSubmit() {
                this.form
                        .patch('/projects/' + this.form.id)
                        .then((data) =>
                            this.$emit('updated', data))
                        .catch(response => bus.$emit('newEvent', {msg:'Update failed.', isSuccess: false}));
            },

            onLeave() {
                this.isVisible = false;
            },

            watch : {
                data: function() {
                    alert('hi');
                }
            },

            toggleEdit(){
                this.$emit('dontedit');
            }
        }

    }
</script>