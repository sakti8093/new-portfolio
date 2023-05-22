import {AiOutlineGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
const SocialIcons = () => {
  return (
    <div className='absolute w-full pt-2 pb-2 bottom-0 flex items-center justify-evenly text-[20px] custom-backdrop' >
        <p><AiOutlineGithub /> </p>
        <p><AiFillLinkedin /> </p>
        <p><AiFillFacebook /> </p>
    </div>
  )
}

export default SocialIcons