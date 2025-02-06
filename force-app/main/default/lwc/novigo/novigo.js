import { LightningElement, track } from 'lwc';
import myImageResource from '@salesforce/resourceUrl/nvn';
import onboard from '@salesforce/resourceUrl/onboarding';
import recruitment from '@salesforce/resourceUrl/recruitment';
import rewards from '@salesforce/resourceUrl/rewards';
import it from '@salesforce/resourceUrl/it';
import hr from '@salesforce/resourceUrl/hr';
import projects from '@salesforce/resourceUrl/projects';
 
export default class Novigo extends LightningElement {
    backgroundStyleOnboarding = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${onboard});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;

    backgroundStyleProjects = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${projects});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;

    backgroundStyleHr = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${hr});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;

    backgroundStyleIt = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${it});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;


    backgroundStyleRecruitment = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${recruitment});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;

    backgroundStyleRewards = `background-image:linear-gradient(rgba(249, 250, 251, 0.9),rgba(249, 250, 251, 0.9)), url(${rewards});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%; `;
    novigoLogo = myImageResource;

    // @track isDrawerOpen = false;

    // @track notifications = [
    //     {
    //         id: '1',
    //         title: 'New Project Assignment',
    //         description: 'You have been assigned to Project X',
    //         time: '2 hours ago',
    //         icon: 'utility:announcement'
    //     },
    //     {
    //         id: '2',
    //         title: 'Meeting Reminder',
    //         description: 'Team meeting in 30 minutes',
    //         time: '30 minutes ago',
    //         icon: 'utility:event'
    //     },
    //     // Add more notification objects as needed
    // ];

    // get drawerClass() {
    //     const drawerClass = `drawer ${this.isDrawerOpen ? 'open' : ''}`;
    //     console.log('drawerClass:', drawerClass);
    //     return drawerClass;
    // }

    // toggleNotificationDrawer() {
    //     this.isDrawerOpen = !this.isDrawerOpen;
    //     console.log('isDrawerOpen:', this.isDrawerOpen);
    // }

    // markAllAsRead() {
    //     // Add logic to mark all notifications as read
    //     console.log('Marking all notifications as read');
    // }

    

    // Add your existing handler methods here
    // handleHelpdeskClick() {
    //     // Your existing code
    // }

    // handleKekaClick() {
    //     // Your existing code
    // }

    // handleProjectClick() {
    //     // Your existing code
    // }

    // handleRewardClick() {
    //     // Your existing code
    // }

    // handleRewardClick() {
    //     const event = new CustomEvent('rewardclick', {
    //         detail: { message: 'Hello from Child Component!' }
    //     });
    //     this.dispatchEvent(event);
    // }


    @track isDrawerOpen = false;
    @track expandedApps = new Set();

    @track notifications = [
        {
            id: '1',
            appName: 'Recruitment',
            title: 'New Application',
            description: 'New application received for Senior Developer position',
            time: '2 hours ago',
            icon: 'utility:people'
        },
        {
            id: '2',
            appName: 'Recruitment',
            title: 'Interview Scheduled',
            description: 'Interview scheduled for tomorrow at 2 PM',
            time: '3 hours ago',
            icon: 'utility:people'
        },
        {
            id: '3',
            appName: 'Onboarding',
            title: 'Document Verification',
            description: 'Please verify documents for new joinee',
            time: '1 hour ago',
            icon: 'utility:user'
        },
        {
            id: '4',
            appName: 'IT Helpdesk',
            title: 'Ticket Update',
            description: 'Your ticket #1234 has been resolved',
            time: '30 minutes ago',
            icon: 'utility:help'
        }
    ];

    get totalNotifications() {
        return this.notifications.length;
    }

    get groupedNotifications() {
        const grouped = {};
        
        // Group notifications by app
        this.notifications.forEach(notification => {
            if (!grouped[notification.appName]) {
                grouped[notification.appName] = {
                    appName: notification.appName,
                    icon: notification.icon,
                    notifications: [],
                    isExpanded: this.expandedApps.has(notification.appName)
                };
            }
            grouped[notification.appName].notifications.push(notification);
        });

        return Object.values(grouped);
    }

    get drawerClass() {
        return `drawer ${this.isDrawerOpen ? 'open' : ''}`;
    }

    toggleNotificationDrawer() {
        this.isDrawerOpen = !this.isDrawerOpen;
    }

    toggleAppNotifications(event) {
        const appName = event.currentTarget.dataset.app;
        if (this.expandedApps.has(appName)) {
            this.expandedApps.delete(appName);
        } else {
            this.expandedApps.add(appName);
        }
        // Force reactivity in LWC
        this.expandedApps = new Set(this.expandedApps);
    }

    getNotificationListClass(appName) {
        return `notification-list ${this.expandedApps.has(appName) ? 'expanded' : ''}`;
    }

    markAllAsRead() {
        // Add logic to mark all notifications as read
        console.log('Marking all notifications as read');
    }

    // Keep your existing click handlers
    handleHelpdeskClick() {
        // Your existing code
    }

    handleKekaClick() {
        // Your existing code
    }

    handleProjectClick() {
        // Your existing code
    }

    handleRewardClick() {
        const event = new CustomEvent('rewardclick', {
            detail: { message: 'Hello from Child Component!' }
        });
        this.dispatchEvent(event);
    }

}