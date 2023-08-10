import { styled } from "styled-components";

export const Paragraph = styled.article`
  .content {
    max-width: 50rem;
    min-width: 20rem;
    height: auto;

    border: 1px solid #008FFB;
    border-radius: 8px;
    
    background-color: #fefefe;

    padding: 0.5rem;
    margin-top: 10px;
  }

  .title {
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
  }

  .select {
    font-size: 16px;
    font-weight: 700;
  }

  .contentHeader {
    border: none;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
  }

  p {
    padding: 10px;
    font-size: 18px;
    white-space: pre-wrap;
    word-break: break-word;

    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .content {
      max-width: 25rem;
      min-width: 25rem; 
      height: auto;
    }
  }
`;
