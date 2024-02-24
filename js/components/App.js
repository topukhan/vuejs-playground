import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {Assignments, Panel},
    template: `
        <div class="grid gap-6">
            <assignments></assignments>

            <panel>

                Body content
            </panel>

            <panel>
                <template v-slot:title >
                    Hello
                </template>

                Body content
            </panel>

            <panel>
                <template v-slot:title >
                    Hello
                </template>

                Body content

                <template v-slot:footer >
                    this is footer
                </template>
            </panel>

            <panel theme="light">
                <template v-slot:title >
                    Hello
                </template>

                Body content

                <template v-slot:footer >
                    this is footer
                </template>
            </panel>
        </div>
    `,
    
};
