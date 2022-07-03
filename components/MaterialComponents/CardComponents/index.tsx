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
  description?: JSX.Element[] | JSX.Element | string;
  regexValue?: string;
  childrenContent?: JSX.Element[] | JSX.Element;
  childrenAction?: JSX.Element[] | JSX.Element;
  childrenCollapse?: JSX.Element[] | JSX.Element;
}

const CardComponents = (props: CardComponentsI) => {
  const {
    title = "Title",
    description = "",
    regexValue = "regexValue",
    childrenContent,
    childrenAction,
    childrenCollapse,
  } = props;

  const showDescription = description && (
    <Paper className="desc bg-grey-29 color-white m-16" sx={{ p: 2 }}>
      {description}
    </Paper>
  );
  //! State
  const [hasDescription, setHasDescription] = useState(false);

  //! Function
  const toggleDescription = () => {
    setHasDescription(!hasDescription);
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
      <CardContent className="card-content">
        <Collapse className="card-content__collapse" in={hasDescription}>
          {showDescription}
          {childrenCollapse}
        </Collapse>
        {/* Description */}
        {childrenContent && (
          <div className="card-content__children">{childrenContent}</div>
        )}
      </CardContent>

      {/* INPUT TEST REGEX AND RENDER RESULT */}
      {childrenAction && (
        <CardActions className="card-actions">{childrenAction}</CardActions>
      )}
    </Card>
  );
};

export default CardComponents;
