import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';


const SocialLinks = () => {
  return (
    <div className="social-links flex gap-[10px]">
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://github.com/luker369" target='__blank'><AiFillGithub /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.linkedin.com/in/luke-sterling-a191b0247/" target='__blank'><AiFillLinkedin /></a>
    
    <a className='w-[40px] h-[40px] rounded-full text-[28px]
    flex justify-center items-center duration-[0.4s] hover:bg-[#212d45] hover:scale-[1.2]' href="https://www.facebook.com/luke.sterling.527436" target='__blank'><AiFillFacebook /></a>

  </div>
  )
}

export default SocialLinks
