(function(exports) {
  function testArticleListStartsEmpty() {
    articlelist = new ArticleList()

    if (articlelist.returnList().length !== 0) {
      throw new Error("Article list does not start with an empty array.")
    }
  }
testArticleListStartsEmpty()
})(this);

(function(exports) {
  function testListFunctionsAsExpected() {
    articlelist = new ArticleList()

    articlelist.addArticle("TEXT", "URL", "IMAGE")

    if (articlelist.returnList().length !== 1) {
      throw new Error("Article is not added to the list array.")
    }
    if (!articlelist.returnList()[0] instanceof Article) {
      throw new Error("Article is not added as an article model to the list array.")
    }
    if (articlelist.returnList()[0].returnText() !== "TEXT") {
      throw new Error("Article model does not save its parameters.")
    }
  }
testListFunctionsAsExpected()
})(this);

(function(exports) {
  function testAddsArticleID() {
    articlelist = new ArticleList()

    articlelist.addArticle("TEXT", "URL", "IMAGE")
    articlelist.addArticle("TXET", "LRU", "EGAMI")

    if (articlelist.returnList()[0].id !== 0) {
      throw new Error("Article was not given the correct ID.")
    }
    if (articlelist.returnList()[1].id !== 1) {
      throw new Error("Article was not given the correct ID.")
    }
  }
testAddsArticleID()
})(this);
