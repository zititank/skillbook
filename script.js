function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
const likeButtons = document.querySelectorAll('.like-button');
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likes = button.parentElement.querySelector('.likes');
        const likeCount = parseInt(likes.textContent);
        likes.textContent = (likeCount + 1) + ' Likes';
    });
});
const commentButtons = document.querySelectorAll('.comment-submit');
commentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const commentInput = button.parentElement.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.textContent = commentText;
            button.parentElement.parentElement.parentElement.appendChild(commentDiv);
            commentInput.value = '';
        }
    });
});


let post = document.getElementById("post"); 
let postsBox = document.getElementById("postsBox") 
 
let imgurls = [ 
    "https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/RS7903_ThinkstockPhotos-856465438-hig.jpg?itok=99gVz3i",
    "https://learnenglish.britishcouncil.org/sites/podcasts/files/styles/max_1300x1300/public/2021-10/RS7760_ThinkstockPhotos-511603820.jpg?itok=zK6QMyh7" 
] 
const originalDiv = document.getElementById('originalDiv');

const imageURL = 'treatb.jpg';
for(let i = 0; i < 100; i++){ 
    const clonedDiv = originalDiv.cloneNode(true);
    const clonedImg = clonedDiv.querySelector('img');
    clonedImg.src = imageURL;
    document.body.appendChild(clonedDiv);
    
}

let newpost

for(let i = 1; i < 100; i+){   
 
    newpost = post.cloneNode(true);  
    clonedImg = newpost.getElementsByClassName("img")[0]   
    clonedImg.setAttribute("src", imgurls[i%2])  
 
 
    postsBox.appendChild(clonedDiv);  
 
} 