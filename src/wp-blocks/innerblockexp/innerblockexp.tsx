//import the corresponding module styles for use
import { BlockWithAttributes, WordPressBlocksViewer } from '@faustwp/blocks/dist/mjs/components/WordPressBlocksViewer';
import styles from './ctawithprops.module.scss';
import { IInnerBlockExpModel } from './edit';

    //function based component definition
function InnerBlockExp(ctaModel: BlockWithAttributes) {     
  let att = ctaModel.attributes as IInnerBlockExpModel;
      return (
        <>
          <div className={styles.ctawrapper}>
            <h3>InnerBlockExp - Rendering Code</h3>
            <ul>
              <li>{att?.actionLink}</li>
              <li>{att?.headline}</li>
              <li>{att?.ctaHero}</li>
            </ul>
          </div>
          <div>
            {ctaModel.innerBlocks &&
              <WordPressBlocksViewer blocks={ctaModel.innerBlocks}></WordPressBlocksViewer>}
          </div>
        </>
      );
    }

    InnerBlockExp.displayName='RainflyadventuresInnerblockexp'

    //export of component for usage/access
    export default InnerBlockExp; 