let nav = document.querySelector('nav')

nav.addEventListener('click', function(event){
    let button = event.target;
    // console.log(button);
    if(button.id === "google"){
        console.log('google.com');
    }
    else if(button.id === "amazon"){
        console.log('amazon.com');
    }
    if(button.id === "facebook"){
        console.log('facebook.com');
    }
    if(button.id === "instagram"){
        console.log('instagram.com');
    }
    if(button.id === "youtube"){
        console.log('youtube.com');
    }
    if(button.id === "gmail"){
        console.log('gmail.com');
    }
})