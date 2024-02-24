import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },
    template: `
    <h1 class="text-3xl font-bold mb-10">Vue JS Task Tracker</h1>
        <section class="space-x-6 flex">
            <assignment-list v-bind:assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed" 
                    can-toggle 
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>
            
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true,
        };
    },

    computed: {
        // inProgress() {
        //     return this.assignments.filter((assignment) => !assignment.complete);
        // },
        filters() {
            return {
                inProgress: this.assignments.filter((assignment) => !assignment.complete),
                completed: this.assignments.filter((assignment) => assignment.complete),
            }
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(data => {
                this.assignments = data;
            })
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false, 
                id: this.assignments.length + 1
            })
        }
    }
};
