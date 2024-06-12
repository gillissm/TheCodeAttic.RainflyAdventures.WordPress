/* eslint-disable import/no-anonymous-default-export */
import { CoreBlocks } from '@faustwp/blocks';
import SampleCTA from './samplecta/samplecta';
import CTAWithProps from './ctawithprops/ctawithprops';
import * as RainflyComponents from '../components';


export default {
	'CoreParagraph': CoreBlocks.CoreParagraph,
	'CoreImage': CoreBlocks.CoreImage,
	'RainflyadventuresCtawithprops': CTAWithProps,
	'RainflyadventuresSamplecta': SampleCTA,
	'RainflyadventuresHeroCTA': RainflyComponents.HeroCTA,
	'RainflyadventuresPromocard': RainflyComponents.PromoCard
};
