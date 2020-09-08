import { fetchData } from '../api/meaningCloud';

const handleArticleSubmit = async (article) => {
  let result = await fetchData(article);
  return result;
};

export { handleArticleSubmit };
