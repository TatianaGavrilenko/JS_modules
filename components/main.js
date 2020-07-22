class Main {
    constructor() {
        this.elem = document.createElement('main');
        this.elem.classList.add('main');
    }

    decodeHtmlspecialChars(text) {
        let map = {
            '&amp;': '&',
            '&#038;': "&",
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'",
            '&#8217;': "’",
            '&#8216;': "‘",
            '&#8211;': "–",
            '&#8212;': "—",
            '&#8230;': "…",
            '&#8221;': '”'
        };
    
        return text.replace(/\&[\w\d\#]{2,5}\;/g, function(m) { return map[m]; });
    }

    async get(page) {
        const self = this;

        return await fetch('/data/pages.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if(!data) return;
            data = data[page];

            self.elem.innerHTML = `
            <div class="container">
                <h1>${data.title}</h1>
                ${self.decodeHtmlspecialChars(data.content)}
            </div>
            `;
        });
    }

    init() {
        const self = this;

        let hash = location.hash.replace('#', '') || 'home';
        
        this.get(hash);

        window.addEventListener('hashchange', function() {
            hash = location.hash.replace('#', '');
            self.get(hash);
        });

        return this.elem;
    };
}

export default new Main().init();