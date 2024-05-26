import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateMemoContent } from '../../redux/slices/memoSlice';

const TextArea = () => {
  const dispatch = useDispatch();
  const selectedMemo = useSelector(({ memo }) => {
    return memo.memos.find((item) => item.id === memo.selectedMemoId);
  });

  const handleChange = (event) => {
    dispatch(updateMemoContent(event.target.value));
  };

  return (
    <StyledTextarea
      value={selectedMemo.content || ''}
      onChange={handleChange}
    />
  );
};

const StyledTextarea = styled.textarea`
  all: unset;
  flex-grow: 1;
  font-size: 15px;
  line-height: 1.66;
`;

export default TextArea;
