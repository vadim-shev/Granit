export default {
	props: {},
	template: `
		<button 
			class="hamburger int-hamburger " 
			:class="computedClasses" 
			@click="toggleClass"
		>
			<span class="hamburger-container">
				<span class="hamburger-top"></span>
				<span class="hamburger-middle"></span>
				<span class="hamburger-bottom"></span>
			</span>
		</button>
	`,
	data() {
		return {
			isActive: false
		}
	},
	computed: {
		computedClasses() {
			return {
				'is-active': this.isActive
			}
		}
	},
	methods: {
		toggleClass() {
			this.isActive = !this.isActive
		}
        
	}
}