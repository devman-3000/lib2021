let news_wrapper = document.querySelector(".list-group.list-group-horizontal")
news_wrapper.innerHTML = "";
let main_news_wrapper = document.querySelector("#main_news_wrapper")
news_wrapper.innerHTML = ""

let jsondata;
fetch("js/sample_data.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.main_news[0]["title"])
        let news = data.news;
        news.forEach(item => {
            news_wrapper.innerHTML +=
                ` <li class="list-group-item">
                <div class="d-flex flex-column pb-3">
                    <p class="date ms-auto m-0">${item.date}</p>
                    <h4 class="title">${item.title}</h4>
                    <p class="m-0 newstext">
                        ${item.description}
                    </p>
                </div>
            </li>
            `
        })
        main_news_wrapper.innerHTML =
            `
        <div class="white-cont card mt-5 p-2">
            <div class="row g-0">
                <div class="col-md-5 d-flex justify-content-center align-items-center">
                    <img class="img-fluid" src=${data.main_news[0]["img"]}
                        style="height:306px; width: 480px; border-radius: 15px;" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body d-flex flex-column">
                        <p class="date ms-auto">${data.main_news[0]["date"]}</p>
                            <h4 class="title mb-3">${data.main_news[0]["title"]}</h4>
                            <p class="fs-5 m-0">${data.main_news[0]["description"]}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    });