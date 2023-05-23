import { Image } from "antd"
import eatsticker from '../../src/assets/eatsticker.jpeg'
import coffee from '../../src/assets/coffee.jpeg'
import hatecode from '../../src/assets/hatecode.png'
const Stickers = () => {
  return (
    <div className="mt-20 flex justify-between items-center" >
        <div className=" w-24 h-24" >
            <Image src={eatsticker} className="w-full h-fit object-contain" />
        </div>
        <div className=" w-24 h-24" >
            <Image src={coffee} className="w-full h-full object-cover" />
        </div>
        <div className=" w-24 h-24" >
            <Image src={hatecode} className="w-full h-full object-cover" />
        </div>
    </div>
  )
}

export default Stickers