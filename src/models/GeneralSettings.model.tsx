import { gql } from '@apollo/client';

export interface GeneralSettingsModel {
	title: string;
	description: string;
}

export const GeneralSettingsQuery = {
	key: 'GeneralSettingsFragment',
	fragment: gql`
		fragment GeneralSettingsFragment on GeneralSettings {
			title
			description
		}
	`,
};
