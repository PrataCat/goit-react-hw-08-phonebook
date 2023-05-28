import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px auto;
  padding: 40px 20px;
  width: 320px;
  background: radial-gradient(
    100% 100% at 100% 0,
    var(--accent-color-light) 0,
    var(--accent-color-dark) 100%
  );
  border-radius: 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  color: #fff;
`;

export const FormInput = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 2px;
  outline: none;
`;

export const FormButton = styled.button`
  padding: 10px;
  width: 50%;
  text-align: center;
  background: linear-gradient(
    355deg,
    var(--accent-color-light),
    var(--accent-color-dark)
  );

  font-weight: 500;
  font-size: 18px;
  color: #fff;

  border: none;
  border-radius: 2px;
  outline: none;

  :focus {
    box-shadow: var(--accent-color-light) 0 0 0 1.5px inset,
      rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      var(--accent-color-light) 0 -3px 0 inset;
  }

  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      var(--accent-color-dark) 0 -1px 0 inset;
    transform: translateY(2px);
  }
`;
