describe('GET api.publicapis.org/entries', () => {
  
    it('API testing', () => {
      let result = 0;
      cy.request('GET', 'https://api.publicapis.org/entries').then((res) => {
        cy.writeFile('cypress/fixtures/entries.json', res.body)

        // cy.readFile('cypress/fixtures/entries.json').then((entries) => {
        //   cy.log(entries.entries[0].Category)
        // })

          for(let count=0; count <= 4; count++) {
              //cy.fixture('entries').then((entries) => {
              cy.readFile('cypress/fixtures/entries.json').then((entries) => {
                // let atribute = entries.entries[count].Category
                // cy.log("Atribute" + atribute)
              if(entries.entries[count].Category == "Authentication & Authorizathion") { 
                //cy.log(JSON.stringify(entries))
                result = result++
                cy.log("Total: " + result)
              }
              })
          }
      })
    })
    // it.skip('Compare, count and match of atr Category', () => {
    //   // cy.fixture('entries').then((body) => {
        
    // })
    // it('API testing', () => {
    //   let result = 0;
    //   cy.request('GET', 'https://api.publicapis.org/entries').then((res) => {
    //     cy.writeFile('cypress/fixtures/entries.json', res.body)

    //     // cy.readFile('cypress/fixtures/entries.json').then((entries) => {
    //     //   cy.log(JSON.stringify(entries))

    //       for(let count=0; count <= 3; count++) {
    //           if(cy.readFile('cypress/fixtures/entries.json').its('entries['+count+'].Category').should('equal', 'Authentication & Authorizathion')) { continue; } {
    //             cy.log(JSON.stringify(entries))
    //             result++
    //             cy.log("Total: " + result)
    //         } 
    //       }
    //   })
    // })
    })
  





  // })

    //   let result = 0;
    //   cy.request('GET', 'https://api.publicapis.org/entries').as('categories')
    //   // cy.request('GET', 'https://api.publicapis.org/entries').then((res) => {
    //     for(let count=0; count <= 1427; count++) {
    //         cy.get('@categories').then((res) => {
    //           let array = res
    //           if(res.body.entries[count].Category == "Authentication & Authorization") {
    //             result++
    //           } 
    //         })
    //     }
    //     cy.log(result)
    //   // }) 
    // })
// })