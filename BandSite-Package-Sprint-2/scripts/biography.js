window.onload = function() {
    //Document Targeted Variables
    let commentSection = document.querySelector('.bandsite__conversation__old-comments');
    let oldCommentCard = document.querySelector('.bandsite__conversation__old-comments__card');


    
    let commentList = document.querySelector('.form');
    
    commentList.addEventListener('submit', displayComment);

    //function 1 with an input, append the comment section with your new data
    function postComment(nameParameter, dateParameter, commentParameter) {
        //Declare newCommentCard which is to add a div in comments
        let newCommentCard = document.createElement('div');
        //Get the inner html of the old comment cards
        newCommentCard.className = 'bandsite__conversation__old-comments__card__new';
        //inject into the new old comment card
        newCommentCard.innerHTML = oldCommentCard.innerHTML;

        //Change default Old comments content to new user name, date, and comment
        let newUserInfo = newCommentCard.querySelector('.bandsite__conversation__old-comments__card__text');
        let newUserName = newUserInfo.querySelector('.old-user-name');
        let newUserDate = newUserInfo.querySelector('.old-user-date');
        let newUserComment = newUserInfo.querySelector('.old-user-comment');
        
        //adds input as an inner html
        newUserName.innerHTML = `${nameParameter}`;
        newUserDate.innerHTML = `${dateParameter}`;
        newUserComment.innerHTML = `${commentParameter}`;
        
        console.log(newUserName);
        console.log(newUserDate);
        console.log(newUserComment);
        
        //adds the newCommentCard to commentSection
        commentSection.appendChild(newCommentCard);
        
    }

    function displayComment(event) {
        event.preventDefault();

        let nameArguement = event.target.user.value;
        let commentArguement = event.target.comment.value;
        let today = new Date();
        let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
        let dateArguement = date;
        //let dateArguement = 5;

        postComment(nameArguement, dateArguement, commentArguement);
    }
}