/* eslint-disable @next/next/no-img-element */
import { __ } from '@wordpress/i18n';
import {InnerBlocks, useBlockProps, RichText, URLInputButton , MediaPlaceholder, MediaUploadCheck, PlainText, InspectorControls, URLInput} from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import CTA from './innerblockexp';
import { BlockEditProps } from 'wordpress__blocks/index';
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';

export interface IInnerBlockExpModel extends Record<string, any> {	
		headline: string,
		actionLink: string,
		ctaHero: string | null,
		actionLabel: string
}




//Version 6 - Sidebar Editing via Inspector Controls
export function Edit(props: BlockEditProps<IInnerBlockExpModel>) {
	return (
		<>
			<InspectorControls>
				<PanelBody title='Action Link and Label' initialOpen={true}>
					<fieldset>
						<div>
							<URLInputButton
								url={props.attributes.actionLink}
								onChange={(url, post) => props.setAttributes({ actionLink: url, actionLabel: (post && post.title)||props.attributes.actionLabel })} />
							<span style={{ marginRight: '5px' }}>{props.attributes.actionLink}</span>							
						</div>
						<TextControl label='Provide Action Label'
							value={props.attributes.actionLabel}
							onChange={(lbl)=> props.setAttributes({actionLabel:lbl})}/>
					</fieldset>
				</PanelBody>
			</InspectorControls>
		
			<div {...useBlockProps()}>
				<p>{__('CTA With Props – hello from the editor!', 'CTAWithProps')}</p>
				<a href={props.attributes.actionLink}
					style={{ border: '2px solid green', padding: '10px', borderRadius: '15px'}}>{props.attributes.actionLabel}</a>
				
				<br />						
				<RichText
					identifier="headline"
					tagName="p"
					onChange={(el) => props.setAttributes({ headline: el })}
					allowedFormats={['core/bold', 'core/italic']}
					value={props.attributes.headline}
					placeholder={'Write the headline...'}
				/>
				<br />
				
				<MediaUploadCheck>
					<MediaPlaceholder								
						onSelect={(el) => props.setAttributes({ ctaHero: el.url, ctaHeroAlt: el.alt })}
						allowedTypes={['image']}
						multiple={false}
						labels={{ title: 'Action Image', 'instructions': 'Select or Upload an image to use in the CTA' }}>
							<img src={props.attributes.ctaHero} style={{width:'25%'}} alt='thumbnail of selected image' />
					</MediaPlaceholder>
				</MediaUploadCheck>
				<br />
				<InnerBlocks allowedBlocks={[ 'core/image', 'core/paragraph' ]}/>
			</div>
		</>		
	);
}


