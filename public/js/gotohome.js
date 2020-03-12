setTimeout(() => {
    document.getElementsByClassName('toHome')[0].addEventListener('click', () => {
        window.location = window.location.origin + '/home';
        console.log(window.location);
    });
}, 1000);