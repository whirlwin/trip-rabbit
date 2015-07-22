(function() {
    var navPills = document.querySelectorAll('[data-nav-pill]');
    [].forEach.call(navPills, addEventListeners);

    function addEventListeners(el) {
        el.addEventListener('click', replaceContent);
    }

    function replaceContent() {
        [].forEach.call(navPills, removeActive);
        this.parentNode.classList.add('active');
        var name = this.getAttribute('data-nav-pill');
        var contents = document.querySelectorAll('[data-content]');
        [].forEach.call(contents, hide);
        var currentEl = document.querySelector('[data-' + name + ']');
        currentEl.classList.remove('hide');
    }

    function hide(el) {
        el.classList.add('hide');
    }

    function removeActive(el) {
        el.parentNode.classList.remove('active');
    }

    var nextGifBtn = document.querySelector('[data-next-gif]');
    var nextGifF = nextGif();
    nextGifBtn.addEventListener('click', nextGifF);

    function nextGif() {
        var gifs = ['/images/trust-me-ok.gif', '/images/show-some-class.gif', '/images/deal-with-it.gif'];
        var i = 0;
        return function() {
            i++;
            var gifHolder = document.querySelector('[data-gif-holder]');
            gifHolder.setAttribute('src', gifs[i % 3]);
        }
    }
})();