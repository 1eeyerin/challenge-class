import styled from 'styled-components';
import Aside from './Aside';
import Article from './Article';

const Home = () => {
  return (
    <StyledMain>
      <Aside />
      <Article />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  background-color: var(--baseBackground);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

export default Home;
