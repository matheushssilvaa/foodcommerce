import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export const Container = styled(Link)`
  position: fixed;
  right: 1.5rem;
  bottom: 0.5rem;

  background: ${({ theme }) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#AA2424')};
  }

  span:first-child {
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white};
    width: 2rem;
    height: 2rem;
  }

  span:last-child {
    margin-right: 0.75rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.yellow};
    margin-left: 15px;

    
  }
  
`