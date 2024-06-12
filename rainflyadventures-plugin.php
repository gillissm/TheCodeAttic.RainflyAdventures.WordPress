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



// add_action hook that ties the register logic to the init process of WordPress
add_action( 'init', 'register_custom_blocks' );

// custom method which will defines in this case the blocks to be registered
function register_custom_blocks() {

  //register action, the second parameter is the path to the block files as packaged by the plugin.
  // the base project struture provided always packages into 'blocks' as the parent directory
	register_block_type( __DIR__ . '/blocks/samplecta');
	register_block_type( __DIR__ . '/blocks/ctawithprops' );
	register_block_type( __DIR__ . '/blocks/herocta' );
	register_block_type( __DIR__ . '/blocks/innerblockexp' );
	register_block_type( __DIR__ . '/blocks/promocard' );
}
