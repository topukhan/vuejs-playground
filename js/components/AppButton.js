export default {
    template: `
        <button class="bg-blue-400 hover:bg-blue-600 mx-2 px-4 py-2 rounded text-white cursor-not-allowed" :disabled="processing">
            <slot/>
        </button>
    `,
    data() {
        return {
            processing: true,
        };
    },
};
