window.onload = function() {
    //Global Variables
    let commentArray = [
        {
            nameObject: '1John Doe',
            commentObject: '1This is a test comment, get amped!',
            dateObject: '1mm/dd/yyyy'
        },
        {
            nameObject: '2John Doe',
            commentObject: '2This is a test comment, get amped!',
            dateObject: '2mm/dd/yyyy'
        },
        {
            nameObject: '3John Doe',
            commentObject: '3This is a test comment, get amped!',
            dateObject: '3mm/dd/yyyy'
        }
    ];

    let commentSection = document.querySelector('.bandsite__conversation__old-comments');
    let oldCommentCard = document.querySelector('.bandsite__conversation__old-comments__card');
    let commentList = document.querySelector('.form');

    //Run the Old comment function    
    commentList.addEventListener('submit', retrieveInputs);
    console.log("this is the first!");
    
    
    for (let j = 0; j < commentArray.length; j++) {
        let storedCommentCard = document.createElement('div');
        storedCommentCard.className = 'bandsite__conversation__old-comments__card__new';
        storedCommentCard.innerHTML = oldCommentCard.innerHTML;

        let oldUserInfo = storedCommentCard.querySelector('.bandsite__conversation__old-comments__card__text');
        let oldUserName = oldUserInfo.querySelector('.old-user-name');
        let oldUserComment = oldUserInfo.querySelector('.old-user-comment');
        let oldUserDate = oldUserInfo.querySelector('.old-user-date');

        oldUserName.innerHTML = `${commentArray[j].nameObject}`;
        oldUserComment.innerHTML = `${commentArray[j].commentObject}`;
        oldUserDate.innerHTML = `${commentArray[j].dateObject}`;
        
        commentSection.appendChild(storedCommentCard);
        //console.log(commentArray[j].nameObject);
    }

    //Adds the new comment to the existing comments
    function displayComment(nameParam, commentParam, dateParam) {
        console.log("this is the third!");
        //Declare newCommentCard which is to add a div in comments
        let newCommentCard = document.createElement('div');

        //Get the inner html of the old comment cards
        newCommentCard.className = 'bandsite__conversation__old-comments__card__new';

        //inject into the new old comment card
        newCommentCard.innerHTML = oldCommentCard.innerHTML;

        //Change default Old comments content to new user name, date, and comment
        let newUserInfo = newCommentCard.querySelector('.bandsite__conversation__old-comments__card__text');
        let newUserName = newUserInfo.querySelector('.old-user-name');
        let newUserComment = newUserInfo.querySelector('.old-user-comment');
        let newUserDate = newUserInfo.querySelector('.old-user-date');

        //adds input as an inner html
        newUserName.innerHTML = `${nameParam}`;
        newUserComment.innerHTML = `${commentParam}`;
        newUserDate.innerHTML = `${dateParam}`;

        //adds the newCommentCard to commentSection
        commentSection.insertBefore(newCommentCard, commentSection.firstChild);
    }
    
    //On Submit, function returns input values to array, then launches the displayComment Function
    function retrieveInputs(event) {
        event.preventDefault();
        console.log("this is the second!");

        //Declare a new object in the array, in the last position
        commentArray.push({
            nameObject: '4John Doe',
            commentObject: '4This is a test comment, get amped!',
            dateObject: '4mm/dd/yyyy'
            }
        );

        //x is used to find the index of the last value
        let x = commentArray.length - 1;

        //declaring input values to the new array object
        commentArray[x].nameObject = event.target.user.value;
        commentArray[x].commentObject = event.target.comment.value;
        
        //Finding the date
        let today = new Date();
        let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();   
        commentArray[x].dateObject = date;

        displayComment(commentArray[x].nameObject, commentArray[x].commentObject, commentArray[x].dateObject);
    }
}