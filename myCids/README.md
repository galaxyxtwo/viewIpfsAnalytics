## openAnalytics

 View the analytics of content saved on IPFS.  No login required.

openAnalytics is a public facing tool for communities using [Leto Analytics](https://leto.gg/) on websites, apps, and NFTs. If Leto is used in your system, the analytics (for each CID) can be accessed with openAnalytics.

<img width="1135" alt="Screenshot 2023-09-29 at 12 06 18 PM" src="https://github.com/galaxyxtwo/cidLeaderboard/assets/90220293/7416c1ef-c7f0-4ea7-92d7-1856fa71eb27">


## Background on Leto Analytics
When a developer serves IPFS content with the [Leto IPFS gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api), all analytics data collected is made avaliable via the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). OpenAnalytics uses this api to retrieve and display the analytics for a given IPFS CID. 

To date, all analytics data collected with Leto is anonymous, aggregate, and publically accessible. This provides developers and communities the data they need while holding the mechanism accountable. Anyone can see the analytics their provider/website is collecting. 

> **_Note_**: In the future Leto will give developers a choice to opt in or out of this public dataset for privacy reasons. It will then be up to each dev to commuinicate this with end users.

## Getting Started
Follow the steps below to set up and run the openAnalytics React App. Run the app locally or host in the cloud for your community!

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/cidLeaderboard]
    cd [cid-leaderboard]
    
2. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

  After executing the above command, the react app should be running in development mode. Navigate to the specified local server address in your browser to view the website.


## Search for your IPFS CIDs
Copy and paste your CIDs into the box to create a list! When running openAnalytics, the inputs (cids) and associated analytics data are saved in local storage.

  
> **_Keep in mind_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return analytics data.

Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/) or [Blog](https://blog.leto.gg/).
