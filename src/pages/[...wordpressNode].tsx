import { getWordPressProps, WordPressTemplate } from '@faustwp/core';
import { WordPressTemplateProps } from '@faustwp/core/dist/cjs/components/WordPressTemplate';
import { GetWordPressPropsConfig } from '@faustwp/core/dist/cjs/getWordPressProps';

export default function Page( props: WordPressTemplateProps ) {
	return <WordPressTemplate { ...props } />;
}

export function getStaticProps( ctx: any ) {
	return getWordPressProps( { ctx } );
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
