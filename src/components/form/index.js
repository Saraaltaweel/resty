import axios from 'axios';
import React,{useState} from 'react';
import './form.scss';

function Form (props) {
    const [URL, setURL] = useState('https://pokeapi.co/api/v2/pokemon');
    const [method, setMethod] = useState('GET');
    const [textArea, setTextArea] = useState(false);
    const [inputText, setInputText] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    // const values=await axios({
    //   method:e.target.id,
    //   url:URL
    // })
     const formData = {
      method:method,
      url:URL
    };
 
    props.handleApiCall(formData);
  }

  function handleUrl(url){
    setURL(url)
  }

  async function handleMethod(e) {
    e.target.className
    ? e.target.className = ''
    : e.target.className = 'active';
    
   await setMethod(e.target.id);
    e.target.id === 'post' || e.target.id === 'put' ? setTextArea(true) : setTextArea(false)
  }
  function handleInputText(e) {
    setInputText(e.target.value)
  }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' onChange={(e)=>handleUrl(e.target.id)} />
            <button  data-testid="mybtn" type="submit">GO!</button>
          </label>
          <label className="methods">
        <button type="button" id="get" onClick={handleMethod} >GET</button>
        <button type="button" id="post" onClick={handleMethod}>POST</button>
        <button type="button" id="put" onClick={handleMethod}>PUT</button>
        <button type="button" id="delete" onClick={handleMethod}>DELETE</button>
          </label>
          {textArea && <textarea cols='50' rows='4'onChange={handleInputText}></textarea>}
        </form>
      </>
    );
  }


export default Form;
