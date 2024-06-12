// BlockWithAttributes is the Faust.js type that is used to pass information about the block during rendering, and is how we will get access to the attributes for display
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';

// default Next.js behavior to access the related styles
import styles from './HeroCTA.module.scss';

// Import of the attribute interface and query variable based on BaseQuery
import HeroCTAQuery, { IHeroCTAModel } from '../../models/HeroCTA.model';

// function based component definition
// do NOT directly export as this causes problems with assignment of the required displayName used for auto mapping blocks
function HeroCTA(ctaModel: BlockWithAttributes) {

  // convert the generic attribute list to the typesafe object
  let att = { ...ctaModel.attributes } as IHeroCTAModel;

  // build the component
  const backgroundImageValue = `url(${att.ctaHero})`;
  return (
    <div className={styles.herowrapper} style={{ backgroundImage: backgroundImageValue }}>
      <h1 className={styles.headlineOverlay}>
        {att?.headline}
      </h1>
      <a className={styles.actionButton} href={att?.actionLink}>{att?.actionLabel}</a>
    </div>
  );
}

// extend the component definition with a displayname property that stores the block typenmae as defined in GraphQL schema
//  this is required to for automapping through Faust.js
HeroCTA.displayName = HeroCTAQuery.typeName;

//export of component for usage/access
export default HeroCTA; 