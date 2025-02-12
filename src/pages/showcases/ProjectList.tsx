import { MouseEventHandler, useState } from "react";
import { PROJECT_LIST, TAG_COLLECTION } from "../../constants";
import { ProjectModalItem } from "../../components/ProjectModalItem";

export function LabelItem({name, className="",active, onClick}:{name:string, className?:string, active? : boolean, onClick?:MouseEventHandler<HTMLButtonElement>}) {
  return <button
  onClick={onClick}
    className={`${active?"bg-blue-800 ":"bg-white-500 "} px-2 py-1 rounded-md text-white w-fit ${className}`}
  >
    {name}
  </button>
}

function ProjectList({ modalControl }: { modalControl: Function[] }) {
  const [filterKeyword, setFilterKeyword] = useState("All")

  const dataSlicer = PROJECT_LIST.map((val, index) => ({
    ...val,
    id: index,
    techstack: [...val.techstack.slice(0, 4), ...val.techstack.length > 4 ? ["..."] : []],
    desc: val.desc.length > 100 ? val.desc.slice(0, 100) + "..." : val.desc
  })).slice(0,PROJECT_LIST.length-1)

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
        {filteredData.map(({ title, desc, techstack, id, image}, index) => <div key={index} className="text-white-800 rounded-2xl border overflow-hidden border-slate-900 bg-black-200 " onClick={() => {
          setModalChildren(<ProjectModalItem project={PROJECT_LIST[id]}/>)
          openModal()
        }}>
          <img src={image?image:""} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-white-800 text-sm mt-2">{desc}</p>
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
