import axios from 'axios';
import React,{useState} from 'react';
import './form.scss';

function Form ({handleApiCall}) {
    const [URL, setURL] = useState('');
    const [method, setMethod] = useState('GET');
    const [textArea, setTextArea] = useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    const values=await axios({
      method:e.target.id,
      url:URL
    })

    const formData = {
      method:method,
      url:URL
    };
    handleApiCall(formData,values);
  }

  function handleUrl(url){
    setURL(url)
  }

  function handleMethod(e) {
    e.target.className
    ? e.target.className = ''
    : e.target.className = 'active';
    
    setMethod(e.target.id);
    e.target.id === 'post' || e.target.id === 'put' ? setTextArea(true) : setTextArea(false)
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e)=>handleUrl(e.target.value)} />
            <button  data-testid="mybtn" type="submit">GO!</button>
          </label>
          <label className="methods">
        <button type="button" id="get" onClick={handleMethod} >GET</button>
        <button type="button" id="post" onClick={handleMethod}>POST</button>
        <button type="button" id="put" onClick={handleMethod}>PUT</button>
        <button type="button" id="delete" onClick={handleMethod}>DELETE</button>
          </label>
          {textArea && <textarea cols='50' rows='4'></textarea>}
        </form>
      </>
    );
  }


export default Form;
