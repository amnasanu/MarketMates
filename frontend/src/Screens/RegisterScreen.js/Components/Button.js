import React from 'react'
import styled from 'styled-components'

function Button({ content }) {
  return (
    <StyledButton>{content}</StyledButton>
  )
}


const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c, #03217b);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 150px;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(to right, #03217b, #14163c);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
`;

export default Button