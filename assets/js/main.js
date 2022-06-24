window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        document.getElementById('to_top').style.display = 'block';
    } else {
        document.getElementById('to_top').style.display = 'none';
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        document.getElementById('side_nav').style.display = 'block';
    } else {
        document.getElementById('side_nav').style.display = 'none';
    }
});

let title = document.getElementsByTagName('h3');
for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('mouseover', function () {
        this.style.fontWeight = 'bold';

        this.addEventListener('mouseout', function () {
            this.style.fontWeight = 'unset';
        });
    });
};