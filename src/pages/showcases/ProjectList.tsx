import { MouseEventHandler, useState } from "react";
import { IProjectList, PROJECT_LIST, TAG_COLLECTION } from "../../constants";

function LabelItem({name, className="",active, onClick}:{name:string, className?:string, active? : boolean, onClick?:MouseEventHandler<HTMLButtonElement>}) {
  return <button
  onClick={onClick}
    className={`${active?"bg-blue-800 ":"bg-white-500 "} px-2 py-1 rounded-md text-white w-fit ${className}`}
  >
    {name}
  </button>
}

function ProjectItem({project}: {project:IProjectList}) {
  const { desc, techstack, title, image } = project;
  console.log("Halo")
  return <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-full w-full c-space">
    <div className="row-span-2 col-span-1">
      {image ? <img src="" alt="" /> : <img src={image as string} />}

    </div>
    <div className="row-span-1 col-span-1 flex flex-col pb-10 md:min-h-[25vh]">
      <p className="text-3xl font-bold">{title}</p>
      <div className="flex flex-wrap gap-2">{techstack.map((tag,index)=><LabelItem key={index} name={tag} className="text-xs"/>)}</div>
    </div>
    <div className="row-span-1 col-span-1 flex flex-col gap-6 justify-left border border-t-black-200 pt-5">
      <p className="text-justify">{desc}</p>
      <button className="md:text-base text:sm text-left border w-full md:w-1/2 border-black-200 px-3 py-2">Click Here To Se My Project</button>
    </div>
  </div>;
}



function ProjectList({ modalControl }: { modalControl: Function[] }) {
  const [filterKeyword, setFilterKeyword] = useState("All")

  const dataSlicer = PROJECT_LIST.map((val, index) => ({
    ...val,
    id: index,
    tags: [...val.tags.slice(0, 4), ...val.tags.length > 4 ? ["..."] : []],
    desc: val.desc.length > 22 ? val.desc.slice(0, 20) + "..." : val.desc
  }))

  const [openModal, __, setModalChildren] = modalControl
  const filteredData = dataSlicer.filter((data)=>data.tags.includes(filterKeyword)||filterKeyword=='All')


  return (
    <section className="c-space my-20" id="project z-[100]">
      <p className="head-text">My Project</p>
      <div className="mt-3 flex flex-wrap gap-3 ">
        <p>Category : </p>
        {["All",...TAG_COLLECTION].map((tag, index) => (
          <LabelItem name={tag} key={index} active={tag==filterKeyword} onClick={()=>{setFilterKeyword(tag)}}/>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-wrap mt-5">
        {filteredData.map(({ title, desc, techstack, id}, index) => <div key={index} className="text-white-800 rounded-2xl border overflow-hidden border-slate-900 bg-black-200 " onClick={() => {
          setModalChildren(<ProjectItem project={PROJECT_LIST[id]}/>)
          openModal()
        }}>
          <img src="https://images.unsplash.com/photo-1738807991630-260f842bdf49" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-black-200 text-sm mt-2">{desc}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {techstack.map((name, index) => (
                <LabelItem name={name} key={index} className="text-xs bg-slate-900"/>
              ))}
            </div>
          </div>
        </div>)}
      </div>
    </section>
  );
}

export default ProjectList;
