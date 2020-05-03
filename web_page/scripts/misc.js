const iframe = document.querySelector('#power-bi');
iframe.onload = () => {
    document.querySelector('.loading').style.display = 'none';
}

$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('.mainnav').addClass('floatingNav');
        $('.mainnav').addClass('fixed-top');
    } else {
        $('.mainnav').removeClass('floatingNav');
        $('.mainnav').removeClass('fixed-top');
    }
});