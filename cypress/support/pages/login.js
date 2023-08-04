class Login{
 get = {
     inputEmail: ()=> cy.get('[id="email-input"]'),
     inputPassword:()=>cy.get('[id="password-input"]'),
     bttnLogin:()=>cy.get('button[id="login-form-button"]'),
     msgErrorPassword:()=>cy.get('[id="mat-error-9"]'),
 }
 fillEmail(email){
     this.get.inputEmail().type(email);
 }
 fillPassword(password){
     this.get.inputPassword().type(password);
 }
 clickLogin(){
     this.get.bttnLogin().click();
 }
}
export const login = new Login();