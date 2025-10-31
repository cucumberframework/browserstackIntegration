class loginpage {

    constructor(page) {
        this.userName = page.locator('#id');
        this.homeButton = page.getByRole('link', { name: 'Home' });
        this.practiceButton = page.getByRole('button', { name: 'Practice' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.signUpButton = page.getByRole('button', { name: 'Signup' });
        this.radioButton1 = page.locator('label[for="radio1"] input');
        this.radioButton2 = page.locator('label[for="radio2"] input');
        this.dropdownSelect = page.locator('#dropdown-class-example');
        this.nameField = page.locator('#name');
        this.alertButton = page.locator('#alertbtn');


        //locator('label[for="radio1"] input');

    }

}
module.exports = { loginpage }