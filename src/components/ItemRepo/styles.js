import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 1rem;
  padding: 1rem;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }

  button {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 100rem;
  }
  button.remover {
    background-color: #ff4646;
    color: #ffffff;
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
