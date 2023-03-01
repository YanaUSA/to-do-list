import styled from 'styled-components';

export const Form = styled.form`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: end;
  border: 1px solid grey;
  padding: 20px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  width: 150px;
  margin-right: 50px;
  text-transform: capitalize;
`;

export const FormInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 5px 10px;
  margin-top: 10px;
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fix-content;
  height: 26px;
  padding: 8px;
  text-align: center;
  cursor: pointer;

  background-color: lightblue;
  border: 1px solid black;
  border-radius: 4px;
  transition: 250ms ease-in-out;
  color: black;

  :hover {
    color: red;
  }
`;
