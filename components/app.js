import load from './load.js';

class App {    
    static init() {
        const app = document.createElement('div');
        app.classList.add('site');

        document.body.appendChild(app);
        
        load('header')
        .then(function(module) {
            app.appendChild(module.default);

            load('main')
            .then(function(module) {
                app.appendChild(module.default);

                load('footer')
                .then(function(module) {
                    app.appendChild(module.default);
                });

            });
        });
    };
}

App.init();