(() => {
function article_on_click(event) {
  const target = event.target;
  const anchor = target.querySelector('h1 > a');
  if (anchor !== null) {
    window.location.href = anchor.href;
  } else {
    console.warn('`h1 > a` not found for article');
  }

  return;
}

function init_articles() {
  const articles = document.querySelectorAll('article');
  for (article of articles) {
    article.onclick = article_on_click;
  }

  return;
}

init_articles();
return;
})();
