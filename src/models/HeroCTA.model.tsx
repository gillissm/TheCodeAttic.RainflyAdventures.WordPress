import { BaseQuery } from './BaseQuery.model';

// Interface representing the attributes for the HeroCTA Block.
//  Interface must extend Record<string, any> to support block editing features.
export interface IHeroCTAModel extends Record<string, any> {	
    headline: string,
    actionLink: string,
    ctaHero: string,
    actionLabel: string
}


// Assign the query variable to a new BaseQuery
// Generic Type is the interface model,to provide type checking for parameter 3
// Parameter 1 - is the GraphQL Fragment key/name that will be used
// Parameter 2 - Block Typename as stored by WordPress, this value is built from the namespace in the block.json
// Parameter 3 - Instance of the component model , that is used to produce the GraphQL Fragment
const HeroCTAQuery = new BaseQuery<IHeroCTAModel>(
    'HeroCTAFragment',
    'RainflyadventuresHerocta',
    {
        headline: "",
        actionLink: "",
        ctaHero: "",
        actionLabel:""
    });

// Export the query variable for use within the component and pages
export default HeroCTAQuery;