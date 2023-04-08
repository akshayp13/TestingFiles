describe('First Test Suite',function(){

       it('First TC',function(){

        expect(true).to.equal(true)  // Expect assertion came from chai
       })

       it.only('2nd TC',function(){    // To execute this statement only
              expect(true).to.equal(false)
       })

       it.skip('3rd TC',function(){   // To skip TC
              expect(true).to.equal(true)
       })
})

// Describe is a block which represents test suits and it represents TC