import React from 'react'

interface props {
  text: string;
}

const CollectionTitle: React.FC<props> = ({text}) => {
  return (
    <div className='text-center font-extrabold text-2xl mt-14 mb-5 xl:text-left underline'>
      {text}
    </div>
  )
}

export default CollectionTitle
