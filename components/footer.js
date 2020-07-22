class Footer {
    init() {
        const elem = document.createElement('footer');
        elem.classList.add('footer');
        
        elem.innerHTML = `
        <div class="container">
            <div class="pic">
                <a href="#"><img src="images/lexus.png" alt="Lexus"/></a>
            </div>
            <div class="info">
                <p>Lexus is the luxury vehicle division of the Japanese automaker Toyota. The Lexus brand is marketed in more than 70 countries.</p>
            </div>
            &copy; All rights reserved.
            <div class="contacts">
                    <h3>Contact us:</h3>
                    <p>+1 910 453 66 24<br />
                    info@lexus.com</p>
            </div>
        </div>
            `;

        return elem;
    };
}

export default new Footer().init();