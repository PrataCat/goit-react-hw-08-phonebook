import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  Wrap,
  FormLabel,
  Form,
  FormInput,
  FormButton,
} from '../AuthForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    navigateTo('/');

    setEmail('');
    setPassword('');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Email
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="email@domen.com"
            onChange={hendleChange}
          />
        </FormLabel>
        <FormLabel>
          Password
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={hendleChange}
          />
        </FormLabel>
        <FormButton type="submit">Login</FormButton>
      </Form>
    </Wrap>
  );
};
