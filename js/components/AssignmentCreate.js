export default {
    template: `
        <form @submit.prevent="add">
            <div class="text-black flex">
                <input v-model="newAssignment" placeholder="New Task" class="p-2 rounded-l" required/>
                <button class="bg-white p-2 border-l rounded-r" type="submit">Add</button>
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