import { useQuery, gql } from '@apollo/client';
import { PRIMARY_LOCATION, FOOTER_LOCATION } from '../models/constants';
import { NavigationMenu } from '../components';
import { NavigationMenuQuery } from '@/models/NavigationMenu.model';
import { GeneralSettingsQuery } from '@/models/GeneralSettings.model';

export default function Component() {
	const { data } = useQuery( Component.query, {
		variables: Component.variables(),
	} );

	const { title: siteTitle, description: siteDescription } =
		data?.generalSettings;
	const primaryMenu = data?.headerMenuItems?.nodes ?? [];
	const footerMenu = data?.footerMenuItems?.nodes ?? [];

	return (
		<>
			<NavigationMenu className="" menuItems={ primaryMenu } />
			<h1>Hello world</h1>
		</>
	);
}

Component.query = gql`
  ${ NavigationMenuQuery.fragment }
  ${ GeneralSettingsQuery.fragment }
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
  ) {
    generalSettings {
      ...${ GeneralSettingsQuery.key }
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...${ NavigationMenuQuery.key }
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...${ NavigationMenuQuery.key }
      }
    }
  }
`;

Component.variables = () => {
	return {
		headerLocation: PRIMARY_LOCATION,
		footerLocation: FOOTER_LOCATION,
	};
};
