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
- ***CRON job*** : for notification and live updates of news i have used cronjob and the timming for cronjon to fetch news is  6:22 pm 
- ***Nodemailer***:  For sending the emails to the subscribed users with their respective categories nodemailer is used.

### AI Integration:
- **Hugging Face Transformers API**: Integrated for generating news summaries from the title and description part and show on frontend.

### Database:
- **Postgresql**: SQL database used to store user data, subscription preferences, and news article data.
- **Prisma ORM**: Used as a data modeling tool to manage interactions with the neon postgresql database.

### Deployment:
- **Backend** : Backend is deployed on koyeb.
- **Frontend** : Frontend is deployed on vercel.
- **Backend uurl**: [Backend runtime environment.](https://cautious-cynde-dataprojects-0d4a403b.koyeb.app/api/news/news)

### Tools & Libraries:
- **TypeScript**: For type safety in both backend and frontend.
- **Postman**: API testing during the development phase.
- **React Testing Library**: For testing the frontend components.

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

#### Work flow diagram

![structure](https://github.com/user-attachments/assets/8e9827fa-4053-4f5c-9ff8-b92a7c38709f)



#### video of the project
[![video](https://github.com/user-attachments/assets/17e8f5b7-400b-467f-a302-e10c63e0d179)](https://drive.google.com/file/d/17OWmLMsJnL1nGn3fhprqJhEyNVTC4_eU/view?usp=sharing)
