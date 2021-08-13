import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/history';
import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState=[]; 

function App (){
  const [state, setState] = useState({requestParams: {} , view:false });
  
  const [headers, setHeaders] = useState(null);
  const [count, setCount] = useState('');
  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [history, setHistory] = useState([])
  const [red, dispatch] = useReducer(reducer, initialState)


  function callApi(params) {
    setrequestParams(params);
    setHistory([...history, params]);

        // mock output
  //   const data = {
  //     Headers: {
  //       "cache-control": 'string no-cache'
  //     },
  //     count: 2,
  //     results: [
  //       {name: 'fake thing 1', url: 'http://fakethings.com/1'},
  //       {name: 'fake thing 2', url: 'http://fakethings.com/2'},
  //     ],
  //   };
    setState({ view : true , headers:headers,count:count});
  }
  async function effect(){
    try{
      const data=await axios({
        method:requestParams.method,
        url:requestParams.url
      })
      setData(data.data);
      setCount(data.data.count);
      setHeaders(data.headers);
      dispatch(addToHistory(requestParams.url,requestParams.method,data));
    }catch (error) {
    console.log(error.message)
    setData(null)
  }
  }
  useEffect(()=>{
    effect()

  }, [requestParams])


  function reducer(history=initialState,action){
    const {type,payload}=action;
    switch (type) {
      case 'AddToHistory':
        console.log(history);
        history=[...history,payload];
        return history;
      default:
        return history;
    }
  }  
  function addToHistory(url,method,result){
  
    return({
      type:'AddToHistory',
      payload:{
        url,
        method,
        result
      }
    })
  } 

  function historyfunction(result){
    setData(result);
  }
 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        
        <History historyfunction={historyfunction} history={history} />
       
        {state.view && (
          <section>
        <Results data={{results:data,headers:headers,count:count}} />
        </section>
        )}
        <Footer />
      </React.Fragment>
    );
  }


export default App;

