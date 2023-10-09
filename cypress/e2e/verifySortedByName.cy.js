import { productsOrderByAsc, productsOrderByDesc } from "../fixtures/data"

describe('Sorting items on the inventory page', () => {
  
  beforeEach(() => {
    cy.goToSwagLabs()
    cy.login("standard_user", "secret_sauce")
  })
  
  it('Given the inventory page is displayed then items are sorted A-Z', () => {
    cy.get('#item_4_title_link > div').should('have.text', 'Sauce Labs Backpack').and("contain", productsOrderByAsc[0]) 
    cy.get('#item_0_title_link > div').should('have.text', 'Sauce Labs Bike Light').and("contain", productsOrderByAsc[1]) 
    cy.get('#item_1_title_link > div').should('have.text', 'Sauce Labs Bolt T-Shirt').and("contain", productsOrderByAsc[2]) 
    cy.get('#item_5_title_link > div').should('have.text','Sauce Labs Fleece Jacket').and("contain", productsOrderByAsc[3])
    cy.get('#item_2_title_link > div').should('have.text','Sauce Labs Onesie').and("contain", productsOrderByAsc[4])
    cy.get('#item_3_title_link > div').should('have.text','Test.allTheThings() T-Shirt (Red)').and("contain", productsOrderByAsc[5])
  })

    it('Given the sort filter is updated then items are sorted from Z-A', () => {
    cy.get('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)').click({force: true})

    cy.get('#item_3_title_link > div').should('have.text','Test.allTheThings() T-Shirt (Red)').and("contain", productsOrderByDesc[0])
    cy.get('#item_2_title_link > div').should('have.text','Sauce Labs Onesie').and("contain", productsOrderByDesc[1])
    cy.get('#item_5_title_link > div').should('have.text','Sauce Labs Fleece Jacket').and("contain", productsOrderByDesc[2])
    cy.get('#item_1_title_link > div').should('have.text', 'Sauce Labs Bolt T-Shirt').and("contain", productsOrderByDesc[3]) 
    cy.get('#item_0_title_link > div').should('have.text', 'Sauce Labs Bike Light').and("contain", productsOrderByDesc[4]) 
    cy.get('#item_4_title_link > div').should('have.text', 'Sauce Labs Backpack').and("contain", productsOrderByDesc[5]) 
    })  
})