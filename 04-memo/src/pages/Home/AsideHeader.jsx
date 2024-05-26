import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addMemo, deleteMemo } from '../../redux/slices/memoSlice';

const AsideHeader = () => {
  const memoLength = useSelector(({ memo }) => memo.memos.length);
  const dispatch = useDispatch();

  const handleAddMemo = () => {
    dispatch(addMemo());
  };

  const handleDeleteMemo = () => {
    if (memoLength <= 1) {
      alert('하나 이상의 메모는 남겨두어야 합니다.');
      return;
    }

    dispatch(deleteMemo());
  };

  return (
    <StyledHeader>
      <StyledButton type="button" onClick={handleAddMemo}>
        새 메모 작성하기
      </StyledButton>
      <StyledButton type="button" onClick={handleDeleteMemo}>
        삭제
      </StyledButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
  padding: 12px 16px;
  position: sticky;
  top: 0px;
  background-color: var(--color-base-background);
  border-top-left-radius: 10px;
`;

const StyledButton = styled.button`
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

export default AsideHeader;
