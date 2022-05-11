import React, { useEffect, useState } from "react";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import dracula from "prism-react-renderer/themes/dracula";
import { Button, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import useCopyToClipboard from "hooks/useCopyToClipboard";
import useToggle from "hooks/useToggle";
import CardComponents from "components/MaterialComponents/CardComponents";

const propTypes = {};

interface RenderCodeI {
  code?: string;
  codeTS?: string;
}

const RenderCode = (props: RenderCodeI) => {
  const { code = "", codeTS = "" } = props;

  //! State
  const [changeTypeCode, setChangeTypeCode] = useToggle(true);
  const [isChangeTypeCode, setIsChangeTypeCode] = useState(true);
  const { copyStatus, copy } = useCopyToClipboard(
    changeTypeCode ? code : codeTS
  );
  //! Function

  const onChangeTypeCode = () => {
    setChangeTypeCode();
    setIsChangeTypeCode(false);
  };

  useEffect(() => {
    const t: any = !isChangeTypeCode
      ? setTimeout(() => setIsChangeTypeCode(true), 0)
      : null;
    return () => clearTimeout(t);
  }, [isChangeTypeCode]);
  //! Render
  return (
    <div className="render-code">
      <CardComponents
        title={"Result"}
        childrenCollapse={
          <LiveProvider
            className="render-code__provider"
            code={changeTypeCode ? code : codeTS}
            theme={dracula}
            disabled
          >
            {isChangeTypeCode && (
              <LiveEditor className="render-code__editor" id="editor" />
            )}

            <div className="render-code__button">
              {/* Change TypeScript Or JavaScript */}
              {codeTS && (
                <Tooltip
                  title={
                    changeTypeCode ? "View in JavaScipt" : "View in TypeScript"
                  }
                  placement="top"
                >
                  <IconButton onClick={() => onChangeTypeCode()}>
                    {changeTypeCode ? (
                      <div className="render-code__button_change-type btn-js">
                        <span>JS</span>
                      </div>
                    ) : (
                      <div className="render-code__button_change-type btn-ts">
                        <span>TS</span>
                      </div>
                    )}
                  </IconButton>
                </Tooltip>
              )}

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
        }
      />
    </div>
  );
};

RenderCode.propTypes = propTypes;
export default RenderCode;
