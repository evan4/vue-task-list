<template>
    <div class="container">
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
            <h1 class="mb-2 mr-md-auto font-weight-normal text-center">Lists of tasks</h1>
            <div class="btn-group">
                <button type="button" v-for="(state, index) in states" 
                    :key="index"
                    @click="changeSelectVal(state)" 
                    :class="['btn', { 'btn-primary': selected === state, 'btn-default': selected !== state }]">{{ state }}</button>
            </div>
            <div v-if="tasks.length"
                class="table-responsive">
                
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
                                {{ activity(task.status, task.date) }}
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
import Form from '../helpers/form.js';

export default {
    data(){
        return {
            states: ['All tasks', 'active', 'inactive', 'expired'],
            selected: 'All tasks',
            initialTasks: null
        }
    },
    computed: {
        tasks() {
            if(this.selected !== 'All tasks'){
                let arr = this.initialTasks.filter(item => item.status === this.selected);
                return arr;
            }
            return this.initialTasks
        }
    },
    methods: {
        changeSelectVal(val) {
            this.selected = val;
        },
         activity(val, date){
            let str = '';
            val = Form.checkDate(date) ? val : 'expired';

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
    created() {
        this.initialTasks = this.$store.getters.tasks;
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
