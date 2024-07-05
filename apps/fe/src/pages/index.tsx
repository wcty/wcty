import DefaultInitiativeCover from '@assets/images/wecity_chat_512.png';
import { loadTranslation } from 'common';
import Head from 'next/head';
import { MapWrapper } from 'styles';

import { Text, Title } from '@ui';
import { GetStaticProps } from 'next';
import { lazy, Suspense } from 'react';
const Map = lazy(() => import('components/Map'));

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  );

  return {
    props: {
      translation,
    },
  };
};

export default function RootPath() {
  const name = 'Explore civic initiatives and social enterprises';
  const description =
    'Navigate the map of your city to see what is going on, and how to make impact.';

  return (
    <>
      <Head>
        <title>{`${name} | Wecity`}</title>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DefaultInitiativeCover.src} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Wecity" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={name} />
        <meta property="twitter:description" content={description} />
      </Head>
      <MapWrapper>
        <Suspense fallback={null}>
          <Map />
        </Suspense>
      </MapWrapper>
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            maxWidth: '500px',

            width: '100%',
            // height: '100%',
            borderRadius: '3px',
            padding: '3rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Title>Ruzzia is a terrorist state!</Title>
          <Text as="p">Support Ukrainian Defence Forces!</Text>
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="80">
            <rect width="120" height="80" fill="#0057B7" />
            <rect width="120" height="40" y="40" fill="#FFD700" />
          </svg>
          <Text as="p">
            This site is currently under maintenance, for any questions please
            contact herman.mitish@gmail.com
          </Text>
        </div>
      </div>
    </>
  );
}
