/* eslint-disable import/no-anonymous-default-export */
import { CoreBlocks } from '@faustwp/blocks';
import CTAWithProps from './ctawithprops/ctawithprops';
import SampleCTA from './samplecta/samplecta';
// import mfb from './my-first-block/MyFirstBlock';
// import sb from './my-second-block/mysecondblock';
// import BlockB from './blockb/Component';
// import MyThirdBlock from './my-third-block/mythirdblock';
// import CustomParagraph from './custom-paragraph/CoreParagraph'

export default {
	'CoreParagraph': CoreBlocks.CoreParagraph,
	'CoreImage': CoreBlocks.CoreImage,
	// 'MyFirstBlock': mfb,
	// 'mysecondblock': sb,
	// 'rainflyadventures/mysecondblock': sb,
	// 'RainflyadventuresMysecondblock': sb,
	// "RainflyadventuresMysecondblockAttributes": sb,
	// 'CreateBlockBlockB': BlockB,
	// 'RainflyadventruesMythridblock': MyThirdBlock
	'RainflyadventuresCtawithprops': CTAWithProps,
	'RainflyadventuresSamplecta': SampleCTA
};
