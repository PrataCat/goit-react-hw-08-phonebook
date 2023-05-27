import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const OutLink = styled.button`
  color: black;
  font-weight: 400;
  font-size: 18px;
  background-color: transparent;
  border: none;
`;

export const Title = styled.h3`
  color: black;
  font-weight: 400;
  font-size: 18px;

  & span {
    font-weight: 600;
    color: var(--accent-color-dark);
  }
`;
