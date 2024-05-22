let left_btn = document.getElementsByClassName("bi-chevron-left")[0];
let right_btn = document.getElementsByClassName("bi-chevron-right")[0];
let cards = document.getElementsByClassName("cards")[0];
let search_result = document.getElementsByClassName("search_result")[0];
let search_input = document.getElementById("search_input");

left_btn.addEventListener("click", () => {
    cards.scrollLeft -= 130;
})
right_btn.addEventListener("click", () => {
    cards.scrollLeft += 130;
})

let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
    .then((data) => {
        data.forEach(ele => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele;
            let card = document.createElement('a');
            card.classList.add("card");
            card.href =`The boys.html`;
            card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
                    <div class="rest_card">
                        <img src="${bposter}" alt="${name}">
                        <div class="cont">
                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre}, ${date}</p>
                                <h3><span>IMDB</span> <i class="bi bi-star-fill"
                                        style="position: relative;bottom: 3px; margin-right: 3px;"></i> ${imdb}</h3>

                            </div>
                        </div>
                    </div>`
            cards.appendChild(card);


        });

        // document.getElementById("title").innerText = data[0].name;
        document.getElementById("gen").innerText = data[0].genre;
        document.getElementById("dates").innerText = data[0].date;
        document.getElementById("rate").innerHTML = `
    <span>IMDB</span> <i class="bi bi-star-fill" style="position: relative;
                    bottom: 3px; margin:0 5px 0 2px;"></i>${data[0].imdb}</h3>`;

        data.forEach(ele => {
            let { name, imdb, date, sposter, genre, url } = ele;
            let card = document.createElement('a');
            card.classList.add("crd");
            card.href =`The boys.html`;
            card.innerHTML = `
                    <img src="${sposter}">
                        <div class="cont">
                            <h3>${name}</h3>
                            <p>${genre}, ${date} <span>IMDB</span> <i class="bi bi-star-fill" style="position: relative;
                            bottom: 3px; margin:0 2px;"></i>${imdb}</p>
                        </div>`
            search_result.appendChild(card);
        });
        // search filter
        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase();
            let a = search_result.getElementsByTagName("a");
            for (let i = 0; i < a.length; i++) {
                let b = a[i].getElementsByClassName("cont")[0];
                let TextValue = b.textConten || b.innerText;
                if (TextValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "flex";
                    search_result.style.visibility = "visible";
                    search_result.style.opacity = 1;
                } else {
                    a[i].style.display = "none";
                }

                if (search_input.value == 0) {
                    search_result.style.visibility = "hidden";
                    search_result.style.opacity = 0;
                }
            }
        })

        let video = document.getElementsByTagName("video")[0];
        let play = document.getElementById('play');
        play.addEventListener("click",() =>{
            if (video.paused) {
                video.play();
                play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`;
            } else {
                video.pause();
                play.innerHTML = `Pause <i class="bi bi-pause-fill"></i>`;
            }
        })

        let series = document.getElementById("series");
        series.addEventListener("click", () => {
            cards.innerHTML = "";
            let series_array = data.filter((ele) => {
                return ele.type === "series";
            });

            series_array.forEach(ele => {
                let { name, imdb, date, sposter, bposter, genre, url } = ele;
                let card = document.createElement('a');
                card.classList.add("card");
                card.href =`The boys.html`;
                card.innerHTML = `
                        <img src="${sposter}" alt="${name}" class="poster">
                                    <div class="rest_card">
                                        <img src="${bposter}" alt="${name}">
                                        <div class="cont">
                                            <h4>${name}</h4>
                                            <div class="sub">
                                                <p>${genre}, ${date}</p>
                                                <h3><span>IMDB</span> <i class="bi bi-star-fill"
                                                        style="position: relative;bottom: 3px; margin-right: 3px;"></i> ${imdb}</h3>
                                            </div>
                                        </div>
                                    </div>`
                cards.appendChild(card);


            });


        })

        let movies=document.getElementById("movies");
        movies.addEventListener("click", () => {
            cards.innerHTML = "";
            let movie_arr = data.filter((ele) => {
                return ele.type === "movie";
            });

            movie_arr.forEach(ele => {
                let { name, imdb, date, sposter, bposter, genre, url } = ele;
                let card = document.createElement('a');
                card.classList.add("card");
                card.href =`The boys.html`;
                card.innerHTML = `
                        <img src="${sposter}" alt="${name}" class="poster">
                                    <div class="rest_card">
                                        <img src="${bposter}" alt="${name}">
                                        <div class="cont">
                                            <h4>${name}</h4>
                                            <div class="sub">
                                                <p>${genre}, ${date}</p>
                                                <h3><span>IMDB</span> <i class="bi bi-star-fill"
                                                        style="position: relative;bottom: 3px; margin-right: 3px;"></i> ${imdb}</h3>
                                            </div>
                                        </div>
                                    </div>`
                cards.appendChild(card);


            });


        })


    });