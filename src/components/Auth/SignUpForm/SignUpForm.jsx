import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import {
  Wrap,
  FormLabel,
  Form,
  FormInput,
  FormButton,
} from '../AuthForm.styled';

const SignUpForm = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const hendleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setUserName(value);
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
      register({
        name: userName,
        email: email,
        password: password,
      })
    );
    navigateTo('/');

    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Username
          <FormInput
            type="text"
            name="name"
            value={userName}
            placeholder="name"
            onChange={hendleChange}
          />
        </FormLabel>
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
        <FormButton type="submit">Register</FormButton>
      </Form>
    </Wrap>
  );
};

export default SignUpForm;
