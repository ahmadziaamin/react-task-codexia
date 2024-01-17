import React,{useState} from 'react'
import '../ContentPage/contentpage.css'
import Form from 'react-bootstrap/Form';
import { Fun,Education,Sports,News,Investment,Fact } from './contectdata';
import SlidersRun from '../Slider/SlidersRun';

const ContentPage = () => {
  const btnarr = ["Fun", "Education", "Sports", "News", "Investment", "Fact"]
  const [option,setOption] = useState(Fun)
  const [color,setColor] = useState("Fun")
  console.log("option",option)
  const Selecthandle = (data,index) =>{
    if(data =="Fun"){
      setOption(Fun)
      setColor("Fun")
    }
  else  if(data =="Education"){
      setOption(Education)
      setColor("Education")
    }
   else if(data =="Sports"){
      setOption(Sports)
      setColor("Sports")
    }
    else if(data =="News"){
      setOption(News)
      setColor("News")
    }
   else if(data =="Investment"){
      setOption(Investment)
      setColor("Investment")
    }
  else  if(data =="Fact"){
      setOption(Fact)
      setColor("Fact")
    }
    else{
      setOption(Fun)
      setColor("Fun")
    }
  }

  return (
    <>
      <div className='content_main'>
        <div className='content_top_headind'>
          <h5>Content type</h5>
          <h6>Choose a content type that best fits your needs.</h6>
        </div>
        <div className='dual_para_select'>
          <p clas>What type of content are you creating?</p>
          <div className='content_btn_div'>
            {
              btnarr.map((data, index) => {
                return (
                  <button className='select_btn' onClick={()=>Selecthandle(data,index)} style={{background:color===data?"blue":""}}>{data}</button>
                )

              })
            }
          </div>
          <div className='select_input_main'>
            <h5>Which type of "{color}" content do you want to create?</h5>
            <div className='select_options'>
            <Form.Select aria-label="Default select example">
  
      {
        option?.map((data)=>{
          return(
            <>
             <option>{data}</option>
            </>
          )
        })
      }
    </Form.Select>
            </div>

          </div>
        <SlidersRun/>
        </div>


      </div>

    </>
  )
}

export default ContentPage