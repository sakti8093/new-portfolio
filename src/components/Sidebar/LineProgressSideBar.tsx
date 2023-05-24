import LineProgressBar from '../../Utils/Line/LineProgressBar'
import data from '../../data'

const LineProgressSideBar = () => {
  return (
    <div className='mt-10' >
    {data.skills.map((elem,index) => (
      <div key={index} className="mt-4" >
        <p className='text-xs text-white mb-2' >{elem.skill}</p>
        <LineProgressBar progress={elem.percent} color={"#FFC107"} />
      </div>
    ))}
  </div>
  )
}

export default LineProgressSideBar