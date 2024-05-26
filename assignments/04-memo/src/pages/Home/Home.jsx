import { useSelector } from 'react-redux';
import MemoEditor from '@/components/Layout/MemoEditor';

const Home = () => {
  const selectedMemoId = useSelector(({ memo }) => memo.selectedMemoId);

  return <MemoEditor id={selectedMemoId} />;
};

export default Home;
