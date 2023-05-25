import { Image } from "antd"
import bye from '../../src/assets/bye.png'
import haveaniceday from '../../src/assets/haveaniceday.png'
import talksoon from '../../src/assets/talksoon.png'
const Stickers = () => {
  return (
    <div className="mt-10 flex justify-between items-center" >
        <div className="w-28 h-28" >
            <Image src={haveaniceday} className="w-full h-fit" />
        </div>
        <div className="w-28 h-28" >
            <Image src={talksoon} className="w-full h-full" />
        </div>
        <div className="w-28 h-28" >
            <Image src={bye} className="w-full h-full" />
        </div>
    </div>
  )
}

export default Stickers