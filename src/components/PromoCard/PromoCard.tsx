import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';
import styles from './PromoCard.module.scss';

import { IPromoCardModel, ImageAttributeModel } from '../../models/PromoCard.model';
import { PromoCardQuery} from '../../models/index.query'

function PromoCard(promoModel: BlockWithAttributes) {

  // convert the generic attribute list to the typesafe object
  let att = { ...promoModel.attributes } as IPromoCardModel;
  att.bigImage = JSON.parse(att.bigImage) as ImageAttributeModel
  console.log(att.bigImage);

  // build the component
  const backgroundImageValue = `url(${att.ctaHero})`;
  return (
    <>
    <div className={styles.herowrapper} style={{ backgroundImage: backgroundImageValue }}>
      <h1 className={styles.headlineOverlay}>
        {att?.headline}
      </h1>
      <a className={styles.actionButton} href={att?.actionLink}>{att?.actionLabel}</a>
    </div>
      <div>
        <img src={att.bigImage.url}/>
        <ul>
						<li>{att.bigImage.height}</li>
						<li>{att.bigImage.width}</li>
						<li>{att.bigImage.name}</li>
						<li>{att.bigImage.id}</li>
						<li>{att.bigImage.url}</li>
					</ul>
    </div>
    </>
  );
}

PromoCard.displayName = PromoCardQuery.typeName;

export default PromoCard; 