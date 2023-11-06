import './App.css';     // pics dom element
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api.js';

function App() {

  const fileInputRef = useRef();
  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  function onUploadClick() {
    fileInputRef.current.click();
  }

  const [file, setFile] = useState('')
  const [result, setResult] = useState('');
  useEffect(() => {
    async function getImage() {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();

  }, [file]

  )

  return (
    // <h2 align="center" >SEAMLESSLY SHARE YOUR FILES NOW !</h2>
    <div className='container'>

      <img src={logo} alt="image" />




      <div className="wrapper">
        <h1 className="i1">SHARE YOUR FILES NOW !!</h1>

        <br />
        <br />
        <br />
        <h2 className="i2">Upload from your device and share the download link on a single click </h2>
        <br />
        <br />
        <button className='i3' onClick={() => onUploadClick()}>Upload File</button>

        <input type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className='i4'>
          <br /><br />
          < a className='i5' href={result} target='_blank'>{result}</a>
        </div>

      </div>


    </div>
  );
}

export default App;
