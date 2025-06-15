const { $ } = require('@wdio/globals')

class HomePage {

    async openMenu(){
        await $('id:tab-Account').click()
        
    }

}

export default new HomePage();
