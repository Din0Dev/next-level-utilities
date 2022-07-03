import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { transform } from "@babel/core";
import dracula from "prism-react-renderer/themes/dracula";

const propTypes = {};

const RenderTestExam = (props) => {
  //! State
  const templateCode = `
    class Counter extends React.Component {
      constructor() {
        super()
        this.state = { count: 0 }
      }
    
      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState(state => ({ count: state.count + 1 }))
        }, 1000)
      }
    
      componentWillUnmount() {
        clearInterval(this.interval)
      }
    
      render() {
        return (
          <center>
            <h3>
              {this.state.count}
            </h3>
          </center>
        )
      }
    }
  `;
  //! Function

  //! Render
  return (
    <LiveProvider
      className="render-test-exam"
      code={templateCode}
      theme={dracula}
    >
      <LiveEditor />
      <LivePreview />
      <LiveError />
    </LiveProvider>
  );
};

RenderTestExam.propTypes = propTypes;
export default RenderTestExam;
