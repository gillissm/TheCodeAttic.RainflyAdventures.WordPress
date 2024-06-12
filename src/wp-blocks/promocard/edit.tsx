/* eslint-disable @next/next/no-img-element */
import { useBlockProps, RichText, URLInputButton , MediaPlaceholder, MediaUploadCheck, InspectorControls} from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, } from '@wordpress/components';
import { BlockEditProps } from 'wordpress__blocks/index';
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';
import { IPromoCardModel } from '../../models/index.model';
import { PromoCard } from '../../components';


//Version 1 - testing for big image object attribute
export function Edit(props: BlockEditProps<IPromoCardModel>) {
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
				<PanelBody title='Big Image Test'>
					<PanelRow>
						<fieldset>
						<MediaUploadCheck>
						<MediaPlaceholder
							onSelect={(el) => props.setAttributes({ bigImage: {alt:el.alt, height:el.height, width:el.width, name: el.name, url: el.url, id:el.id} })}
							allowedTypes={['image']}
							multiple={false}
							labels={{ title: 'Action Image', 'instructions': 'Select or Upload an image to use in the CTA' }}>
								
						</MediaPlaceholder>
					</MediaUploadCheck>
						</fieldset>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		
			<div {...useBlockProps()}>
				{props.isSelected ? <div style={{border:'1px dotted purple'}}>
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
					<br />
					<img src={props.attributes?.bigImage?.url} style={{ width: '25%' }} alt='thumbnail of selected image' />
					<ul>
						<li>{props.attributes.bigImage.height}</li>
						<li>{props.attributes.bigImage.width}</li>
						<li>{props.attributes.bigImage.name}</li>
						<li>{props.attributes.bigImage.id}</li>
						<li>{props.attributes.bigImage.url}</li>
					</ul>

					<br />

				</div> : <PromoCard {...props as BlockWithAttributes}></PromoCard>}
			</div>
		</>		
	);
}

