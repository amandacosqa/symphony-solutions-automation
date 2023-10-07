describe('Sorting items on the inventory page', () => {
  beforeEach(() => {
    cy.goToSwagLabs()
    cy.login("standard_user", "secret_sauce")
  })
  it('Given the inventory page is displayed then items are sorted A-Z', () => {
    let products = ['Sauce Labs Backpack',  'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket','Sauce Labs Onesie', 'Test.allTheThings() T-Shirt (Red)']

    cy.get('#item_4_title_link > div').should('have.text', 'Sauce Labs Backpack').and("contain", products[0]) 
    cy.get('#item_0_title_link > div').should('have.text', 'Sauce Labs Bike Light').and("contain", products[1]) 
    cy.get('#item_1_title_link > div').should('have.text', 'Sauce Labs Bolt T-Shirt').and("contain", products[2]) 
    cy.get('#item_5_title_link > div').should('have.text','Sauce Labs Fleece Jacket').and("contain", products[3])
    cy.get('#item_2_title_link > div').should('have.text','Sauce Labs Onesie').and("contain", products[4])
    cy.get('#item_3_title_link > div').should('have.text','Test.allTheThings() T-Shirt (Red)').and("contain", products[5])
  })
    it('Given the sort filter is updated then items are sorted from Z-A', () => {
    let products = ['Test.allTheThings() T-Shirt (Red)','Sauce Labs Onesie', 'Sauce Labs Fleece Jacket', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light', 'Sauce Labs Backpack']

    cy.get('#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)').click({force: true})

    cy.get('#item_3_title_link > div').should('have.text','Test.allTheThings() T-Shirt (Red)').and("contain", products[0])
    cy.get('#item_2_title_link > div').should('have.text','Sauce Labs Onesie').and("contain", products[1])
    cy.get('#item_5_title_link > div').should('have.text','Sauce Labs Fleece Jacket').and("contain", products[2])
    cy.get('#item_1_title_link > div').should('have.text', 'Sauce Labs Bolt T-Shirt').and("contain", products[3]) 
    cy.get('#item_0_title_link > div').should('have.text', 'Sauce Labs Bike Light').and("contain", products[4]) 
    cy.get('#item_4_title_link > div').should('have.text', 'Sauce Labs Backpack').and("contain", products[5]) 
    })  
})