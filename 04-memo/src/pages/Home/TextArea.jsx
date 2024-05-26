import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateMemoContent } from '../../redux/slices/memoSlice';
import { useEffect, useRef } from 'react';

const TextArea = () => {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const selectedMemoContent = useSelector(
    ({ memo }) =>
      memo.memos.find((item) => item.id === memo.selectedMemoId).content,
  );

  const handleChange = (event) => {
    dispatch(updateMemoContent(event.target.value));
  };

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.focus();
  }, [selectedMemoContent]);

  return (
    <StyledTextarea
      ref={textareaRef}
      value={selectedMemoContent || ''}
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
