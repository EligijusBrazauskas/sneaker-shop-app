import styled from "styled-components";
import { lightGrayHover, lightGrayText } from "../variables";

export const NoResultsWrapper = styled.div`
  height: 100%;
  width: 70%;
  background-color: white;
  padding: 20px;
  border-radius: 18px;
  border: 2px solid ${ lightGrayHover };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin: 0 auto;
  text-align: center;
  color: ${ lightGrayText };
  
  .icon-container {
    font-size: 100px;
    color: ${ lightGrayHover };
  }
`;