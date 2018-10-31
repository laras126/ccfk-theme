import './inc/flickity.js';
import './inc/plugins.js';
import './inc/navigation.js';

(function() {

	document.addEventListener('DOMContentLoaded', function() {
		// Toggle Menu
		// @link http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button
		const $toggle = document.querySelector('*[rel=js-menu-toggle]'),
			  $menu = document.querySelector('*[rel=js-menu]'),
			  $dropdowns = document.querySelectorAll('*[rel=js-dropdown]');

		$toggle.addEventListener('click', function toggleMenu() {
			$menu.classList.toggle('is-open');
			$toggle.classList.toggle('is-open');
		});
		
		for (let i = 0; i < $dropdowns.length; i++) {
			const element = $dropdowns[i];
			element.addEventListener( 'click', function toggleDropdown(e) {
				e.preventDefault();
				element.classList.toggle('is-open');
			})
		}
		
		// ESC key closes the menu
		document.addEventListener('keyup', function(e) {
			if(e.keyCode === 27 && $menu.classList.contains('is-open')) {
				toggleMenu();
				$toggle.focus();
			}
		});

		fluidvids.init({
			selector: ['iframe', 'object'], // runs querySelectorAll()
			players: ['www.youtube.com', 'player.vimeo.com'] // players to support
		});

	});

})();