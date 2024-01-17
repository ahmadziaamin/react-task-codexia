import React from 'react'
import '../Footer/footer.css'
import { MdNavigateNext } from "react-icons/md";

const Footer = () => {
  return (
   <>
   <div className='footer_main'> 
   <button className='back_btn_footer'>
Back
   </button>
   <button className='next_bn'>
   Next <MdNavigateNext color='black' /><MdNavigateNext  color='black' className='next_icon'/>
   </button>

   </div>
   </>
  )
}

export default Footer