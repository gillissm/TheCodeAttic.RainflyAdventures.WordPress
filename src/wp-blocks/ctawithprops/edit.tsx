/* eslint-disable @next/next/no-img-element */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, URLInputButton , MediaPlaceholder, MediaUploadCheck, PlainText, InspectorControls, URLInput} from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import CTA from './ctawithprops';
import { BlockEditProps } from 'wordpress__blocks/index';
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';

export interface CTAProps extends Record<string, any> {	
		headline: string,
		actionLink: string,
		ctaHero: string | null,
		actionLabel: string
}


// Verision 1 - simple display of the attribute's default content
// export function Edit(props: BlockEditProps<CTAProps>) {
// 	return (
// 		<div {...useBlockProps()}>
// 				<p>
// 					{__('CTA With Props – hello from the editor!', 'CTAWithProps')}
// 					<br />
// 					{props.attributes.actionLink}
// 					<br />
// 					{props.attributes.headline}
// 					<br />
// 					{props.attributes.ctaHero}
// 					<br/>
// 				</p>
// 		</div>
// 	);
// }

// Verision 2 - attribute editing within the Canvas
// export function Edit(props: BlockEditProps<CTAProps>) {
// 	return (
// 		<div {...useBlockProps()}>
// 				<p>
// 					{__('CTA With Props – hello from the editor!', 'CTAWithProps')}
// 					<br />
// 					{props.attributes.actionLink}
// 					<br />
// 					<RichText
//             // optional, but strongly encouraged to use
//             //   block attribute that content is to be bount to
//             //   if set you do not have to  map the attribute on the setAttributes method
//             identifier="headline"

//             // optional, defines the wrapping HTML-tag for the content...default is DIV
// 						tagName="p"
						
//             // required, leveraging the onChange event to allow for saving the data as edited
//             //  this takes advantage of the 'setAttributes' method provided in the props as part of 'BlockEditProps' type
//             //  the parameter of setAttributes is always an object of the attribute name assiged the value
//             onChange={ (el) => props.setAttributes({ el }) }
            
//             // optional, ability to define the formats/actions allowed in the rich text control
// 						allowedFormats={ [ 'core/bold', 'core/italic' ] }

//             // required, assign the attribute value which has been stored
// 						value={ props.attributes.headline }

//             // optional, assign placeholder text for when the attribute contains nothing
// 						placeholder={ 'Write the headline...' }
// 						/>
// 					<br />
// 					{props.attributes.ctaHero}
// 					<br/>
// 				</p>
// 		</div>
// 	);
// }


// Verision 3 - Basic Link Editing
// export function Edit(props: BlockEditProps<CTAProps>) {
// 	return (
// 		<div {...useBlockProps()}>
// 			<p>{__('CTA With Props – hello from the editor!', 'CTAWithProps')}</p>

// 			<div style={{display: 'inline-flex'}}>
// 				<span style={{'margin-right': '5px'}}>{props.attributes.actionLink}</span>
// 				<URLInputButton
// 					url={props.attributes.actionLink}
// 					onChange={(url) => props.setAttributes({ actionLink: url })} />
// 			</div>
// 			<br />

// 			<URLInput
// 				value={props.attributes.actionLink}
// 				onChange={(url) => props.setAttributes({ actionLink: url })} />
// 			<br />
			
// 			<RichText
// 				identifier="headline"
// 				tagName="p"
// 				onChange={(el) => props.setAttributes({ headline: el })}
// 				allowedFormats={['core/bold', 'core/italic']}
// 				value={props.attributes.headline}
// 				placeholder={'Write the headline...'}
// 			/>
// 			<br />
			
// 			{props.attributes.ctaHero}
// 			<br />
// 		</div>
// 	);
// }

//Version 4 - Link Editing with Action Label Assignment
// export function Edit(props: BlockEditProps<CTAProps>) {
// 	return (
// 		<div {...useBlockProps()}>
// 			<p>{__('CTA With Props – hello from the editor!', 'CTAWithProps')}</p>

// 			<div style={{display: 'inline-flex'}}>
// 				<span style={{'margin-right': '5px'}}>{props.attributes.actionLink}</span>
// 				<URLInputButton
// 					url={props.attributes.actionLink}
// 					onChange={(url, post) => props.setAttributes({ actionLink: url, actionLabel: (post && post.title)||props.attributes.actionLabel })} />
// 			</div>
// 			<br />
// 			<PlainText 
// 				value={props.attributes.actionLabel}
// 				onChange={(lbl)=> props.setAttributes({actionLabel:lbl})}/>
			
// 			<RichText
// 				identifier="headline"
// 				tagName="p"
// 				onChange={(el) => props.setAttributes({ headline: el })}
// 				allowedFormats={['core/bold', 'core/italic']}
// 				value={props.attributes.headline}
// 				placeholder={'Write the headline...'}
// 			/>
// 			<br />
			
// 			{props.attributes.ctaHero}
// 			<br />
// 		</div>
// 	);
// }

// //Version 5 - Image Editing
// export function Edit(props: BlockEditProps<CTAProps>) {
// 	return (
// 		<div {...useBlockProps()}>
// 			<p>{__('CTA With Props – hello from the editor!', 'CTAWithProps')}</p>

// 			<div style={{display: 'inline-flex'}}>
// 				<span style={{'margin-right': '5px'}}>{props.attributes.actionLink}</span>
// 				<URLInputButton
// 					url={props.attributes.actionLink}
// 					onChange={(url, post) => props.setAttributes({ actionLink: url, actionLabel: (post && post.title)||props.attributes.actionLabel })} />
// 			</div>
// 			<br />
// 			<PlainText 
// 				value={props.attributes.actionLabel}
// 				onChange={(lbl)=> props.setAttributes({actionLabel:lbl})}/>
			
// 			<RichText
// 				identifier="headline"
// 				tagName="p"
// 				onChange={(el) => props.setAttributes({ headline: el })}
// 				allowedFormats={['core/bold', 'core/italic']}
// 				value={props.attributes.headline}
// 				placeholder={'Write the headline...'}
// 			/>
// 			<br />
			
// 			<MediaUploadCheck>
// 				<MediaPlaceholder								
// 					onSelect={(el) => props.setAttributes({ ctaHero: el.url, ctaHeroAlt: el.alt })}
// 					allowedTypes={['image']}
// 					multiple={false}
// 					labels={{ title: 'Action Image', 'instructions': 'Select or Upload an image to use in the CTA' }}>
// 						<img src={props.attributes.ctaHero} style={{width:'25%'}} alt='thumbnail of selected image' />
// 				</MediaPlaceholder>
// 			</MediaUploadCheck>
// 			<br />
// 		</div>
// 	);
// }


//Version 6 - Sidebar Editing via Inspector Controls
export function Edit(props: BlockEditProps<CTAProps>) {
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
			</div>
		</>		
	);
}




// export function Edit(props: BlockEditProps<CTAProps>) {
// 	let cta: BlockWithAttributes = { attributes: props.attributes };
// 	return (
// 		<div {...useBlockProps()}>
// 			{props.isSelected ?				
// 				<p>
// 					{__('CTA With Props – hello from the editor!', 'samplecta')}
// 					<br />
// 					{props.attributes.actionLink}
// 					<br />
// 					{props.attributes.headline}
// 					<br />
// 					{props.attributes.ctaHero}
// 					<br/>
// 				</p>
// 				: <CTA {...cta}></CTA>
// 			}
// 		</div>
// 	);
// }
