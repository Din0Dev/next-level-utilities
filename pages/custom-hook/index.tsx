import React, { Fragment, useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardComponents from "components/MaterialComponents/CardComponents";
import { customHook } from "data/customHook";
import RenderCode from "./components/RenderCode";
import RenderActions from "./components/RenderActions";
import InputSearch from "components/MaterialComponents/InputSearch";
import Timer from "helpers/timer";

const propTypes = {};

interface CustomHookI {}

const CustomHook = (props: CustomHookI) => {
  //! State
  const timer = useRef(new Timer());
  const [customHooksLocal, setCustomHooksLocal] = useState(customHook);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (valueSearch) {
      timer.current.debounce(() => {
        setCustomHooksLocal((prev) => {
          const nextCustomHooks = customHook.filter((el) => {
            return el.name.toLowerCase().includes(valueSearch.toLowerCase());
          });

          return nextCustomHooks;
        });
      }, 300);
    } else {
      setCustomHooksLocal(customHook);
    }
  }, [valueSearch]);

  //! Function
  const onChangeSearch: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  //! Render
  return (
    <div className="custom-hook">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4" marginBottom={4}>
            Custom Hooks
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <InputSearch value={valueSearch} onChange={onChangeSearch} />
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {customHooksLocal.length === 0 && (
            <Typography className="p-16" variant="h6" marginBottom={4}>
              Không thấy dữ liệu tìm thấy
            </Typography>
        )}
        {customHooksLocal.map((el, index) => (
          <Grid item xs={12} sm={12} md={12} key={el.name}>
            <CardComponents
              title={el.name}
              description={el.description}
              childrenCollapse={
                <div className="m-16">
                  <RenderCode code={el.code} codeTS={el?.codeTS} />
                  <RenderActions linkCodeSanbox={el.linkDemo} />
                </div>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

CustomHook.propTypes = propTypes;
export default CustomHook;
