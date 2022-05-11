import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";

const propTypes = {};

const RenderTestExam = (props) => {
  //! State
  const templateCode = `
  class TransformExample extends React.Component {
  
    boop = () => {
      console.log('boop')
    }
  
    render() {
      return (
        <center>
          <button onClick={this.boop}><h3>Boop!</h3></button>
        </center>
      )
    }
  }
  `;
  //! Function

  //! Render
  return (
    <LiveProvider code={templateCode} theme={dracula}>
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
};

RenderTestExam.propTypes = propTypes;
export default RenderTestExam;
