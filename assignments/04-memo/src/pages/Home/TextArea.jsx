import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import styled from 'styled-components';
import usePreviousValue from '@/hooks/usePreviousValue';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { updateMemoContent } from '@/redux/slices/memoSlice';

const TextArea = () => {
  const { content, selectedMemoId } = useShallowEqualSelector(
    ({ memo: { memos, selectedMemoId } }) => {
      return {
        content: memos.find((item) => item.id === selectedMemoId).content,
        selectedMemoId,
      };
    },
  );
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const prevSelectedMemoId = usePreviousValue(selectedMemoId);
  const [textAreaValue, setTextAreaValue] = useState('');

  const debouncedUpdateMemoContent = debounce((value) => {
    dispatch(updateMemoContent(value));
  }, 100);

  const handleChange = ({ target }) => {
    setTextAreaValue(target.value);
    debouncedUpdateMemoContent(target.value);
  };

  useEffect(() => {
    if (prevSelectedMemoId !== selectedMemoId) {
      setTextAreaValue(content);
      textareaRef.current.focus();
    }
  }, [selectedMemoId, content, prevSelectedMemoId]);

  return (
    <StyledTextarea
      ref={textareaRef}
      value={textAreaValue || ''}
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
