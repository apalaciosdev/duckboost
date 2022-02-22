import React, { useState } from 'react'

export const ImgDriveConverter = () => {

  const [url, setUrl] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = () => {

    if(url !== ''){
      const arr = url.split('/');
      setNewUrl(`https://drive.google.com/uc?export=view&id=${arr[5]}`)
  
      console.log(newUrl)
    }

  }

  //example:
  //ORIGINAL  -> https://drive.google.com/file/d/12HLf2crewvXmzZ66XxNK5tvDFz1Ps3AC/view?usp=sharing
  //CONVERTED -> https://drive.google.com/uc?export=view&id=12HLf2crewvXmzZ66XxNK5tvDFz1Ps3AC


  return (
    <div>
      <br/>

        <label for="productName">
          <p>Enter URL: </p>
          <input type="text" name="productName" value={url} onChange={handleInputChange} placeholder='https://drive.google.com/file/d/12HLf2crewvXmzZ66XxNK5tvDFz1Ps3AC/view?usp=sharing'/>
        </label> <br /><br />
        <button onClick={() => handleSubmit()}>Convert</button>
        <p>URL Converted: { newUrl === '' ? 'not converted yet' : newUrl}</p>
   
    </div>

  )
}

