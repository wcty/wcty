import { loadTranslation } from "common";
import { GetStaticProps } from "next";
import { Center } from "styles";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )

  return {
    props: {
      translation
    }
  }
}

export default function Offline() {
  return (
    <Center>
      <h1>You are offline</h1>
      <p>
        This page is only available when you are online.
      </p>
    </Center>
  )
}