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

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  const titleList = document.querySelector(optTitleListSelector);

  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);
  for (article of articles) {

    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML' + linkHTML);

    html = html + linkHTML;
    console.log('html :', html);}
  
  
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('links :', links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();
  

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /*
  const tagList = document.querySelector(optArticleTagsSelector);
  */
  /* START LOOP: for every article: */
  for (article of articles) {
    /* find tags wrapper */
    const articleTagList = article.querySelector(optArticleTagsSelector);
    console.log('articleTagList :', articleTagList);
    
    /* make html variable with empty string */
    
    let html = '';
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log('data-tags :', articleTags);
    /*
    */

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
console.log('articleTagsArray', articleTagsArray);
    /* START LOOP: for each tag */
   for (let tag of articleTagsArray){
    console.log('tag :', tag);
    
    /* generate HTML of the link */
    const tagsLinks = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
    console.log('tagLinks' + tagsLinks);
      /* add generated code to html variable */
      html = html + tagsLinks + '  ';
      console.log('html :', html);
   }
    /* END LOOP: for each tag */
    articleTagList.innerHTML = html;
    /* insert HTML of all the links into the tags wrapper */
    
  /* END LOOP: for every article: */
  }
}

generateTags();