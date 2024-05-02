import { NavigationMenuModel } from '@/models/NavigationMenu.model';
import { flatListToHierarchical } from '@faustwp/core';
import classNames from 'classnames/bind';
import styles from './NavigationMenu.module.scss';
import Link from 'next/link';

let cx = classNames.bind( styles );

interface NavMenuProps {
	menuItems: NavigationMenuModel[];
	className: string;
}

export default function NavigationMeu( props: NavMenuProps ) {
	if ( ! props.menuItems ) {
		return null;
	}

	return (
		<nav
			className={ cx( [ 'component', props.className ] ) }
			role="navigation"
			// aria-label={ `${ props.menuItems[ 0 ]?.menu?.node?.name } menu` }
		>
			<ul className={ cx( 'menu' ) }>
				{ props.menuItems.map( ( item ) => {
					// const { id, path, label, children, cssClasses } = item;

					// @TODO - Remove guard clause after ghost menu items are no longer appended to array.
					if ( ! item.hasOwnProperty( '__typename' ) ) {
						return null;
					}

					return (
						<li key={ item.id } className={ item.cssClasses }>
							<Link href={ item.path ?? '' }>
								{ item.label ?? '' }
							</Link>
							{ /* {item.children.length ? renderMenu(children) : null} */ }
						</li>
					);
				} ) }
			</ul>
		</nav>
	);
}
