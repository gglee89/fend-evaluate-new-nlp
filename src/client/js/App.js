import { handleArticleSubmit } from './Form';
import { renderList } from './List';

/**
 * @description Initial App JS load
 */
const appInit = () => {
  let newsSubmit = document.getElementById('news-submit');
  let newsArticle = document.getElementById('news-article');

  // LISTENS FOR THE ARTICLE SUBMIT BUTTON
  newsSubmit.addEventListener('click', async (event) => {
    let result = await handleArticleSubmit(newsArticle.value);

    // PREPARES LIST TO HOLD API RESPONSE RESULTS
    renderList(result);
  });
};

export { appInit };
