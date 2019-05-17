(function(exports) {
  function ArticleList() {
    this.list = []
  }

  ArticleList.prototype.returnList = function() {
    return this.list
  }

  ArticleList.prototype.addArticle = function(text, url, image) {
    var article = new Article(text, url, image)
    this.list.push(article)
    this.addID(article)
  }

  ArticleList.prototype.addID = function(article) {
    article.id = this.list.indexOf(article)
  }

  exports.ArticleList = ArticleList;
})(this);
