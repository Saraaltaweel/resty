import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import React, { useState } from 'react';
function App (){
  const [state, setState] = useState({ data: null,requestParams: {} , view:false });
  

  function callApi(requestParams,values) {
    // mock output
    const data = {
      Headers: {
        "cache-control": 'string no-cache'
      },
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setState({data: values, requestParams , view : true});
  }

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form handleApiCall={callApi} />
        {state.view && (
          <section>
        <Results data={state.data} />
        </section>
        )}
        <Footer />
      </React.Fragment>
    );
  }


export default App;
