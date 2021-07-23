import Card from "../components/Card";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-6xl md:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-tight text-gray-900">Construa sites modernos com agilidade sem precisar sair do HTML.</h1>

      <div className="mt-10 md:mt-24 mb-4 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card href="/nextjs" src="/images/nextjs.svg" alt="Next.js" layoutId="nextjs-logo" />

        <Card href="/tailwind" src="/images/tailwind.svg" alt="Tailwind" layoutId="tailwind-logo" />

        <Card href="/framermotion" src="/images/framermotion.svg" alt="Framer Motion" layoutId="framermotion-logo" />
      </div>
    </Layout>
  )
}
