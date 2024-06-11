// import of the register method from the WordPress blocks API package
import { registerBlockType } from '@wordpress/blocks';

// import the edit component from the corresponding Edit.tsx file
import Edit from './edit';

// import the block.json meta data for the block
import metadata from './block.json';

// registration of the block is done by sending the block name as defined in the block.json and assigning the edit component to the edit property
// if we wanted to save rendered HTML we could also assign a component to the save property (this is useful for traditional WordPress sites)
registerBlockType( metadata.name, {
	edit: Edit,
} );