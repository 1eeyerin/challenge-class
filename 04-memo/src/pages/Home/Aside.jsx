import styled from 'styled-components';

const Aside = () => {
  return (
    <StyledAside>
      <StyledHeader>
        <StyledTextButton type="button">새 메모 작성하기</StyledTextButton>
        <StyledTextButton type="button">삭제</StyledTextButton>
      </StyledHeader>
      <StyledUl>
        <li>
          <StyledButton>
            <StyledStrong>새로운 메모</StyledStrong>
            <StyledTime>오전 3:00</StyledTime>
          </StyledButton>
        </li>
      </StyledUl>
    </StyledAside>
  );
};

const StyledAside = styled.aside`
  height: 100%;
  border-right: 1px solid var(--color-border);
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: var(--baseBackground);
  border-top-left-radius: 10px;
`;

const StyledTextButton = styled.button`
  font-size: 13px;
  font-weight: 500;
  background-color: none;
  color: var(--color-foreground);
  transition: all 120ms ease 0s;
  padding: 4px 8px;

  &:hover {
    color: #121212;
    font-weight: 600;
  }
`;

const StyledUl = styled.ul`
  padding: 20px 12px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0px;
  overflow-x: hidden;
`;

const StyledButton = styled.button`
  height: 56px;
  border-radius: 4px;
  background-color: var(--color-primary);
  width: 100%;
  padding: 12px 24px;
  display: block;
`;

const StyledStrong = styled.strong`
  margin: 0px 0px 2px;
  font-size: 13px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

const StyledTime = styled.time`
  font-size: 12px;
  color: #404040;
`;

export default Aside;
