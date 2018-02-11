
(function() {

	document.addEventListener('DOMContentLoaded', function() {
		// Toggle Menu
		// @link http://www.a11ymatters.com/pattern/mobile-nav/#use-a-semantic-element-for-the-toggle-button
		const $toggle = document.querySelector('*[rel=js-menu-toggle]'),
					$menu = document.querySelector('*[rel=js-menu]');

		$toggle.addEventListener('click', toggleMenu);

		document.addEventListener('keyup', function(e) {
			if(e.keyCode === 27 && $menu.classList.contains('js-open')) {
				toggleMenu();
				$toggle.focus();
			}
		})

		function toggleMenu() {
			$menu.classList.toggle('js-open');
			$toggle.classList.toggle('js-open');
		}

		fluidvids.init({
			selector: ['iframe', 'object'], // runs querySelectorAll()
			players: ['www.youtube.com', 'player.vimeo.com'] // players to support
		});

	});

})();