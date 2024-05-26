import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import styled from 'styled-components';
import usePreviousValue from '@/hooks/usePreviousValue';
import { updateMemoContent } from '@/redux/slices/memoSlice';

const TextArea = ({ id }) => {
  const textareaRef = useRef(null);
  const dispatch = useDispatch();
  const prevMemoId = usePreviousValue(id);
  const [textAreaValue, setTextAreaValue] = useState('');

  const content = useSelector(
    ({ memo: { memos } }) => memos.find((item) => item.id === id)?.content,
  );

  const debouncedUpdateMemoContent = debounce((value) => {
    dispatch(updateMemoContent(value));
  }, 350);

  const handleChange = ({ target }) => {
    setTextAreaValue(target.value);
    debouncedUpdateMemoContent(target.value);
  };

  useEffect(() => {
    if (prevMemoId !== id) {
      setTextAreaValue(content);
      textareaRef.current.focus();
    }
  }, [id, content, prevMemoId]);

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
