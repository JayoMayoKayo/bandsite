window.onload = function() {
    //Variables
    let oldCommentArray = [];
    let commentList = document.querySelector('.form');
    let oldComments = document.querySelector('.bandsite__conversation__old-comments');

    //These functions will not run until the entire page is loaded
    retrieveAxiosData(oldCommentArray);
    commentList.addEventListener('submit', submitComment);

    
};
//Global Variables
const id = "1ea64b63-d8fd-4be7-9dfd-9b1f1c802a94&fbclid=IwAR3ZQhnljSxr8dRaQhzguMGSk6fHn4GKvKSzk5H_uUPMa9CzE-HV7BhNFt8";
const url = "https://project-1-api.herokuapp.com/comments?api_key=" + id;
let oldComments = document.querySelector('.bandsite__conversation__old-comments');
//this function does an axios get request for the old comments
function retrieveAxiosData(oldCommentArrayParam) {
    axios.get(url)
    .then(function (response) {
        //Handle Success
        oldCommentArrayParam = response.data;

        let oldComments = document.querySelector('.bandsite__conversation__old-comments');
        oldComments.innerHTML = '';
        for (let i = 0; i < oldCommentArrayParam.length; i++) {
            oldComments = document.querySelector('.bandsite__conversation__old-comments');
            let commentCard = document.createElement('div');
            commentCard = document.createElement('div');
            commentCard.classList.add('.bandsite__conversation__old-comments__card');
            commentCard.innerHTML = `
                <div id="old-comment-card" class="bandsite__conversation__old-comments__card">    
                    <div class="bandsite__conversation__old-comments__card__icon">
                        <img src="./assets/new-user-profile.jpg" alt="Avatar">
                    </div>
                    <div class="bandsite__conversation__old-comments__card__text">
                        <div class="bandsite__conversation__old-comments__card__text__name">
                            <h5 class="old-user-name">sdf</h5>
                        </div>
                        <div class="bandsite__conversation__old-comments__card__text__date">
                            <h5 class="old-user-date">sdf</h5>
                        </div>
                        <div class="bandsite__conversation__old-comments__card__text__comment">
                            <h5 class="old-user-comment">sdfsdfsfsdfsdfsdfsdfsd</h5>
                        </div>
                    </div>
                </div>
            `;
            let nameData = commentCard.querySelector('.old-user-name');
            let commentData = commentCard.querySelector('.old-user-comment');
            let dateData = commentCard.querySelector('.old-user-date');
            
            millisecondsDate = oldCommentArrayParam[i].timestamp;
            let fullDate = new Date(millisecondsDate);
            let dateYears = fullDate.getFullYear();
            let dateMonths = fullDate.getMonth() + 1;
            let dateDays = fullDate.getDate();

            nameData.innerHTML = `${oldCommentArrayParam[i].name}`;
            commentData.innerHTML = `${oldCommentArrayParam[i].comment}`;
            dateData.innerHTML = `${dateMonths + "/" + dateDays + "/" + dateYears}`;        

            oldComments.insertBefore(commentCard, oldComments.firstChild);
        }
    })
    .catch(function (error) {
        //Handle Error
        console.log(error);
        alert('error');
    })
    return oldCommentArrayParam;
}
//this function waits for the event which is the submit button
function submitComment(event) {
    let newName = "";
    let newComment = "";
    
    event.preventDefault();
    newName = event.target.user.value;
    newComment = event.target.comment.value;

    pushAxiosData(newName, newComment);
}
//Gets the user comment information from submitComment function. Declares them in an object and axios post request
function pushAxiosData(nameParam, commentParam) {
    let newCommentObject = {
        name: "",
        comment: ""
    }

    newCommentObject.name = nameParam;
    newCommentObject.comment = commentParam;

    axios.post(url, newCommentObject)
    .then(function (response) {
        axios.get(url)
        .then(function (response) {
            let newCommentArray = [];
            retrieveAxiosData(newCommentArray);

        })
        .catch(function (error) {
            console.log(error);
            alert('test error');
        })
    })
    
}
