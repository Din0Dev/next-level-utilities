import { Grid, Tooltip, Typography } from "@mui/material";
import React, { Fragment, useEffect, useRef, useState } from "react";
import InputSearch from "components/MaterialComponents/InputSearch";
import Timer from "helpers/timer";
import { CheatSheetJavascriptData } from "data/cheat-sheet-javascript";
import HelpIcon from "@mui/icons-material/Help";

const propTypes = {};

interface IJavascriptConventions {}

let description = (
  <div>
    Coding Conventions là tập hợp các hướng dẫn về phong cách (style guidelines)
    cho ngôn ngữ lập trình.
    <br></br>
    Coding Conventions có thể là các quy tắc quy định
    bởi nhóm hoặc cá nhân.
    <br></br>
    <br></br>
    Chúng thường bao gồm:
    <br></br>
    <br></br>
    <ul>
      <li>
        * Quy tắc khai báo và đặt tên cho biến và hàm Các suy tắc sử dụng cho
        khoảng trắng, thụt đầu dòng và comments.
      </li>
      <br></br>
      <li>
        * Các ví dụ thực hành và quy tắc lập trình.
      </li>
    </ul>
    <br></br>
    Coding Conventions đảm bảo chất lượng:
    <br></br>
    <br></br>
    <ul>
      <li>
        * Cải thiện khả năng đọc code
      </li>
      <br></br>
      <li>
        * Làm cho việc bảo trì code dễ dàng hơn
      </li>
    </ul>
  </div>
);

const JavascriptConventions = (props: IJavascriptConventions) => {
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
            Coding Conventions{" "}
            <Tooltip title={description} placement="bottom-end">
              <HelpIcon />
            </Tooltip>
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
        <Grid item xs={12} sm={12} md={12}></Grid>
      </Grid>
    </div>
  );
};

export default JavascriptConventions;
