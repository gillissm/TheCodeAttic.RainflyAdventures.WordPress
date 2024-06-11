```php

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
```