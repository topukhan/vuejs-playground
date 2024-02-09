export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black ">
                <input v-model="newAssignment" placeholder="New assignment" class="p-2 rounded" required/>
                <button class="bg-white p-2 border-l rounded ml-1" type="submit">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: [],
        }
    },
    props: {
        assignments: Array,
    },
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.Assignments.length + 1
            });
            this.newAssignment = '';
        },
    },
}