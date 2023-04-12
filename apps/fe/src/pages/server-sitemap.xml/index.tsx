import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { client } from 'common';
import { InitiativesSitemapDocument, InitiativesSitemapQuery } from 'generated';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const initiatives = (await client.query<InitiativesSitemapQuery | undefined>({
    query: InitiativesSitemapDocument,
    fetchPolicy: 'no-cache'
  }))?.data
    ?.initiatives
    ?.map((initiative) => ({
      loc: 'https://weee.city/initiative/' + initiative.id,
      lastmod: new Date().toISOString(),
    })) as ISitemapField[]

  return getServerSideSitemap(ctx, initiatives)
}

// Default export to prevent next.js errors
export default () => { }