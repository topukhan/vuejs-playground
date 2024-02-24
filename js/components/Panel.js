export default {
    template: `
        <div :class="{
            'border rounded-lg p-4': true,
            'bg-white border-gray-300 text-black' : theme == 'light',
            'bg-gray-700 border-gray-500 text-white' : theme == 'dark',
            
            }">
            <h2 v-if="$slots.title" class="font-bold mb-2"> 
                <slot name="title"/>
            </h2>

            <slot/>

            <footer v-if="$slots.footer" class="text-sm border-t mt-4 pt-2 border-gray-300 ">
                <slot name="footer" />
            </footer>
        </div>
    `,
    props: {
        theme: { type: String, default: 'dark'},
    }
}