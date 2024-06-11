/* eslint-disable react-hooks/rules-of-hooks */
import { gql } from '@apollo/client';
import { flatListToHierarchical, useFaustQuery } from '@faustwp/core';
import { WordPressBlocksViewer } from '@faustwp/blocks';
import blocks from '../wp-blocks';

const GET_POST_QUERY = gql`
  ${blocks.CoreImage.fragments.entry}
  ${blocks.CoreParagraph.fragments.entry}

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
        ... ${blocks.CoreParagraph.fragments.key}
        ... ${blocks.CoreImage.fragments.key}
        ... on CreateBlockBlockB {
            apiVersion
            blockEditorCategoryName
            attributes {
              className
              metadata
              richText
              message
            }
          }
        ... on RainflyadventuresCtawithprops{
            attributes {
              actionLink
              ctaHero
              headline
            }
          }
          ... on RainflyadventuresSamplecta {
          attributes {
            actionLink
          ctaImage
          headline
          }
        }
        }
      }
    }
`;

export default function Component(props) {
  // Loading state for previews
  if (props.loading) {
    return <>Loading...</>;
  }

  // console.log(props);


  const { post } = useFaustQuery(GET_POST_QUERY);
  // console.log(post);
  
  const { title, content, featuredImage, date, author , editorBlocks} = post ?? {};

  const blocksList = flatListToHierarchical(editorBlocks);
  //console.log(blocksList);
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
