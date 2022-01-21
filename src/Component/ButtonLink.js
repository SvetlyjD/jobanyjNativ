import React from 'react';

function Button(props) {
  return (
    <div className='flex justify-center mt-20'>
      <div className='flex w-2/4 h-20 font-semibold justify-center rounded-2xl buttonLink 
      items-center text-2xl'>
        <a className='text-center' href={props.link}>{props.name}</a>
      </div>
    </div>
  )
}

export default Button;
