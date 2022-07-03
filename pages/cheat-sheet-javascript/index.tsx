import { Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import InputSearch from "components/MaterialComponents/InputSearch";
import Timer from "helpers/timer";
import CustomImageList from "components/ImageList";
import { CheatSheetJavascriptData } from "data/cheat-sheet-javascript";
const propTypes = {};

interface IRememberJavascript {}

const RememberJavascript = (props: IRememberJavascript) => {
  //! State
  const timer = useRef(new Timer());
  const [lessonsLocal, setLessonsLocal] = useState(CheatSheetJavascriptData);
  const [valueSearch, setValueSearch] = useState("");

  //! Function
  const onChangeSearch: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (e) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  //! Effect
  useEffect(() => {
    if (valueSearch) {
      timer.current.debounce(() => {
        setLessonsLocal((prev) => {
          const nextCustomHooks = CheatSheetJavascriptData.filter((el) => {
            return el.title.toLowerCase().includes(valueSearch.toLowerCase());
          });

          return nextCustomHooks;
        });
      }, 300);
    } else {
      setLessonsLocal(CheatSheetJavascriptData);
    }
  }, [valueSearch]);

  //! Render
  return (
    <div className="remember-javascript">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4" marginBottom={4}>
          JS CheatSheet
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
        {lessonsLocal.length === 0 && (
          <Typography className="p-16" variant="h6" marginBottom={4}>
            Không thấy dữ liệu tìm thấy
          </Typography>
        )}
        <Grid item xs={12} sm={12} md={12}>
          <CustomImageList data={CheatSheetJavascriptData}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default RememberJavascript;
