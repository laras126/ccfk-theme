import siteNavigation from './inc/navigation.js';

( function() {

	document.addEventListener( 'DOMContentLoaded', function() {

		siteNavigation();

		// Toggle Menu
		// @link http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button

		const $toggle = document.querySelector( '[data-site-nav-toggle]' ),
			$menu = document.querySelector( '[data-site-nav] .menu' ),
			$dropdowns = document.querySelectorAll( '[data-site-nav] .menu-item-has-children' );

		let isMenuOpen = false;

		$toggle.addEventListener( 'click', () => {
			toggleMenu();
		});

		function toggleMenu() {
			isMenuOpen = ( ! isMenuOpen ) ? true : false;

			$menu.classList.toggle( 'is-open' );
			$toggle.classList.toggle( 'is-open' );

			if ( isMenuOpen ) {
				$toggle.innerHTML = 'Close';
			} else {
				$toggle.innerHTML = 'Menu';
			}
		}

		// ESC key closes the menu
		document.addEventListener( 'keyup', function( e ) {
			if ( 27 === e.keyCode && $menu.classList.contains( 'is-open' ) ) {
				toggleMenu();
				$toggle.focus();
			}
		});

	});

}() );
