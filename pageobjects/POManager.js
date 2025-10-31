const { loginpage } = require('../pageobjects/loginpage');
const { amazonHomepage } = require('../pageobjects/amazonHomepage');
class POManager {
    constructor(page) {
        this.loginpage = new loginpage(page);
        this.amazonHomepage = new amazonHomepage(page);

    }
}
module.exports = { POManager };
