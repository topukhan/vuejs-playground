import Assignment from "./Assignment.js";
export default {
    components: { Assignment },
    template: `
    <section v-show="assignments.length">
        <h2 class="text-2xl font-bold">
            {{ title }}
            <span>({{ assignments.length }})</span>
        </h2>

        <br />

        <div class="flex gap-2">
            <button 
                @click="currentTag = tag"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class = "{
                    'border-blue-500 text-blue-500': tag ===currentTag
                }"
                > {{ tag }} </button>
        </div>


        <ul class="border border-gray-600 divide-y divide-gray-600 rounded mt-6">
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            >
            
            </assignment>
        </ul>
    </section>

    `,
    props: {
        assignments: Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments(){
            if (this.currentTag === 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.currentTag)
        },

        tags() {
            // unique tags only
            // ... is the spread syntax, and in this context, it is used to spread the elements of the Set returned by 👇👇
            return ['all', ...new Set(this.assignments.map(a => a.tag))]
        }
    }
};
