import styled from 'styled-components';

export const FilterLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
`;

export const FilterInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  background-color: #ebebee;

  border: 3px solid;
  border-image: linear-gradient(
      355deg,
      var(--accent-color-light),
      var(--accent-color-dark)
    )
    10;
`;
