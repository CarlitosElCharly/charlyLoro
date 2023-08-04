import { login } from "../support/pages/login";
import data from "../fixtures/loginData.json"
import {removeLogs} from "../support/helper/RemoveLogs";

describe('TS: ✅LoroTest | Forms | Practice Login', () => {

beforeEach(() => {
    cy.clearCookies();
    cy.visit('/login')
    cy.url().should('contain', 'login')
})

it('TC01: Validar el ingreso correcto en el login', () => {
login.fillEmail(data.email);
login.get.inputEmail().should('have.value', data.email);
login.fillPassword(data.password);
login.get.inputPassword().should('have.value', data.password);
// login.clickLogin();
//! Aquí va la validación del login
});
});

removeLogs();