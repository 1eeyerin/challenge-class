import styled from 'styled-components';
import AsideHeader from './AsideHeader';
import AsideList from './AsideList';

const Aside = () => {
  return (
    <StyledAside>
      <AsideHeader />
      <AsideList />
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  height: 100%;
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export default Aside;
