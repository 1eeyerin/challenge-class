import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from '../../utils/timeUtils';
import TextArea from './TextArea';

const Article = () => {
  const createdAt = useSelector(({ memo }) => memo.memos[0].createdAt);

  const formattedDate = formatDate(createdAt, 'YYYY년 M월 D일, A h:mm').toKor();

  return (
    <StyledArticle>
      <StyledDate>{formattedDate}</StyledDate>
      <TextArea />
    </StyledArticle>
  );
};

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

export default Article;
