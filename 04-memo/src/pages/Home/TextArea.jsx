import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateMemoContent } from '../../redux/slices/memoSlice';
import { useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector';

const TextArea = () => {
  const textareaRef = useRef(null);
  const prevSelectedMemoIdRef = useRef();
  const dispatch = useDispatch();
  const [textAreaValue, setTextAreaValue] = useState('');

  const { content, selectedMemoId } = useShallowEqualSelector(
    ({ memo: { memos, selectedMemoId } }) => {
      return {
        content: memos.find((item) => item.id === selectedMemoId).content,
        selectedMemoId,
      };
    },
  );

  const debouncedUpdateMemoContent = debounce((value) => {
    dispatch(updateMemoContent(value));
  }, 100);

  const handleChange = ({ target }) => {
    setTextAreaValue(target.value);
    debouncedUpdateMemoContent(target.value);
  };

  useEffect(() => {
    if (prevSelectedMemoIdRef.current !== selectedMemoId) {
      setTextAreaValue(content);
      prevSelectedMemoIdRef.current = selectedMemoId;
    }

    if (!textareaRef.current) return;
    textareaRef.current.focus();
  }, [selectedMemoId, content]);

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
