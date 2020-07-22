class Nav {
    async get() {
        return await fetch('/data/pages.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let html = '';

            for (const page in data) {
                html += `<li><a href="/#${page}">${data[page].title}</a></li>`;
            }

            return !html ? '' : html;
        });
    }

    init() {
        const elem = document.createElement('nav');
        elem.classList.add('nav');

        this.get().then(function(html) {
            elem.innerHTML = `<ul>${html}</ul>`;
        });

        return elem;
    };
}

export default new Nav().init();