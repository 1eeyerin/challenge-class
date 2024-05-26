import styled from 'styled-components';
import { formatDate } from '../../utils/timeUtils';
import { ellipsisStyle } from '../../styles/utils';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';
import { updateSelectedMemoId } from '../../redux/slices/memoSlice';
import { useDispatch } from 'react-redux';

const formatMemoContent = (content, length) => {
  if (content.length >= length) return content.slice(0, length) + '...';

  return content;
};

const AsideList = () => {
  const dispatch = useDispatch();
  const { memos, selectedMemoId } = useShallowEqualSelector(({ memo }) => {
    return {
      memos: memo.memos,
      selectedMemoId: memo.selectedMemoId,
    };
  });

  const onClick = ({ target }) => {
    const buttonId = target.dataset.id || target.closest('button')?.dataset?.id;

    if (!buttonId) return;
    dispatch(updateSelectedMemoId(buttonId));
  };

  return (
    <StyledUl onClick={onClick}>
      {[...memos].map((memo) => (
        <li key={memo.id}>
          <StyledButton
            $selected={selectedMemoId === memo.id}
            data-id={memo.id}
          >
            <StyledStrong>
              {formatMemoContent(memo.content, 14) || '새로운 메모'}
            </StyledStrong>
            <StyledTime>
              {formatDate(memo.createdAt, 'A h:mm').toKor()}
            </StyledTime>
          </StyledButton>
        </li>
      ))}
    </StyledUl>
  );
};

const StyledUl = styled.ul`
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0px;
`;

const StyledButton = styled.button`
  height: 56px;
  border-radius: 4px;
  background-color: ${({ $selected }) =>
    $selected ? 'var(--color-primary)' : 'var(--color-background)'};
  width: 100%;
  padding: 12px 24px;
  display: block;
`;

const StyledStrong = styled.strong`
  margin: 0px 0px 2px;
  font-size: 13px;
  font-weight: 700;
  display: block;
  ${ellipsisStyle(1)};
`;

const StyledTime = styled.time`
  font-size: 12px;
  color: #404040;
`;

export default AsideList;
