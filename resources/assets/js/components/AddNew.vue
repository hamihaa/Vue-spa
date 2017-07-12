<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading clearfix">
                Dodaj nov vnos...
            </div>

            <div class="panel-body">
                <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                    <div class="form-group">
                        <textarea placeholder="vsebina projekta..." class="form-control" id="input" v-model="form.body"></textarea>
                        <span class="error-msg" v-if="form.errors.has('body')" v-text="form.errors.get('body')"></span>
                    </div>
                    <!-- Button Form Input  -->
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary pull-right" :disabled="form.errors.any()" required>Dodaj</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data() {
            return {
                form: new Form({body: ''})
            }
        },

        methods: {
            onSubmit(){
                //submit ajax request
                this.form
                        .post('/projects')
                        .then(status => this.$emit('completed', status));
            }
        }
    }
</script>