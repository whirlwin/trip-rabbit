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
})();