/* eslint-disable @next/next/no-img-element */
import { useBlockProps, RichText, URLInputButton , MediaPlaceholder, MediaUploadCheck, InspectorControls} from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { BlockEditProps } from 'wordpress__blocks/index';
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';
import { HeroCTA } from '../../components/HeroCTA';
import { IHeroCTAModel } from '../../models/HeroCTA.model'

//Version 1 - Standard Editing Experience with no reference to rendering component
export function Edit(props: BlockEditProps<IHeroCTAModel>) {
	return (
		<>
			<InspectorControls>
				<PanelBody title='Action Link and Label' initialOpen={true}>
					<PanelRow>
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
						</PanelRow>
				</PanelBody>
			</InspectorControls>
		
			<div {...useBlockProps()}>
				<div style={{border:'1px dotted purple'}}>
					<a href={props.attributes.actionLink}
						style={{ border: '2px solid green', padding: '10px', borderRadius: '15px' }}>{props.attributes.actionLabel}</a>				
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
								<img src={props.attributes.ctaHero} style={{ width: '25%' }} alt='thumbnail of selected image' />
						</MediaPlaceholder>
					</MediaUploadCheck>
				</div> 
			</div>
		</>		
	);
}
	
	

//Version 1 - Basic Inclusion of Rendering Conpmponent
// export function Edit(props: BlockEditProps<IHeroCTAModel>) {
// 	return (
// 		<>
// 			<InspectorControls>
// 				<PanelBody title='Action Link and Label' initialOpen={true}>
// 					<PanelRow>
// 						<fieldset>
// 							<div>
// 								<URLInputButton
// 									url={props.attributes.actionLink}
// 									onChange={(url, post) => props.setAttributes({ actionLink: url, actionLabel: (post && post.title)||props.attributes.actionLabel })} />
// 								<span style={{ marginRight: '5px' }}>{props.attributes.actionLink}</span>							
// 							</div>
// 							<TextControl label='Provide Action Label'
// 								value={props.attributes.actionLabel}
// 								onChange={(lbl)=> props.setAttributes({actionLabel:lbl})}/>
// 							</fieldset>
// 						</PanelRow>
// 				</PanelBody>
// 			</InspectorControls>
		
// 			<div {...useBlockProps()}>
// 				{props.isSelected ? <div style={{border:'1px dotted purple'}}>
// 					<a href={props.attributes.actionLink}
// 						style={{ border: '2px solid green', padding: '10px', borderRadius: '15px' }}>{props.attributes.actionLabel}</a>				
// 					<br />
// 					<RichText
// 						identifier="headline"
// 						tagName="p"
// 						onChange={(el) => props.setAttributes({ headline: el })}
// 						allowedFormats={['core/bold', 'core/italic']}
// 						value={props.attributes.headline}
// 						placeholder={'Write the headline...'}
// 					/>
// 					<br />				
// 					<MediaUploadCheck>
// 						<MediaPlaceholder
// 							onSelect={(el) => props.setAttributes({ ctaHero: el.url, ctaHeroAlt: el.alt })}
// 							allowedTypes={['image']}
// 							multiple={false}
// 							labels={{ title: 'Action Image', 'instructions': 'Select or Upload an image to use in the CTA' }}>
// 								<img src={props.attributes.ctaHero} style={{ width: '25%' }} alt='thumbnail of selected image' />
// 						</MediaPlaceholder>
// 					</MediaUploadCheck>
// 				</div> : <HeroCTA {...props as BlockWithAttributes}></HeroCTA>}
// 			</div>
// 		</>		
// 	);
// }

