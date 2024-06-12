/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from '@apollo/client';
import { flatListToHierarchical, useFaustQuery } from '@faustwp/core';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import HeroCTAQuery from '../models/HeroCTA.model'

const GET_POST_QUERY = gql`
  ${HeroCTAQuery.fragment}
  query GetPost($databaseId: ID!, $asPreview: Boolean = false) {
    post(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      date
      author {
        node {
          name
        }
      }
      editorBlocks(flat: true) {
        name
        __typename
        id: clientId
        parentClientId        
        ... on RainflyadventuresCtawithprops{
            attributes {
              actionLink
              ctaHero
              headline
            }
          }
        ... ${HeroCTAQuery.key}
      
        }
      }
    }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }
  const { post } = useFaustQuery(GET_POST_QUERY);
  const { title, content, featuredImage, date, author, editorBlocks } = post ?? {};
  const blocksList = flatListToHierarchical(editorBlocks);
  return (
    <>
      <div>
        block goes here
        <WordPressBlocksViewer blocks={blocksList}></WordPressBlocksViewer>
      </div>
    </>
  );
}

Component.queries = [
  {
    query: GET_POST_QUERY,
    variables: ({ databaseId }, ctx) => ({
      databaseId,
      asPreview: ctx?.asPreview,
    }),
  },
];
