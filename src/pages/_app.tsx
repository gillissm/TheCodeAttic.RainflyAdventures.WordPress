import '../../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { WordPressBlocksProvider } from '@faustwp/blocks';
import { FaustProvider } from '@faustwp/core';
import blocks from '../wp-blocks';
import '../styles/global.scss';
import { AppProps } from "next/app";

export default function MyApp( { Component, pageProps }:AppProps ) {
	const router = useRouter();

	return (
		<FaustProvider pageProps={ pageProps }>
			<WordPressBlocksProvider
				config={ {
					blocks,
					theme: null,
				} }
			>
				<Component { ...pageProps } key={ router.asPath } />
			</WordPressBlocksProvider>
		</FaustProvider>
	);
}
