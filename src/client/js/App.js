import { handleArticleSubmit } from './Form';

/**
 * @description Initial load
 */
const appInit = () => {
  let newsSubmit = document.getElementById('news-submit');
  let newsArticle = document.getElementById('news-article');

  console.log('API_BASE_URL', API_BASE_URL);

  // LISTENS FOR THE ARTICLE SUBMIT BUTTON
  newsSubmit.addEventListener('click', (event) => {
    handleArticleSubmit(newsArticle.value);
  });
};

export { appInit };
