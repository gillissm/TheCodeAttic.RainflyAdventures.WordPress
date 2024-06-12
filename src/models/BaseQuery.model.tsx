import { DocumentNode } from '@apollo/client';
import { gql } from '@apollo/client';

// type should be the block/component's model, used to auto create the GraphQL fragment based on class properties (ie attributes)
export class BaseQuery<type>{
    //GraphQL fragment name or key
    key: string;

    // Block type name as returned by GraphQL
    //  This is also used by Faust.js to perform block mapping to determine which component to render
    typeName: string;

    //GraphQL fragment, used to query for the related block's data
    readonly fragment: DocumentNode;

    // Parameter 1 - is the GraphQL Fragment key/name that will be used
    // Parameter 2 - Block Typename as stored by WordPress, this value is built from the namespace in the block.json
    // Parameter 3 - Instance of the component model , that is used to produce the GraphQL Fragment
    constructor(key: string, typeName: string, att:type) {
        this.key = key;
        this.typeName = typeName;
        
        let attlist = Object.getOwnPropertyNames(att);
        this.fragment = gql`
            fragment ${this.key} on ${this.typeName}{
                attributes{
                    ${attlist.join('\n')}
                }
            }
        `;      
        
    }      
};