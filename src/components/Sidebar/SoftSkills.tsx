import data from "../../data"

export const SoftSkills = () => {
  return (
    <div className='mt-8 flex flex-wrap gap-2 text-xs' >
        {data.soft_skills.map((elem,index )=>(
            <p key={index} className=" bg-background-0 p-1 pl-4 pr-4 rounded-full" >{elem}</p>
        ))}
    </div>
  ) 
}
