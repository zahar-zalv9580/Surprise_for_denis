let location = window.top.location // для роботи цього коду на платформі 

let btn = document.querySelector('.redirect-btn')
btn.addEventListener('click', function() {
    location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
})
