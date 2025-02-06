import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import myImageResource from '@salesforce/resourceUrl/nvn';
export default class Login extends LightningElement {
    novigoLogo = myImageResource;
    handleLogin()
    {
        console.log("login called");
        // this[NavigationMixin.Navigate]({
        //     type: 'standard__component',
        //     attributes: {
        //         componentName: 'c__novigo'
        //     },
        //     state: {
        //         c__counter: '5'
        //     }
        // });
        const event = new CustomEvent('loginclick', {
            detail: { message: 'Hello from Child Component!' }
        });
        this.dispatchEvent(event);
        console.log('login exit');
    }
}
