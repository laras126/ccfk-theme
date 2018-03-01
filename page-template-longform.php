<?php

/**
 * Template name: Long Form
 */

$context = Timber::get_context();
$post = new TimberPost();
$context['post'] = $post;

Timber::render( array( 'page-long_form.twig' ), $context );