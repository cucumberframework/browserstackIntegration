class amazonHomepage {

    constructor(page) {
        this.searchbar = page.locator('input[role="searchbox"]');
        this.goButton = page.locator('input[value="Go"]');
        this.allItems = page.locator('div[role="listitem"]');
        this.merchantPay = page.getByRole('link',{name:'Amazon Pay on Merchants'});


    }
}
module.exports = { amazonHomepage }