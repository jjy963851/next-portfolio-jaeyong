import Image from "next/legacy/image";

export default function ProjectItem({ data }) {

    const title = data.properties.Name.title[0]?.plain_text
    const gitHub = data.properties.Github.url
    const discription = data.properties.Description.rich_text[0]?.plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.workPeriod.date?.start
    const end = data.properties.workPeriod.date?.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('_');
        const endDateStringArray = end.split('_');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2])
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2])
        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`period: ${result}`)
        return result;
    };

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl "
                src={imgSrc}
                alt="cover image"
                width="100%"
                height="70%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            <div className="p-4 flex flex-col ">
                <h1 className="text-2xl font-bold ">{title}</h1>
                <h3 className="mt-4 text-xl pb-32 ">{discription} </h3>

                <div className="absolute bottom-1">
                    <a href={gitHub} className="font-bold  " >
                        Goes to Github
                    </a>

                    <p className="my-2 font-semibold"> Working period: {start} ~ {end}
                    </p>
                    <div className="flex justify-start mt-2 flex-wrap gap-y-3">
                        {tags.map((aTag) => (
                            <h1 className="px-2 py-1 mr-2 rounded-md bg-slate-500 text-white hover:text-black w-30" key={aTag.id}>{aTag.name}</h1>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}