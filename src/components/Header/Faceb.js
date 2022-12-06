import React, { useState } from 'react'
import './Faceb.css'
import { FaTimes, FaBeer } from 'react-icons/fa'
import { FiAlignJustify  } from 'react-icons/fi'
const Faceb = () => {
    const [toggle, settoggle] = useState(true)
    const handletoggle = () => { settoggle(!toggle) }

    let FiAlignJustif = (<FiAlignJustify onClick={handletoggle} />)
    let FaTime = (<div className='slide-bar'>
        <div className='slide-bar1'>
            <FaTimes fontSize='25' onClick={handletoggle} />
        </div>
        <div className='slide-bar2'>
            <a>HOME</a>
            <a>ABOUT</a>
            <a>CONTACT</a>
        </div>
    </div>)
    return (
        <div className="Header-Cointainer">
            <div className="Header-Wraper">
                <div className='Burger'>
                    {toggle ? FiAlignJustify : FaTime}
                </div>

            </div>

        </div>
    )
}

export default Faceb