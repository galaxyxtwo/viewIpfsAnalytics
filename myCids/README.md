## openAnalytics

Lookup the analytics of content saved on IPFS. openAnalytics is the public facing tool for communities using [Leto Analytics](https://leto.gg/) on their websites, apps, and NFTs. If Leto is used in your system, the analytics will be accessible with openAnalytics. No login required.

## Background
When a developer uses the [Leto.gg IPFS gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api), all analytics data collected by the system is made avaliable via the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). OpenAnalytics uses this api to retrieve the analytics data for a given IPFS CID. 

To date, all analytics data collected with Leto is anonymous, aggregate, and publically accessible. This provides developers and communities the data they need while holding the mechanism accountable. Anyone can see the analytics their provider/website is collecting. 

> **_Note_**: In the future Leto will give developers a choice to opt in or out of this public dataset for privacy reasons. It will then be up to each dev to commuinicate this with end users.

#### Copy and paste one of your CIDs into the box and add it to the list!


<img width="1135" alt="Screenshot 2023-09-29 at 12 06 18 PM" src="https://github.com/galaxyxtwo/cidLeaderboard/assets/90220293/7416c1ef-c7f0-4ea7-92d7-1856fa71eb27">


## Getting Started
Follow the steps below to set up and run the cidLeaderboard React App in development mode:

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/cidLeaderboard]
    cd [cid-leaderboard]
2. **Add your CIDs**: 

    This app has an example list of IPFS CIDs in src/app.js. Before launching your app, change these CIDs to the
    production CIDs that you want to display in the leaderboard. 
3. **Run the Development Server**:
    ```
    npm install
    npm start
    ```

  After executing the above command, the react app should be running in development mode. Navigate to the specified local server address in your browser to view the website.
    
  Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/)!

  
> **_Keep in mind_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return analytics data.
