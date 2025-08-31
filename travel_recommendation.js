const user_destination = document.getElementById("search");

const searchBtn = document.getElementById("search-btn");
const reset_btn = document.getElementById("reset")

const search_result = document.getElementById("search-results");

function search_destination(){
    console.log(user_destination.value);

    fetch('./travel_recommendation_api.json')
    .then(response =>{
        return response.json()
        })   
        .then( data =>{
            const countries = data["countries"];
            const temples = data["temples"];
            const beaches = data["beaches"];
            console.log(beaches);
            
            
            if (user_destination.value.toLowerCase() == 'countries' || user_destination.value.toLowerCase() == 'country'){
                console.log(user_destination.value.toLowerCase() == 'country');
                countries.forEach(country => {
                    console.log(country["name"]);
                    const div = document.createElement("div")
                    div.innerHTML = `<img src="" alt="">
                            <h2>${country['name']}</h2>
                            <img ${"width=20%"} />
                            <h3>${country['cities'][0]['name']}</h3>
                            <p>${country['cities'][0]['description']}</p>
                            <a href=""><button>Visit</button></a>
                            <h3>${country['cities'][1]['name']}</h3>
                            <p>${country['cities'][1]['description']}</p>
                            <a href=""><button>Visit</button></a>
                    </section>
                `;
                search_result.appendChild(div);
                });
            }
            else if(user_destination.value.toLowerCase() == 'temples' ) {
                console.log(user_destination.value.toLowerCase() == 'temples' )
                temples.forEach(temple =>{
                    console.log(temple['name']);
                     const div = document.createElement("div")
                    div.innerHTML = `<img src="" alt="">
                            <h2>${temple['name']}</h2>
                            <img ${"width=20%"} />
                            <p>${temple['description']}</p>
                            <a href=""><button>Visit</button></a>
                    </section>
                `;
                search_result.appendChild(div);
                    
                })
            }
            else if(user_destination.value.toLowerCase() == 'beaches') {
                beaches.forEach(beach =>{
                    console.log(beach['name']);
                    const div = document.createElement("div")
                    div.innerHTML = `<img src="" alt="">
                            <h2>${beach['name']}</h2>
                            <img ${"width=20%"} />
                            <p>${beach['description']}</p>
                            <a href=""><button>Visit</button></a>
                    </section>
                `;
                search_result.appendChild(div);
                })             
            }
        });


    user_destination.innerHTML  = "";
    }


function resetBtn() {
    user_destination.value = "";
    console.log("reset");
    
    search_result.innerHTML = '';
}

        

searchBtn.addEventListener('click', search_destination);
reset_btn.addEventListener('click', resetBtn);