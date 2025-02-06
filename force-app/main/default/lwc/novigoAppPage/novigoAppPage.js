import { LightningElement } from 'lwc';
export default class NovigoAppPage extends LightningElement {
    isLoginPage = true;
    isAppPage = false;
    isRewardPage =  false;

    handleLoginClick()
    {
        console.log('PARENT::login event recived');
        this.isLoginPage = false;
        this.isAppPage = true;
    }

    handleRewardClick()
    {
        this.isAppPage = false;
        this.isRewardPage = true;
    }
    handleBackClick()
    {
        console.log('PARENT::back event recived');
        this.isAppPage = true;
        this.isRewardPage=false;
    }
}