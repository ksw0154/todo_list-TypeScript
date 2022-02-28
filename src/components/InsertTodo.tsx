import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const InsertTodo = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  const addTodo = () => {
    console.log(startDate);
  };

  return (
    <Container>
      <InputBox>
        <TextBox type="text" placeholder="할 일을 입력해주세요." />
        <TodoDatePicker className="datepicker" locale={ko} dateFormat="yyyy년 MM월 dd일" selected={startDate} onChange={(date: Date) => setStartDate(date)} />
      </InputBox>
      <InsertButton type="button" value="추가" onClick={addTodo} />
    </Container>
  );
};

export default InsertTodo;

const Container = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: center;
`;

const InputBox = styled.div`
  .react-datepicker-wrapper {
    display: block;
  }
`;

const TextBox = styled.input`
  padding: 10px 15px;
  width: 250px;
  border: none;
  border-radius: 5px;
`;

const TodoDatePicker = styled(DatePicker)`
  padding: 5px 15px;
  width: 250px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
`;

const InsertButton = styled.input`
  margin: 0 5px;
  padding: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: beige;
`;
