import React, { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import { Button, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import useToggle from "hooks/useToggle";

const propTypes = {};

interface RenderCodeI {
  code: string;
}

const RenderCode = (props: RenderCodeI) => {
  const { code = "" } = props;

  //! State
  const { copyStatus, copy } = useCopyToClipboard(code);

  //! Function

  //! Render
  return (
    <div className="render-code">
      <LiveProvider
        className="render-code__provider"
        code={code}
        theme={dracula}
        disabled
      >
        <LiveEditor className="render-code__editor" id="editor" />

        <div className="render-code__button">
          {/* Copy Button */}
          <Tooltip
            title={copyStatus === "copied" ? "Copied" : "Copy"}
            placement="top"
          >
            <IconButton onClick={() => copy()}>
              {copyStatus === "copied" ? (
                <DoneIcon className="color-green" />
              ) : (
                <ContentCopyIcon className="color-white" />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </LiveProvider>
    </div>
  );
};

RenderCode.propTypes = propTypes;
export default RenderCode;
