import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.css'
import { useState } from 'react';

export function New({inputs, title}) {

const [file, setFile] = useState('');

console.log(file)

  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className="newTop">
          <h1 className='newTitle'>{title}</h1>
        </div>
        <div className="newButtom">
          <div className="newLeft">
            <img className='newImage' src={file ? URL.createObjectURL(file) : "https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo=" } alt='noImages'/>
          </div>
          <div className="newRight">
            <form className='newForm'>
            <div className="newFormInput">
                <label htmlFor='file'>Image:<DriveFolderUploadOutlinedIcon className='newIcon'/></label>
                <input 
                type="file" 
                id='file' 
                style={{display:"none"}} 
                onChange={(e) => setFile(e.target.files[0])} 
                className='newInput' />
              </div>
              {
                inputs.map((input) => (
              <div className="newFormInput" key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder} className='newInput'/>
              </div>
                ))
              }
                <button className='newBtn'>Send</button>
            
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default New