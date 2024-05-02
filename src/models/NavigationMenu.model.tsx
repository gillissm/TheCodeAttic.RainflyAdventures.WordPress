import { gql } from '@apollo/client';

export interface NavigationMenuModel {
	id: string;
	path: string;
	label: string;
	parentId: string;
	cssClasses: string;
	name: string;
	children: NavigationMenuModel[];
}

export const NavigationMenuQuery = {
	key: 'NavigationMenuItemFragment',
	fragment: gql`
		fragment NavigationMenuItemFragment on MenuItem {
			id
			path
			label
			parentId
			cssClasses
			menu {
				node {
					name
				}
			}
		}
	`,
};
