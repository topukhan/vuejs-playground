export default {
    template: `
        <button 
        :class="{
            'mx-2 px-4 py-2 rounded text-white': true,
            'bg-gray-400': type === 'muted',
            'bg-blue-600': type === 'primary',
            'bg-pink-600': type === 'secondary',
            'is-loading': processing,
        }" 
        :disabled="processing">
            <slot/>
        </button>
    `,
    props: {
        type: {
            type: String,
            default: "primary",
        },
        processing: {
            type: Boolean,
            default: false,
        },
    },
};
