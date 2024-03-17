import Assignments from "./Assignments.js";
import Panel from "./Panel.js";
export default {
    components: {Assignments, Panel},
    template: `
        <div class="grid gap-6">
            <assignments></assignments>

            <panel>

                Execute comprehensive testing procedures to identify and address any functional or usability issues. Ensure the application meets quality standards before deployment.

            </panel>

            <panel>
                <template v-slot:title >
                    Meeting with Client
                </template>

                Discuss project requirements and timelines with the client. Address any concerns or questions they may have regarding the project scope.
            </panel>

            <panel>
                <template v-slot:title >
                    Code Review
                </template>

                    Review and provide feedback on recent code updates. Identify any bugs or areas for optimization to ensure code quality and performance.

                <template v-slot:footer >
                    Scheduled for: May 20, 2024
                </template>
            </panel>

            <panel theme="light">
                <template v-slot:title >
                    UI Design Refinement (Light BG)
                </template>

                    Refine UI elements based on feedback from the design team. Make adjustments to improve user experience and visual appeal.

                <template v-slot:footer >
                    Due by: May 22, 2024
                </template>
            </panel>
        </div>
    `,
    
};
