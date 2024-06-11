//import the corresponding module styles for use
import { BlockWithAttributes } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';
import styles from './ctawithprops.module.scss';
import { CTAProps } from './edit';

    //function based component definition
function CTAWithProps(ctaModel: BlockWithAttributes) {     
  let att = ctaModel.attributes as CTAProps;
      return (
        <>
          <div className={styles.ctawrapper}>
            <h3>CTA With Props - Rendering Code</h3>
            <ul>
              <li>{att?.actionLink}</li>
              <li>{att?.headline}</li>
              <li>{att?.ctaHero}</li>
            </ul>
          </div>
        </>
      );
    }

    CTAWithProps.displayName='RainflyadventuresCtawithprops'

    //export of component for usage/access
    export default CTAWithProps; 