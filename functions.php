<?php

if ( ! class_exists( 'Timber' ) ) {
	add_action( 'admin_notices', function() {
		echo '<div class="error"><p>Timber not activated. Make sure you activate the plugin in <a href="' . esc_url( admin_url( 'plugins.php#timber' ) ) . '">' . esc_url( admin_url( 'plugins.php') ) . '</a></p></div>';
	});

	add_filter('template_include', function($template) {
		return get_stylesheet_directory() . '/static/no-timber.html';
	});

	return;
}

Timber::$dirname = array('templates', 'views');

class StarterSite extends TimberSite {

	function __construct() {
		add_theme_support( 'post-formats' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'align-wide' );
		add_theme_support( 'menus' );
		add_post_type_support( 'page', 'excerpt' );
		add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' ) );
		add_filter( 'timber_context', array( $this, 'add_to_context' ) );
		add_filter( 'get_twig', array( $this, 'add_to_twig' ) );
		add_action( 'init', array( $this, 'register_post_types' ) );
		add_action( 'init', array( $this, 'register_taxonomies' ) );
		parent::__construct();
	}

	function register_post_types() {
		//this is where you can register custom post types
	}

	function register_taxonomies() {
		//this is where you can register custom taxonomies
	}

	function add_to_context( $context ) {
		$context['menu'] = new TimberMenu('Main Menu');
		$context['footer_links'] = new TimberMenu('Footer Links');
		$context['sidebar'] = Timber::get_widgets('main_sidebar');
		$context['site'] = $this;
		return $context;
	}

	function myfoo( $text ) {
		$text .= ' bar!';
		return $text;
	}

	function add_to_twig( $twig ) {
		/* this is where you can add your own functions to twig */
		$twig->addExtension( new Twig_Extension_StringLoader() );
		$twig->addFilter('myfoo', new Twig_SimpleFilter('myfoo', array($this, 'myfoo')));
		return $twig;
	}

}

new StarterSite();


function ccfk_scripts() {
	wp_enqueue_style( 'ccfk-style', get_template_directory_uri() . '/assets/css/main.css' );
	wp_enqueue_script( 'ccfk-scripts', get_template_directory_uri() . '/assets/js/build/scripts.js' );

	if ( is_page_template( 'page-template-longform.php' )) {
		wp_enqueue_script( 'ccfk-longform-scripts', get_template_directory_uri() . '/assets/js/build/longform.js' );
	}
}
add_action( 'wp_enqueue_scripts', 'ccfk_scripts' );


function ccfk_widgets_init() {
	register_sidebar( array(
			'name'          => __( 'Main Sidebar', 'textdomain' ),
			'id'            => 'main_sidebar',
			'description'   => __( 'Widgets in this area will be shown on all posts and pages.', 'textdomain' ),
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget'  => '</li>',
			'before_title'  => '<h3 class="widget__title">',
			'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'ccfk_widgets_init' );