import styled from 'styled-components';
import Aside from './Aside';
import Article from './Article';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeMemos } from '../../redux/slices/memoSlice';

const Home = () => {
  const dispatch = useDispatch();
  const memos = useSelector(({ memo }) => memo.memos);

  useEffect(() => {
    const memos = getLocalStorage('memos');

    dispatch(initializeMemos(memos || []));
  }, [dispatch]);

  useEffect(() => {
    if (!memos.length) return;

    setLocalStorage('memos', memos);
  }, [memos]);

  if (!memos.length) return;

  return (
    <StyledMain>
      <Aside />
      <Article />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: minmax(240px, 240px) 1fr;
  background-color: var(--color-base-background);
  margin: 0px auto;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
`;

export default Home;
