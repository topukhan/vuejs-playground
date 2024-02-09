export default {
    template: `
        <li>
            <label class="p-3 flex justify-between items center">
            {{ assignment.name }}
                <input class="ml-4"
                    type="checkbox"
                    v-model="assignment.complete"
                />
            </label>
        </li>
    `,
    props: {
        assignment: Object,
    },
};
