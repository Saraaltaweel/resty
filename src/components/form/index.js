import React,{useState} from 'react';

import './form.scss';

function Form ({handleApiCall}) {
    const [URL, setURL] = useState('');
    const [method, setMethod] = useState('GET');
    const [textArea, setTextArea] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      method:method,
      url:URL
    };
    handleApiCall(formData);
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
            <input name='url' onChange={(e)=>handleUrl(e.target.value)} type='text'/>
            <button type="submit" data-testid="mybtn">GO!</button>
          </label>
          <label className="methods">
            <span onClick={handleMethod} id="get">GET</span>
            <span onClick={handleMethod} id="post">POST</span>
            <span onClick={handleMethod} id="put">PUT</span>
            <span onClick={handleMethod} id="delete">DELETE</span>
          </label>
          {textArea && <textarea></textarea>}
        </form>
      </>
    );
  }


export default Form;
