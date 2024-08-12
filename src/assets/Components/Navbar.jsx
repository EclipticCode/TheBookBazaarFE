import React from 'react'
import bblogo from '../../assets/BBLOGO.svg'

const Navbar = () => {
  return (
    <div className=''>
        <div className=''><img src={bblogo} width={100}
          height={100}
          className="max-h-12 object-contain"/></div>
        <div className='flex justify-end'>
        <div className='bg-yellow-450 text-white font-bold py-2 px-4 rounded mr-6'><button>Login</button></div>
        <div className=''>Cart</div>
        </div>
    </div>
  )
}

export default Navbar