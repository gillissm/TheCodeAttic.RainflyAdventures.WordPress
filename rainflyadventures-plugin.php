<?php
/**
 * Plugin Name:       Rainfly-Adventures
 * Description:       Sample Setup for single codebase for WordPress Plugin and Rendering Code
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Scott
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       Rainfly Adventures
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
/**
 * Activate the plugin.
 */
function rainflyadventures_plugin_activate()
{
	// Clear the permalinks after the post type has been registered.
	flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'rainflyadventures_plugin_activate');


// // Create New Custom Post Types
// add_action('init', 'create_trail_post_type');

// function create_trail_post_type()
// {

// 	$trailLabels = array(
// 		'name' => 'trail',
// 		'singular_name' => 'trail',
// 		'add_new' => 'Add New trail',
// 		'add_new_item' => 'Add New trail',
// 		'edit_item' => 'Edit trail',
// 		'new_item' => 'New trail',
// 		'all_items' => 'All trail',
// 		'view_item' => 'View trail',
// 		'search_items' => 'Search trail',
// 		'not_found' => 'No trail Found',
// 		'not_found_in_trash' => 'No trail found in Trash',
// 		'parent_item_colon' => '',
// 		'menu_name' => 'trails'
// 	);

// 	register_post_type(
// 		'trail',
// 		array(
// 			'labels' => $trailLabels,
// 			'has_archive' => true,
// 			'public' => true,
// 			'supports' => array('title', 'editor', 'page-attributes'),
// 			'exclude_from_search' => false,
// 			'show_in_rest' => true,
// 			'show_in_graphql' => true,
// 			'show_in_menu' => true,
// 			"show_ui" => true,
// 			"show_in_nav_menus" => true,
// 			'graphql_single_name' => 'trail',
// 			'graphql_plural_name' => 'trails',
// 			'capability_type' => 'post',
// 			'menu_icon' => 'dashicons-chart-line',
// 			'rewrite' => array('slug' => 'trails')
// 		)
// 	);
// }


// add_action( 'init', 'register_trailsign_block' );
// function register_trailsign_block() {
// 	register_block_type( __DIR__ . '/blocks/trail-sign' );
// 	register_block_type( __DIR__ . '/blocks/campsite' );
// 	register_block_type( __DIR__ . '/blocks/mylist' );
// 	register_block_type( __DIR__ . '/blocks/cta' );
// }


// function trailhead_allowed_blocks($allowed_block_types, $editor_context)
// {
// 	// if ( 'sponsors' === $editor_context->post->post_type ) {
// 	// 	return array(
// 	// 		'core/paragraph',
// 	// 	);
// 	// }

// 	// if ( 'news' === $editor_context->post->post_type ) {
// 	// 	return array(
// 	// 		'core/paragraph',
// 	// 		'core/list',
// 	// 		'core/image',
// 	// 		'core/buttons',
// 	// 		'core/quote',
// 	// 	);
// 	// }

// 	// if( 'trail' === $editor_context->post->post_type ) {
// 	// 	return array(
// 	// 		'core/paragraph',
// 	// 		'core/image',
// 	// 		'trailhead/trail-sign',
// 	// 		'core/'
// 	// 	);
// 	// }

// 	return array(
// 		'trailhead/campsite',
// 		'trailhead/mylist',
// 		'trailhead/cta',
// 		'trailhead/trail-sign'
// 	);
// }
// add_filter( 'allowed_block_types_all', 'trailhead_allowed_blocks', 10, 2 );