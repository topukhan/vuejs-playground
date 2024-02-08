import Assignment from "./Assignment.js";
export default {
    components: { Assignment },
    template: `
    <section v-show="assignments.length">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <br />

        <ul>
            <assignment
                v-for="assignment in assignments"
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
};
