<template>
    <div>
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <!--popup -->
                        <search-details v-if="displayItem" @closedetails="hideItem" :data="item"></search-details>
                    <!-- /popup -->
                    <div  class="panel-heading">Live search from database</div>

                    <div class="panel-body">
                        <div class="form-group">
                            <input class="form-control" v-model="searchQuery"  placeholder="Search here..." @keydown="findMatches">
                        </div>
                        <div>
                            <h3 v-show="searchQuery">{{ myMatches.length }} Matches for string:"{{ searchQuery }}"</h3>
                            <h3 v-show="!searchQuery">All results, excluding the ones without letters: </h3>
                            <ul class="list-group">
                                <li class="list-project list-group-item" v-for="item in myMatches" @click="openModal(item)">
                                    {{ item.body }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import SearchDetails from '../components/Search/Details.vue';

    export default {
        components: { SearchDetails },

        data() {
            return {
                item: [],
                displayItem: false,
                searchQuery:'',
                possibleItems: [],
                findMatches: false
            }
        },


        created() {
            axios.get('/projects/'+ this.searchQuery)
                    .then((response) => this.possibleItems = response.data);
        },

        computed: {
            myMatches: function() {
                var matches = [];

                for(let index in this.possibleItems) {
                    var item = this.possibleItems[index];

                    if(item.body.indexOf(this.searchQuery) !== -1){
                          if(/[a-ž]/.test(item.body)){
                            matches.push(item);
                          }
                    }
                }
                return matches;
            }
        },

        methods: {
            openModal(item) {
                this.displayItem = true;
                this.item = item;
            },
            hideItem(item) {
                this.displayItem = false;
            }
        }
    }
</script>

<style lang="scss">
    .list-project {
        padding:20px;
        font-weight:700;

        &:hover {
            background-color: #F2F2F2;
            color:  #41B883;
         }
    }

</style>