import { Paper, TextField, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Collapse from "@mui/material/Collapse";

interface CardComponentsI {
  title: string;
  description: string;
  regexValue: string;
}

const CardComponents = (props: CardComponentsI) => {
  const {
    title = "Title",
    description = "Description",
    regexValue = "regexValue",
  } = props;

  const showDescription = (
    <Paper className="desc bg-grey-29 color-white" sx={{ p: 2 }}>
      {description}
    </Paper>
  );
  //! State
  const [hasDescription, setHasDescription] = useState(false);
  const [valueTest, setValueTest] = useState("");

  //! Function
  const toggleDescription = () => {
    setHasDescription(!hasDescription);
  };

  const onChangeValueTest = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValueTest(e.target.value);
  };

  //! Render
  return (
    <Card className="card-components" sx={{ minWidth: 275 }}>
      {/* OVERVIEW TITLE */}
      <CardHeader
        className="card-header"
        action={
          <div>
            <IconButton aria-label="settings" onClick={toggleDescription}>
              {hasDescription ? (
                <RemoveOutlinedIcon className="color-white" />
              ) : (
                <AddIcon className="color-white" />
              )}
            </IconButton>
          </div>
        }
        title={
          <Typography
            className="card-header__title cursor-pointer"
            sx={{ fontSize: 18 }}
            onClick={toggleDescription}
          >
            {title}
          </Typography>
        }
      />

      {/* SHOW DESCRIPTION OF REGEX AND VALUE REGEX */}
      <CardContent>
        {/* Description */}
        <Collapse in={hasDescription}>{showDescription}</Collapse>
        {/*  Regex Show */}
        <TextField
          className="regex-show"
          id="regex"
          variant="outlined"
          defaultValue={regexValue}
        />
      </CardContent>

      {/* INPUT TEST REGEX AND RENDER RESULT */}
      <CardActions className="card-actions">
        <Typography className="regex-test__title">Test string: </Typography>
        <TextField
          className="regex-test"
          onChange={(e) => onChangeValueTest(e)}
          id="regex-test"
          variant="outlined"
          defaultValue={valueTest}
        />
        <div className="regex-output">
          {valueTest && (
            <span>
              Output:{" "}
              <span>{new RegExp(regexValue).test(valueTest) ? "True" : "False"}</span>
            </span>
          )}
        </div>
      </CardActions>
    </Card>
  );
};

export default CardComponents;
