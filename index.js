console.log("HOLA");
//bb0ab11ace1348fc93088ac44f07efcb
let newsaccordian = document.getElementById('newsaccordian')
let source = 'the-times-of-india';
let apiKey = 'bb0ab11ace1348fc93088ac44f07efcb'

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newsHtml = "";

        articles.forEach(function (element, index) {

            let news = ` <div class="card">
<div class="card-header" id="heading${index}">
  <h2 class="mb-0">
    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
    <b>Breaking News ${index+1}:</b> ${element["title"]}
    </button> 
  </h2>
</div>

<div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsaccordian">
  <div class="card-body">${element["content"]}. <a href="${element['url']}" target="_blank">Read more here </a> </div>
</div>
</div>`;
            newsHtml += news;
        });
        newsaccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

