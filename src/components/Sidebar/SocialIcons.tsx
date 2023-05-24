import Link from 'antd/es/typography/Link'
import {AiOutlineGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
const SocialIcons = () => {
  return (
    <div className='absolute w-full pt-2 pb-2 bottom-0 flex items-center justify-evenly text-[20px] custom-backdrop' >
        <Link href='https://github.com/sakti8093' style={{ textDecoration:'none',color:"white",fontSize:'20px' }} ><AiOutlineGithub /> </Link>
        <Link style={{ textDecoration:'none',color:"white",fontSize:'20px' }} href='https://www.linkedin.com/in/sakti-prasad-165b31197/' ><AiFillLinkedin /> </Link>
        <Link style={{ textDecoration:'none',color:"white",fontSize:'20px' }} ><AiFillFacebook /> </Link>
    </div>
  )
}

export default SocialIcons