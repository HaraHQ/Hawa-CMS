import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const LayoutInstallation: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Head>
        <title>Hawa-CMS Installation</title>
      </Head>
      <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-purple-400 via-purple-500 to-pink-400">
        {children}
      </div>
    </main>
  )
}

export default LayoutInstallation;