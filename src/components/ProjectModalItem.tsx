import { IProjectList } from "../constants";
import { LabelItem } from "../pages/showcases/ProjectList";

export function ProjectModalItem({ project }: { project: IProjectList; }) {
  const { desc, techstack, title, image ,source} = project;
  console.log("Halo");
  return <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-full w-full c-space">
    <div className="row-span-2 col-span-1">
      <div className="pe-5 py-3 h-full w-full">
      {<img src={image ? image as string: ""} className="w-full object-fill rounded-lg"/> }
      </div>
    </div>
    <div className="row-span-1 col-span-1 flex flex-col gap-3 pb-10 md:min-h-[25vh]">
      <p className="text-3xl font-bold">{title}</p>
      <div className="flex flex-wrap gap-2">{techstack.map((tag, index) => <LabelItem key={index} name={tag} className="text-xs" />)}</div>
      <p className="text-justify">{desc}</p>
    </div>
    <div className="row-span-1 col-span-1 flex flex-col gap-6 justify-left border border-t-black-200 pt-5">
      <a href={source?source:"#"} className={`${source?"":"text-gray-600 pointer-events-none"} md:text-base text:sm text-center border w-full md:w-1/2 border-black-200 px-3 py-2`}>Demo/Source {source?"":"Not Available "}🌐</a>
    </div>
  </div>;
}
