const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');
  console.log('clickedElement :', clickedElement);

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute('href');
  console.log('articleSelector :', articleSelector);

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle :', targetArticle);

  targetArticle.classList.add('active');
};

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
optTitleSelector = '.post-title',
optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  const titleList = document.querySelector(optTitleListSelector);
  /*titleList.innerHTML = '';*/

  /* for each article */

  const articles = document.querySelectorAll(optArticleSelector);
  for (article of articles) {

  /* get the article id */

  const articleId = article.getAttribute('id');

  /* find the title element */

  const articleTitle = article.querySelector(optTitleSelector).innerHTML;

  /* get the title from the title element */

  /* create HTML of the link */

  const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
  console.log('linkHTML' + linkHTML);
  /* insert link into titleList */

  /*
  titleList.innerHTML = titleList.innerHTML + linkHTML;
  }*/
            
  titleList.insertAdjacentHTML('afterbegin', linkHTML);
  }
}

generateTitleLinks();
  

