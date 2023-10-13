## viewIpfsAnalytics

An interface to display analytics for IPFS content by querying the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). No login required.

viewIpfsAnalytics is a public facing tool for communities using [Leto Analytics](https://leto.gg/) on websites, apps, and NFTs. If Leto is used in your system, the analytics (for each CID) can be accessed with viewIpfsAnalytics.

<img width="1398" alt="Screenshot 2023-10-13 at 3 52 25 PM" src="https://github.com/galaxyxtwo/viewIpfsAnalytics/assets/90220293/acf81291-de24-4c1b-a974-e1e725747ba7">


## Background on Leto Analytics and viewIpfsAnalytics
When a developer serves IPFS content with the [Leto IPFS gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api), all analytics data collected is made avaliable via the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). viewIpfsAnalytics uses this api to retrieve and display the analytics for a given IPFS CID. 

To date, all analytics data collected with Leto is anonymous, aggregate, and publically accessible. This provides developers and communities the data they need while holding the mechanism accountable. Anyone can see the analytics their provider/website is collecting. 

> **_Note_**: In the future Leto will give developers a choice to opt in or out of this public dataset for privacy reasons. It will be up to each dev to commuinicate this with end users.

## Getting Started
Follow the steps below to set up and run the viewIpfsAnalytics React App. Run the app locally or host in the cloud for your community!

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
Copy and paste your CIDs into the box to create a list! When running viewIpfsAnalytics, the inputs (cids) and associated analytics data are saved in local storage.

  
> **_Keep in mind_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return analytics data.

Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/) or [Blog](https://blog.leto.gg/).
