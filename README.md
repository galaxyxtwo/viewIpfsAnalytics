## viewIpfsAnalytics

An interface to display analytics for IPFS content by querying the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). No login required.

This is a public facing tool for communities using [Leto Analytics](https://leto.gg/) (on websites, apps, NFTs, and more). If Leto is used in your system, analytics for each CID can be accessed with this application. End-users have the opportunity to view the analytics for their IPFS content!

<img width="1171" alt="Screenshot 2023-10-13 at 5 19 42 PM" src="https://github.com/galaxyxtwo/viewIpfsAnalytics/assets/90220293/cf791091-41b6-4413-9342-6e05e14b46f8">

## Background on viewIpfsAnalytics and Leto Analytics

This tool uses the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api) to retrieve and display anonymous, aggregate analytics for a given IPFS CID. When a developer serves IPFS content with the [Leto IPFS gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api), the analytics collected is publicly avaliable via the the Analytics api.

This provides developers and communities the data they need while holding the mechanism accountable. Anyone can see the analytics their provider/website is collecting. 

We hope you find viewIpfsAnalytics useful! For larger scale businesses in need of more functionality, login to the [Leto dashboard](https://leto.gg/) for free and upgrade your service with a [pro plan](https://leto.gg/#about) when needed. 

Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/) or [Blog](https://blog.leto.gg/).

> **_Note_**: In the future Leto will give developers a choice to opt in or out of this public dataset for privacy reasons. It will be up to each dev to commuinicate this with end users.

## Getting Started
Follow the steps below to set up and run the viewIpfsAnalytics React App. Run the app locally or host in the cloud for your community!

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/cidLeaderboard]
    cd [cid-leaderboard]
    ```
2. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

  The react app should now be running in development mode. View the website in the browser at your local server address.


## Add your IPFS CIDs
Copy and paste your CIDs into the box to create a list! When running viewIpfsAnalytics, the inputs (cids) and associated analytics data are saved in local storage.

  
> **_Keep in mind_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return analytics data.
