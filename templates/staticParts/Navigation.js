import NavBarHamburger from './../../components/hamburger/script.js'

export default {
	components: {
		NavBarHamburger
	},
	template: `
		<header style="position: relative; height: 55px;">  
            <div class="nav-bar nav-bar-style">
                <div class="nav-bar-container">
                    <span :class="{ 'highlighted': isScrolled }">{{ menuWord }}</span>
                </div>
				<nav-bar-hamburger v-bind="$attrs" @click="toggleMenu"></nav-bar-hamburger>
                <side-menu></side-menu>
            </div>  
        </header>
	`
}