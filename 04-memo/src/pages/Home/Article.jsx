import styled from 'styled-components';

const Article = () => {
  return (
    <StyledArticle>
      <StyledDate>2024년 5월 26일, 오전 3:05</StyledDate>
      <StyledTextarea />
    </StyledArticle>
  );
};

export default Article;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
`;

const StyledDate = styled.time`
  font-size: 10px;
  margin: 0px auto 24px;
  color: var(--color-foreground);
`;

const StyledTextarea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;
