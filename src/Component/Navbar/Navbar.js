import React from 'react'
import '../Navbar/navbar.css'
import personimg from '../../Component/assets/th (1).jpeg'
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

const Navbar = () => {
  return (
   <>
   <div className='navbar_parent'>
    <div className='navbar_child'>
        <div className='name_side'>
<butto className="back_btn" ><IoIosArrowRoundBack  color='white' width="10px"/></butto>
<p className='name_heading'>Media management <br></br><span>Draft campaign</span></p>
<CiEdit  color='white' cursor="pointer"/>
        </div>
        <div className='logo_side'>
<div className='perosn_name'>
<p>Jane Cooper</p>
<a>Change profile</a>
</div>
<div className='profile_img'>
<img src={personimg} alt="back img"/>
</div>
        </div>

    </div>

   </div>
   </>
  )
}

export default Navbar