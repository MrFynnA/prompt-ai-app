import Feed from "@components/Feed"


export default function Home() {
    return ( 
    <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
            Discover & Share
            <br className="md:hidden"/>
            <span className="orange_gradient text-center  !to-gray-500"> AI-Powered Prompts</span>
          </h1>
          <p className="desc text-center">
             Promptos is an open-source AI prompting tool for modern word to discover, create and share creative prompts
          </p>
          <Feed/>
    </section>
    )
    }

