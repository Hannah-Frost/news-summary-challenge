(function(exports) {
  function testArticleReturnsID() {
    article = new Article("TEXT", "URL", "IMAGE")

    if (article.returnID() !== "ID") {
      throw new Error("Article does not return the correct ID.")
    }
  }
testArticleReturnsID()
})(this);

(function(exports) {
  function testArticleReturnsText() {
    article = new Article("TEXT", "URL", "IMAGE")

    if (article.returnText() !== "TEXT") {
      throw new Error("Article does not return the correct text.")
    }
  }
testArticleReturnsText()
})(this);

(function(exports) {
  function testArticleReturnsText() {
    article = new Article("TEXT", "URL", "IMAGE")

    if (article.returnURL() !== "URL") {
      throw new Error("Article does not return the correct URL.")
    }
  }
testArticleReturnsURL()
})(this);

(function(exports) {
  function testArticleReturnsImage() {
    article = new Article("TEXT", "URL", "IMAGE")

    if (article.returnImage() !== "IMAGE") {
      throw new Error("Article does not return the correct image.")
    }
  }
testArticleReturnsImage()
})(this);
