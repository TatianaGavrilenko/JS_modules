import load from './load.js';

class Header{
    init() {
        const elem = document.createElement('header');
        elem.classList.add('header');

        elem.innerHTML = `
        <div class="header">
            <div class="container">
                <div class="slogan">
                    <h1>Experience Amazing</h1>
                </div>
                <div class="logo">
                    <a href="#"><img src="images/lexus.png" alt="Lexus"/></a>
                </div>
                <div class="contacts">
                    <h3>Contact us:</h3>
                    <p>+1 910 453 66 24<br />
                    info@lexus.com</p>
                </div>
		    </div>
        </div>`;
        
        load('Nav')
        .then(function(module) {
            elem.querySelector('.container').appendChild(module.default);
        });

        return elem;
    };
}

export default new Header().init();
