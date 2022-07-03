import React, { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardComponents from "components/MaterialComponents/CardComponents";
import { QuestionsJavascriptData } from "data/questions-javascript";
import RenderCode from "./components/RenderCode";
import InputSearch from "components/MaterialComponents/InputSearch";
import Timer from "helpers/timer";
const propTypes = {};

interface QuestionsJavaScriptI {}

const QuestionsJavaScript = (props: QuestionsJavaScriptI) => {
  //! State
  const timer = useRef(new Timer());
  const [lessonsLocal, setLessonsLocal] = useState(QuestionsJavascriptData);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    if (valueSearch) {
      timer.current.debounce(() => {
        setLessonsLocal((prev) => {
          const nextCustomHooks = QuestionsJavascriptData.filter((el) => {
            return el.title.toLowerCase().includes(valueSearch.toLowerCase());
          });

          return nextCustomHooks;
        });
      }, 300);
    } else {
      setLessonsLocal(QuestionsJavascriptData);
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
    <div className="questions-javascript">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Typography variant="h4" marginBottom={4}>
            Những câu hỏi JavaScript trình độ Advanced
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
              description={
                <div className="desc m-16">
                  <span>{el.question}</span>

                  <RenderCode code={el.codeQuestion} />

                  <div className="select">
                    <ol>
                      {el.select.map((el, index) => {
                        return <li key={index}>{el}</li>;
                      })}
                    </ol>
                  </div>
                </div>
              }
              childrenCollapse={
                <div className="m-16">
                  <CardComponents
                    title={"Đáp Án"}
                    childrenCollapse={
                      <div className="result m-16">
                        <textarea className="result__textarea" disabled>
                          {el.result}
                        </textarea>
                      </div>
                    }
                  />
                </div>
              }
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

QuestionsJavaScript.propTypes = propTypes;
export default QuestionsJavaScript;
