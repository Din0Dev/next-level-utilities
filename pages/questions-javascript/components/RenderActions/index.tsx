import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";

const propTypes = {};

interface RenderActionsI {
  linkCodeSanbox?: string;
}

const RenderActions = (props: RenderActionsI) => {
  //! State
  const { linkCodeSanbox = '/' } = props;

  //! Function

  //! Render
  return (
    <div className="render-actions mx-16">
      <a href={linkCodeSanbox} target="_blank" rel="noreferrer">
        <Button className="btn-outlined" variant="text">
          <OpenInNewIcon /> Open in CodeSandbox
        </Button>
      </a>
    </div>
  );
};

RenderActions.propTypes = propTypes;
export default RenderActions;
