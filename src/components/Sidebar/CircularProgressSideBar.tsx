import data from '../../data'
import CircularProgressBar from '../../Utils/Circle/CircularProgressBar'

const CircularProgressSideBar = () => {
  return (
    <div className="flex justify-between items-center p-4 text-center mt-52 mb-4">
    {data.languages.map((elem, index) => (
      <div key={index} className="w-[60px] h-[60px]">
        <CircularProgressBar progress={elem.percent} color={"#FFC107"} />
        <p className=" text-xs mt-2">{elem.text}</p>
      </div>
    ))}
  </div>
  )
}

export default CircularProgressSideBar