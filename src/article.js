(function(exports) {
  function Article(text, url, image) {
    this.id = 0
    this.text = text
    this.url = url
    this.image = image
  }

  Article.prototype.returnID = function() {
    this.id
  }

  Article.prototype.returnText = function() {
    this.text
  }
  Article.prototype.returnURL = function() {
    this.url
  }
  Article.prototype.returnImage = function() {
    this.image
  }
});
