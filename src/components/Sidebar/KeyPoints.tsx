import data from "../../data"
import {MdDone} from 'react-icons/md'
const KeyPoints = () => {
  return (
    <div className="mt-10" >
        { data.key_points.map((elem)=>(
            <div className="flex gap-2 text-[14px]" >
                <p className="text-text-yellow" ><MdDone /></p>
                <p>{elem}</p>
            </div>
        )) }
    </div>
  )
}

export default KeyPoints