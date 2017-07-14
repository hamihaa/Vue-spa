<template>
    <div class="">
        <transition name="fade">
            <div v-show="isVisible" @click="isVisible = ! isVisible" :class="alertClasses">
                <strong>{{ alert }}</strong> {{ msg }}
            </div>
        </transition>
    </div>
</template>


<script>
    export default {
        data () {
            return {
                isVisible : false,
                msg: '',
                isSuccess : false
            }
        },

        computed: {
            alert: function() {
              return this.isSuccess? 'Success!' : 'Warning!';
            },

            alertClasses: function() {
                return {
                    'alert': true,
                    'alert-success' : this.isSuccess,
                    'alert-danger' : !this.isSuccess
                };
            }
        },

        created() {
            bus.$on('newEvent', (data) => this.showAlert(data));
        },

        methods: {
            showAlert :function(data){
                this.isVisible = true;
                this.msg = data.msg;
                this.isSuccess = data.isSuccess;
            }
        }
    }
</script>

<style>

</style>