import { useSelector } from 'react-redux';
import Article from '@/components/Layout/Article';

const Home = () => {
  const selectedMemoId = useSelector(({ memo }) => memo.selectedMemoId);

  return <Article id={selectedMemoId} />;
};

export default Home;
