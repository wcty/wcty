import { loadTranslation } from "common";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";

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

export default dynamic(() => import("../components/Push"), { ssr: false });