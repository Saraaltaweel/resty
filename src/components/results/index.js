import React from 'react';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
var JSONPrettyMon = require('react-json-pretty/dist/monikai');

function Results(props) {

    return (
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
  );
    }


export default Results;
