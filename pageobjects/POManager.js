const { loginpage } = require('../pageobjects/loginpage');
class POManager {
    constructor(page) {
        this.loginpage = new loginpage(page);

    }
}
module.exports = { POManager };
