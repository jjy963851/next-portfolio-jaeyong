import Layout from "@/components/layout";
import Head from "next/head";

import ProjectItem from "@/components/projects/project-item";

export default function Projects({projects}){
  
    

    return(
        <Layout >
            <div className=" flex flex-col items-center justify-center  px-5 mb-10">
             <Head>
                <title>JaeYong Chang Portfolio</title>
                <meta name="description" content="Today's also fighting " />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
        <h1 className="text-4xl font-bold sm:text-6xl">
           Total Projects : 
           <span className="pl-4 text-blue-500">{projects.results.length} </span>
        </h1>

        <div className = "grid grid-cols-1 md:grid-cols-2 py-10 gap-10">
        {projects.results.map((aProject)=>(
                <div key={aProject.id} className="h-full flex">
                 <ProjectItem  data = {aProject}/>
                 </div>
        ))}
        </div>
        </div>
        </Layout>
    );
}

export async function getServerSideProps(){
    const NOTION_TOKEN = process.env.NOTION_TOKEN;
    const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${NOTION_TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Name",
                    "direction": "ascending",
                }

            ],
            page_size: 100
        
        })
      };
      
     const res = await fetch(`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`, options)
      
     const projects = await res.json();

     const projectNames = projects.results?.map((aProject) => (
        aProject.properties?.Name?.title[0]?.plain_text
      ));
      
        //console.log('projects:', projects);

     
    // console.log(`project Names: ${projectNames}`);

    return{
        props: {projects},
    }

}