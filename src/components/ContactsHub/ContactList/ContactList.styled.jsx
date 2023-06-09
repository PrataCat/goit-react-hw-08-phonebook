import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const ContactNumber = styled.span`
  display: block;
  font-size: 14px;
`;

export const ContactBtn = styled.button`
  height: 25px;
  margin-top: 5px;
  border: none;
  background-image: radial-gradient(
    100% 100% at 100% 0,
    var(--accent-color-light) 0,
    var(--accent-color-dark) 100%
  );
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
  color: #fff;
  cursor: pointer;
  transition: box-shadow 0.15s, transform 0.15s;
  font-weight: normal;
  font-size: 12px;
  letter-spacing: 0.08em;

  :focus {
    box-shadow: var(--accent-color-dark) 0 0 0 1.5px inset,
      rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      var(--accent-color-dark) 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      var(--accent-color-dark) 0 -1px 0 inset;
    transform: translateY(-1px);
  }

  :active {
    box-shadow: var(--accent-color-dark) 0 3px 7px inset;
    transform: translateY(1px);
  }
`;
