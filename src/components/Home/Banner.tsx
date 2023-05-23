const Banner = () => {
  return (
    <div className="banner mt-10 relative" >
      <div className="absolute custom-backdrop w-full h-full opacity-[0.5]" ></div>
      <div className="absolute h-full text-white p-10 md:p-20" >
        <p className="text-4xl md:text-6xl font-bold custom-orange" >hi.</p>
        <p className="text-4xl md:text-6xl font-semibold custom-orange" >Welcome</p>
        <div className='text-xl' >&lt; <i>code</i> &gt;</div>
      </div>
    </div>
  )
}

export default Banner