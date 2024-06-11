import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import SampleCTA from './samplecta';

export default function Edit() {
	return (
		<>
			<div { ...useBlockProps() }>
				<p>	
				{/* REMOVE TO APPLY useBlockProps to full component
				 <p { ...useBlockProps() }>*/}
					{ __( 'Sample CTA – hello from the editor!', 'samplecta' ) }
				</p>
				<SampleCTA></SampleCTA>
			</div>
		</>
	);
}
