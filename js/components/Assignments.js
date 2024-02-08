import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        AssignmentList,
    },
    template: `
        <section class="space-y-6">
            <assignment-list v-bind:assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [
                {
                    name: "3rd Party Api Integration",
                    complete: false,
                    id: 1,
                },
                { name: "PHP OOP", complete: false, id: 2 },
                { name: "Vue JS initial", complete: false, id: 3 },
                { name: "Blog site WP", complete: false, id: 4 },
            ],
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
};
