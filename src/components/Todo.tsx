import styled from "styled-components";

const Todo = () => {
  return (
    <Container>
      <TodoBox>
        <input type="checkbox" />
        <TodoInfo>
          <TextBox>첫 번째 할일입니다. </TextBox>
          <DateBox>2022년 3월 4일까지</DateBox>
        </TodoInfo>
      </TodoBox>

      <ButtonBox>
        <Button type="button" value="수정" />
        <Button type="button" value="삭제" />
      </ButtonBox>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  background-color: white;
  width: 350px;
  text-align: start;
  padding: 15px 10px;
  border-radius: 5px;
  color: black;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const TodoBox = styled.div`
  display: flex;
  width: 100%;
`;

const TodoInfo = styled.div`
  width: 100%;
  margin-left: 5px;
  cursor: pointer;
`;

const TextBox = styled.div`
  font-weight: bold;
`;

const DateBox = styled.div`
  font-size: 13px;
  margin-top: 5px;
  color: gray;
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Button = styled.input`
  border: none;
  border-radius: 5px;
  background-color: beige;
  margin: 0 5px;
  cursor: pointer;
`;
