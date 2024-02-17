export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black ">
                <input v-model="newAssignment" placeholder="New Task" class="p-2 rounded" required/>
                <button class="bg-white p-2 border-l rounded ml-1" type="submit">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            newAssignment: [],
        }
    },
    
    methods: {
        add() {
            this.$emit('add', this.newAssignment)
            this.newAssignment = '';
        },
    },
}