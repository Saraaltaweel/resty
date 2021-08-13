import React ,{useState}from 'react';
import Loader from '../loading';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');


function Results(props) {
  const [loader, setLoading] = useState(true);
  const [render, setRender] = useState(false);
  setTimeout(() => {
    setLoading(false);
    setRender(true);
  }, 2000);

    return (
      <>
      {loader && <Loader />}
      {render && (

      <div data-testid="result" >
      {props.data &&
        <>
      
          "Headers : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.headers} />

          "Count : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.count} />

          "Results : "
          <JSONPretty theme={JSONPrettyMon} data={props.data.results} />
    
        </>
      }
    </div>
      )}
    </>
  );

    }


export default Results;
