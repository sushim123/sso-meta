Meta Authentication and Metrics Fetching
This project demonstrates how to implement Meta (formerly Facebook) authentication using Node.js and fetch user profile information along with metrics based on their account type.
Prerequisites
Before running this project, ensure you have the following installed:

Node.js (version 12 or higher)
npm (Node Package Manager)
Meta Developer Account
Getting Started
Clone the repository:
```
git clone https://github.com/sushim123/sso-meta
cd sso-meta
```
Install dependencies:
```
npm install
```
Set up environment variables:

Create a .env file in the root directory with the following content:
```
CLIENT_ID=your_meta_app_client_id
CLIENT_SECRET=your_meta_app_client_secret
```
Run the application:
```
npm start
```
Access the application:

Open your web browser and go to http://localhost:3000/auth/meta/callback after starting the application.
