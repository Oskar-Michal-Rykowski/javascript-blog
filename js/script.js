const titleClickHandler = function (event) {
  event.preventDefault();
  const clickedElement = this;
  // console.log('Link was clicked!');

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
  }

  clickedElement.classList.add('active');
  //console.log('clickedElement :', clickedElement);

  const activeArticles = document.querySelectorAll('.posts article.active');

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
  }

  const articleSelector = clickedElement.getAttribute('href');
  //console.log('articleSelector :', articleSelector);

  const targetArticle = document.querySelector(articleSelector);
  //console.log('targetArticle :', targetArticle);

  targetArticle.classList.add('active');
};

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {
  console.log('customSelector :', customSelector);
  const titleList = document.querySelector(optTitleListSelector);

  let html = '';

  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
  console.log('articles :', articles);

  for (let article of articles) {
    const articleId = article.getAttribute('id');

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      '</span></a></li>';
    //console.log('linkHTML' + linkHTML);

    html = html + linkHTML;
    //console.log('html :', html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  //console.log('links :', links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks();

function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /*
  const tagList = document.querySelector(optArticleTagsSelector);
  */
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const articleTagList = article.querySelector(optArticleTagsSelector);
    //console.log('articleTagList :', articleTagList);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    //console.log('data-tags :', articleTags);
    /*
     */

    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    //console.log('articleTagsArray', articleTagsArray);
    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      //console.log('tag :', tag);

      /* generate HTML of the link */
      const tagsLinks = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      //console.log('tagLinks' + tagsLinks);
      /* add generated code to html variable */
      html = html + tagsLinks + '  ';
      //console.log('html :', html);
    }
    /* END LOOP: for each tag */
    articleTagList.innerHTML = html;
    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  //console.log('Tag was clicked!');

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  //console.log('href :' + href);

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  //console.log('tag :' + tag);

  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  //console.log('activeTagLinks :' + activeTagLinks);

  /* START LOOP: for each active tag link */
  for (let activeTagLink of activeTagLinks) {
    /* remove class active */
    activeTagLink.classList.remove('active');

    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const tagLinksHref = document.querySelectorAll('a[href="' + href + '"]');
  //console.log('tagLiksHref :' + tagLiksHref);

  /* START LOOP: for each found tag link */
  for (let tagLinkHref of tagLinksHref) {
    /* add class active */
    tagLinkHref.classList.add('active');

    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */

  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  /* find all links to tags */
  const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

  /* START LOOP: for each link */
  for (let tagLink of tagLinks) {
    /* add tagClickHandler as event listener for that link */
    tagLink.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors() {
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  /*
  const tagList = document.querySelector(optArticleTagsSelector);
  */
  /* START LOOP: for every article: */
  for (let article of articles) {
    /* find tags wrapper */
    const articleAuthorPlace = article.querySelector(optArticleAuthorSelector);
    //console.log('articleTagList :', articleTagList);

    /* make html variable with empty string */

    let html = '';

    /* get tags from data-tags attribute */
    const articleAuthor = article.getAttribute('data-author');
    //console.log('data-tags :', articleTags);

    html =
      html +
      'by' +
      '  ' +
      '<a href="#' +
      articleAuthor +
      '">' +
      articleAuthor +
      '</a>';
    //console.log('html :', html);

    /* END LOOP: for each tag */
    articleAuthorPlace.innerHTML = html;
    /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }
}

generateAuthors();
