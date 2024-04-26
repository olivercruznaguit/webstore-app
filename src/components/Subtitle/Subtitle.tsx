import React from 'react'
interface props{
    text: string;
}
const Subtitle: React.FC<props> = ({text}) => {
  return (
    <div>
       <h3 className='text-lg text-white bg-black py-3'>{text}</h3>
    </div>
  )
}

export default Subtitle
