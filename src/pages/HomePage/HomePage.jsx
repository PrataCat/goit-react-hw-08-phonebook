import { StyledLink, Title } from './HomePage.styled';

const HomePage = () => {
  return (
    <Title>
      Wellcome to the <StyledLink to="/contacts">My Contacts </StyledLink>app
    </Title>
  );
};

export default HomePage;
