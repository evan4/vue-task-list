<template>
    <div class="container">
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
            <h1 class="mb-2 mr-md-auto font-weight-normal text-center">Lists of tasks</h1>
         
            <div v-if="tasks.length"
                class="table-responsive">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" 
                            v-model="search"
                            placeholder="Enter email">
                    </div>
                </form>
                <table class="table">
                    <thead>
                        <th scope="col">Name</th>
                        <th scope="col">Tags</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th scope="col">Active</th>
                        <th scope="col">Edit</th>
                    </thead>
                    <tbody>
                        <tr v-for="task of tasks" :key="task.id">
                            <td>{{task.name}}</td>
                            <td>{{task.tags}}</td>
                            <td class="desc">
                                <div>{{task.desc}}</div>
                            </td>
                            <td>{{task.date}}</td>
                            <td :class=" task.status === 'active' ? 'text-primary' : 'text-muted'">
                                {{ activity(task.status) }}
                            </td>
                            <td>
                                <a :href="`/task/${task.id}`">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>    
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return {
           search: '',

        }
    },
    computed: {
        ...mapGetters(['tasks']),
       
    },
    methods: {
         activity(val){
            let str = '';
            switch (val) {
                case 'active':
                    str = 'В работе';
                    break;
                case 'inactive':
                    str = 'Завершено';
                    break;
                case 'expired':
                    str = 'Просрочено';
                    break;  
                default:
                    str = 'В работе';
                    break;
            }
            return str;
        }
    },
}
</script>

<style lang="stylus">
   .desc div
        width: 100px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
</style>
