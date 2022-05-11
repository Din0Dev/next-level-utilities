import React, { Fragment, useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardComponents from "components/MaterialComponents/CardComponents";
import { lesson } from "data/lesson";
import RenderCode from "./components/RenderCode";
import RenderActions from "./components/RenderActions";
import InputSearch from "components/MaterialComponents/InputSearch";
import Timer from "helpers/timer";
import DialogComponents from "components/MaterialComponents/DialogComponents";
import RenderTestExam from "./components/RenderTestExam";
const propTypes = {};

interface LessonI {}

const Lesson = (props: LessonI) => {
  //! State
  const timer = useRef(new Timer());
  const [lessonsLocal, setLessonsLocal] = useState(lesson);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (valueSearch) {
      timer.current.debounce(() => {
        setLessonsLocal((prev) => {
          const nextCustomHooks = lesson.filter((el) => {
            return el.title.toLowerCase().includes(valueSearch.toLowerCase());
          });

          return nextCustomHooks;
        });
      }, 300);
    } else {
      setLessonsLocal(lesson);
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
    <div className="lesson">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4" marginBottom={4}>
            Lessons
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
        {lessonsLocal.map((el, index) => (
          <Grid item xs={12} sm={12} md={12} key={el.title}>
            <CardComponents
              title={el.title}
              description={el.question}
              childrenCollapse={
                <div className="m-16">
                  <RenderCode code={el.result} codeTS={el?.resultTS} />
                </div>
              }
            />
          </Grid>
        ))}
        <DialogComponents
          titleButton="Test Exam"
          dialogTitle="Test Excample"
          dialogContent={<div>Content</div>}
        />
      </Grid>
    </div>
  );
};

Lesson.propTypes = propTypes;
export default Lesson;
