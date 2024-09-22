# Real-Time News Aggregator with AI Summarization

## Project Overview
This project is a Real-Time News Aggregator that integrates AI-powered news summarization. It provides users with the latest news in multiple categories such as politics, technology, food, and health. The application allows users to browse the news, read the summaries, and subscribe to specific categories for regular updates.

### Key Objectives:
- Aggregate news from various sources in real-time.
- Provide AI-generated summaries of news articles for quick consumption.
- User authentication with JWT.
- Notifications for breaking news or personalized updates.

## Technologies Used

### Frontend:
- **ReactJS**: The frontend is built using React, ensuring a smooth, component-based UI experience.
- **React Bootstrap**: Used for responsive and clean UI components.
- **React Router**: To handle different routes like home, news feed, and user authentication.
- **CSS**: Custom styles for layout, with specific attention to responsive design for mobile and desktop.

### Backend:
- **Express.js**: Node.js framework used to handle RESTful API requests and manage server-side logic.
- **Prisma**: ORM tool to interface with the database, managing schema, queries, and migrations.
- **Axios**: Used for making HTTP requests to the backend APIs for fetching news articles.
- **JWT**: Used for secure authentication of users and managing subscriptions.
- **Neon** : It's the database.
- ***CRON job*** : for notification and live updates of news i have used cronjob and the timming for cronjob to fetch news is  6:22 pm 
- ***Nodemailer***:  For sending the emails to the subscribed users with their respective categories nodemailer is used.

### AI Integration:
- **Hugging Face Transformers API**: Integrated for generating news summaries from the title and description part and show on frontend.

### Database:
- **Postgresql**: SQL database used to store user data, subscription preferences, and news article data.
- **Prisma ORM**: Used as a data modeling tool to manage interactions with the neon postgresql database.

- ##To Create Prisma Data##
- ### go to the src directory###
- ###install npm install @prisma/client###
- ### npx prisma init###
- ### when your schema and model is setup ###
- ### then run npx prisma generate###
- ### then npx prisma db push### through these lines your prisma will setup correctly

### Deployment:
- **Backend** : Backend is deployed on koyeb.
- **Frontend** : Frontend is deployed on vercel.
- **Backend uurl**: [Backend runtime environment.](https://cautious-cynde-dataprojects-0d4a403b.koyeb.app/api/news/news)

### Tools & Libraries:
- **TypeScript**: For type safety in both backend and frontend.
- **Postman**: API testing during the development phase.
  **Nodemailer** : For Sending the emails to the subscribed users with respect to their category nodemailer is used.
  **Cronjob** : For fetching the live news from the newsapi cron job is used and the timer of cronjob is 6:22pm;

## Features

### Frontend Features:

#### News Feed with Summaries:
- News articles are displayed with a title, image, short AI-generated summary, and a publication date.
- Users can click on an article to read more, or subscribe to receive updates in specific categories.

#### Category-Based News:
- Users can switch between categories (Politics, Technology, Food, Health) using buttons.
- Pagination is provided to navigate through the news.

#### Authentication and Subscription:
- Login and signup features for users.
- Users can subscribe to categories and receive notifications for relevant news.

#### Responsive Design:
- Fully responsive for mobile and desktop, ensuring a smooth experience across devices.

### Backend Features:

#### News Aggregation API:
- An API built using Express.js that aggregates real-time news from different sources.
- News is fetched and categorized (Politics, Technology, food, entertainment) from the neon database.

#### AI-Powered Summarization:
- Each news article is processed through an AI summarizer using Hugging Face Model.
- Summaries are generated and stored in the database directly after that it  returned to the frontend.

#### User Authentication:
- JWT-based authentication to handle user login and session management with the help of usercontext api.
- User data and subscription preferences are stored in neon postgresql database using Prisma ORM.

#### CRON job

- Scheduled Database Backups: Automate regular backups of your database.
- Sending Scheduled Emails: Send periodic notifications, newsletters, or alerts.
- for notification and live updates of news i have used cronjob and the timming for cronjon to fetch news is 
6:22 pm 

#### Nodemailer
- For sending the emails to the subscribed users with their respective categories nodemailer is used.

#### Subscription and Notification:
- Users can subscribe to a specific news category.
- A notification service is set up to send updates to users based on their subscription.


## Steps to Start this Project
- First clone the github repo
- run npm install in both frontend and backend to install the node_modules
- to run the frontend run command npm run dev
- to run the backend run command npx nodemon ./src/index.ts

## preview of my site
### 1. Home Page
- When a user first visits the website, they land on the Home page.

## 2. Check News Page
- Clicking on the "Check News" tab or button navigates the user to the news feed.
- This page introduces the platform, showcasing features like real-time news aggregation and AI-powered summaries. The user can browse some highlighted news articles and see a brief overview of the different news categories.
- the user can see the latest news across different categories (Politics, Technology, Food, Health).
- Each news article shows: Title, Image ,Short AI-generated summary, Publication date, Read more button and subscribe button.
- Pagination is available to navigate through multiple pages of news articles.
## 3. Signup/Login Page
- To access personalized features like subscriptions, the user must sign up or log in.
- Clicking on the "Signup/Login" link or button redirects the user to the authentication page.
- Signup: New users can sign up by providing their name, email, password, and other details.
* Login: Existing users can log in using their email and password. Once logged in, the user can subscribe to different news categories and receive notifications or email updates based on their preferences.


#### Work flow diagram

![structure](https://github.com/user-attachments/assets/8e9827fa-4053-4f5c-9ff8-b92a7c38709f)



#### video of the project
[![video](https://github.com/user-attachments/assets/17e8f5b7-400b-467f-a302-e10c63e0d179)](https://drive.google.com/file/d/17OWmLMsJnL1nGn3fhprqJhEyNVTC4_eU/view?usp=sharing)
