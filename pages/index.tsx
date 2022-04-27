import { useEffect } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import useGetTodoList from "hooks/todos/useGetTodoList";
import { List } from "interfaces";
import todoServices from "services/todoServices";
import useSagaCreators from "hooks/useSagaCreators";
import TodoModel from "models/todo.model";
import { Typography } from "@mui/material";

interface IHome {
  todoList: List<TodoModel>;
}

const Home: NextPage<IHome> = ({ todoList }) => {

  return (
    <div>
      <Typography>Hí anh em ! Đây là nơi tổng hợp hỗ trợ cho anh em về Regex,Helper các kiểu. Nói chung là anh Đôn bảo là làm cái này cho anh em tham khảo học hỏi. Thế nhé !</Typography>
    </div>
  );
};

export default Home;
