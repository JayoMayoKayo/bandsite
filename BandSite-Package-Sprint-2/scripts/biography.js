window.onload = function() {
    let commentArray = [
        {
            nameObject: '1John Doe',
            dateObject: '1mm/dd/yyyy',
            commentObject: '1This is a test comment, get amped!'
        },
        {
            nameObject: '2John Doe',
            dateObject: '2mm/dd/yyyy',
            commentObject: '2This is a test comment, get amped!'
        },
        {
            nameObject: '3John Doe',
            dateObject: '3mm/dd/yyyy',
            commentObject: '3This is a test comment, get amped!'
        }
    ];

    let commentSection = document.querySelector('.bandsite__conversation__old-comments');
    let oldCommentCard = document.querySelector('.bandsite__conversation__old-comments__card');
    let commentList = document.querySelector('.form');

    commentList.addEventListener('submit', retrieveInputs);

    //Function 1 takes object values that came from function 2 and uses them to create a new class
    function displayComment(nameParam, dateParam, commentParam) {
        console.log(commentArray[3]);
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
        newUserName.innerHTML = `${nameParam}`;
        newUserDate.innerHTML = `${dateParam}`;
        newUserComment.innerHTML = `${commentParam}`;

        //adds the newCommentCard to commentSection
        commentSection.appendChild(newCommentCard);
    }
    function retrieveInputs(event) {
        event.preventDefault();

        //create a new value in the commment array, with populated sample text
        commentArray.push({
            nameObject: '4John Doe',
            dateObject: '4mm/dd/yyyy',
            commentObject: '4This is a test comment, get amped!'
            }
        );
        //x is used to find the index of last value
        let x = commentArray.length - 1;

        //finding the date
        let today = new Date();
        let date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
        
        //declaring input values to the new array object
        commentArray[x].nameObject = event.target.user.value; 
        commentArray[x].dateObject = date;
        commentArray[x].commentObject = event.target.comment.value;

        displayComment(commentArray[x].nameObject, commentArray[x].dateObject, commentArray[x].commentObject);        
    }
}