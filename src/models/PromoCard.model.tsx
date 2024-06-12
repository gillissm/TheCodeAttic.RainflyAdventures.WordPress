import { BaseQuery } from './BaseQuery.model';

export interface ImageAttributeModel{
    url: string,
    alt: string,
    id: string,
    name: string,
    height: number,
    width: number
}

// Interface representing the attributes for the HeroCTA Block.
//  Interface must extend Record<string, any> to support block editing features.
export interface IPromoCardModel extends Record<string, any> {	
    headline: string,
    actionLink: string,
    ctaHero: string,
    actionLabel: string,
    bigImage:ImageAttributeModel|string
}


// Assign the query variable to a new BaseQuery
// Generic Type is the interface model,to provide type checking for parameter 3
// Parameter 1 - is the GraphQL Fragment key/name that will be used
// Parameter 2 - Block Typename as stored by WordPress, this value is built from the namespace in the block.json
// Parameter 3 - Instance of the component model , that is used to produce the GraphQL Fragment
const PromoCardQuery = new BaseQuery<IPromoCardModel>(
    'PromoCardFragment',
    'RainflyadventuresPromocard',
    {
        headline: "",
        actionLink: "",
        ctaHero: "",
        actionLabel: "",
        bigImage: {} as ImageAttributeModel
    });

// Export the query variable for use within the component and pages
export default PromoCardQuery;