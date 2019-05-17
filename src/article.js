(function(exports) {
  function Article(text, url, image) {
    this.id = 0
    this.text = text
    this.url = url
    this.image = image
  }

  Article.prototype.returnID = function() {
    return this.id
  }

  Article.prototype.returnText = function() {
    return this.text
  }

  Article.prototype.returnURL = function() {
    return this.url
  }
  
  Article.prototype.returnImage = function() {
    return this.image
  }

  exports.Article = Article;
})(this);
