describe('First Test Suite',function(){

    it('First TC',()=>{           // Arrow function

     expect(true).to.equal(true) 
    })

    it('2nd TC',()=>{
           expect(true).to.equal(false)
    })

    it.skip('3rd TC',function(){  
           expect(true).to.equal(true)
    })
})