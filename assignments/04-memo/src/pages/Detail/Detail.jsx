import { useParams } from 'react-router-dom';
import Article from '@/components/Layout/Article';

const Detail = () => {
  const { id } = useParams();

  return <Article id={id} />;
};

export default Detail;
