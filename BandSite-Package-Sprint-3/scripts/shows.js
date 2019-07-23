console.log("henlo worl!");
window.onload = function() {

    getAxiosData();

}
const id = "1ea64b63-d8fd-4be7-9dfd-9b1f1c802a94&fbclid=IwAR3ZQhnljSxr8dRaQhzguMGSk6fHn4GKvKSzk5H_uUPMa9CzE-HV7BhNFt8";
const url = "https://project-1-api.herokuapp.com/showdates?api_key=" + id;
let showDataArray = [];
function getAxiosData() {
    axios.get(url)
    .then(function (response) {
        //Handle Success
        showDataArray = response.data;
        console.log(showDataArray);

        console.log(showDataArray[2].place);

        let shows = document.querySelector(".bandsite-shows__showtimes__table");

        for (let i = 0; i < showDataArray.length; i++) {
            let showCard = document.createElement('div');
            showCard.classList.add(".bandsite-shows__showtimes__table__row");
            showCard.innerHTML = `
                <div class="bandsite-shows__showtimes__table__row">
                    <div class="bandsite-shows__showtimes__table__column dates">
                        <h2 class="name">DATE</h2>
                        <h2 class="date-value value">Monday Dec 17 2018</h2>
                    </div>
                    <div class="bandsite-shows__showtimes__table__column venue">
                        <h2 class="name">VENUE</h2>
                        <h2 class="venue-value value">Ronald Lane</h2>
                    </div> 
                    <div class="bandsite-shows__showtimes__table__column location">
                        <h2 class="name">LOCATION</h2>
                        <h2 class="location-value value">San Francisco, CA</h2>
                    </div>
                    <div class="bandsite-shows__showtimes__table__column btn">
                        <button><h2>BUY TICKETS</h2></button>
                    </div>
                </div>
            `;
            let showDate = showCard.querySelector('.date-value');
            let showVenue = showCard.querySelector('.venue-value');
            let showLocation = showCard.querySelector('.location-value');

            showDate.innerHTML = `${showDataArray[i].date}`;
            showVenue.innerHTML = `${showDataArray[i].place}`;
            showLocation.innerHTML = `${showDataArray[i].location}`;

            shows.appendChild(showCard);
        }
    })
    .catch(function (error) {
        console.log("error");
        alert("error");
    })
}