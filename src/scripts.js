var request = new XMLHttpRequest()

request.open('GET', 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test', true)

request.onload = function() {
  var data = JSON.parse(this.response)

  data.response.results.forEach(article => {
    console.log(article.webTitle)
    console.log(article.webUrl)
  })
}

request.send()
