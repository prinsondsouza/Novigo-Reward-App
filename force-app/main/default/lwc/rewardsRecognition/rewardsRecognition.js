import { LightningElement, track } from 'lwc';

export default class RewardsRecognition extends LightningElement {
    @track showRewardSubmission = false;
    @track showActiveRewards = false;
    @track showRewardHistory = false;

    @track employeeName = '';
    @track rewardDescription = '';
    @track activeRewards = [
        { id: 1, description: 'Reward 1', status: 'Pending' },
        { id: 2, description: 'Reward 2', status: 'Approved' }
    ];
    @track rewardHistory = [
        { id: 1, description: 'Reward 1', amount: '$100', date: '2023-01-01' },
        { id: 2, description: 'Reward 2', amount: '$200', date: '2023-02-01' }
    ];

    handleRewardSubmissionClick() {
        this.showRewardSubmission = true;
        this.showActiveRewards = false;
        this.showRewardHistory = false;
    }

    handleActiveRewardsClick() {
        this.showRewardSubmission = false;
        this.showActiveRewards = true;
        this.showRewardHistory = false;
    }

    handleRewardHistoryClick() {
        this.showRewardSubmission = false;
        this.showActiveRewards = false;
        this.showRewardHistory = true;
    }

    handleInputChange(event) {
        const field = event.target.id;
        if (field === 'employeeName') {
            this.employeeName = event.target.value;
        } else if (field === 'rewardDescription') {
            this.rewardDescription = event.target.value;
        }
    }

    handleFileUpload(event) {
        // Handle file upload
    }

    submitRewardRequest() {
        // Handle reward request submission
    }

    handleBackClick() {
        // Handle back button click
        const event = new CustomEvent('backclick', {
            detail: { message: 'Hello from Child Component!' }
        });
        this.dispatchEvent(event);
    }
}