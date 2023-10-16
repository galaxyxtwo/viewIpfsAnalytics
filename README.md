# viewIpfsAnalytics

Located here: https://bafybeifvibof4xsvmovjb2jidkpzy2molzvcvjehmjzuweu3jssyxuezqy.ipfs.sphn.link/

Display analytics for IPFS content by querying the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api). No login required.

viewIpfsAnalytics is for communities who use [Leto Analytics](https://leto.gg/) to server content to end users. This tool gives end users the opportunity to view the analytics for their IPFS content!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<img width="1284" alt="Screenshot 2023-10-16 at 6 51 00 PM" src="https://github.com/galaxyxtwo/viewIpfsAnalytics/assets/90220293/6ebe5efc-8410-4de9-9e24-ee056abf20ad">


## Getting Started
Follow the steps below to set up and run the viewIpfsAnalytics React App in a local development environment. 

1. **Clone the Repository**:
  
    ```
    git clone [https://github.com/galaxyxtwo/viewIpfsAnalytics]
    cd [viewIpfsAnalytics]
    ```
2. **Run the Development Server**:
     ```
    npm install
    npm start
    ```
3. **Add your IPFS CIDs**:
Copy and paste your CIDs into the box to create a list! When running viewIpfsAnalytics, the inputs (cids) and associated analytics data are saved in local storage.

> **_Keep in mind_**: Only IPFS CIDs that have been accessed through the [Leto IPFS Gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api) will return analytics data.
   
## Note
To run this application in the cloud, choose a hosting provider and then use a cloudflare worker for the api request. /worker is Javascript code meant for a Cloudflare worker that processes api requests. /src is the front-end built with React.

We launched a [viewIpfsAnalytics](https://bafybeifvibof4xsvmovjb2jidkpzy2molzvcvjehmjzuweu3jssyxuezqy.ipfs.sphn.link/) web-app for the community to use! Feel free to use this repo to launch your own viewIpfsAnalytics web-app.

## Background on viewIpfsAnalytics and Leto Analytics

This tool uses the [Leto Analytics api](https://letodev.gitbook.io/getting-started/documentation/analytics-rest-api) to retrieve and display anonymous, aggregate analytics for a given IPFS CID. When a developer serves IPFS content with the [Leto IPFS gateway](https://letodev.gitbook.io/getting-started/documentation/ipfs-gateway-api), the analytics collected is publicly avaliable via the the Analytics api.

We hope you find viewIpfsAnalytics useful! For larger scale businesses in need of more functionality, login to the [Leto dashboard](https://leto.gg/) for free and upgrade your service with a [pro plan](https://leto.gg/#about) when needed. 

Learn more by visiting the [Leto docs](https://letodev.gitbook.io/getting-started/) or [Blog](https://blog.leto.gg/).

> **_Note_**: In the future Leto will give developers a choice to opt in or out of this public dataset for privacy reasons. It will be up to each dev to commuinicate this with end users.
