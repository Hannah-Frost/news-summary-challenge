var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test', true)

request.onload = function() {
  var data = JSON.parse(this.response)

  var list = new ArticleList()
  data.response.results.forEach(article => {
    list.addArticle(article.webTitle, article.webUrl, "no image found")
  })
}

request.send()
