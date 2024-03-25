# Matrix Online Learning Platform

Welcome to the repository for the Matrix Online Learning Platform - a transformative digital education environment designed to empower learners to master software development through an engaging, interactive online experience.

## Introduction

The Matrix Platform brings together a curated curriculum, video tutorials, and a community-driven learning environment to offer a comprehensive educational journey in software development. Our goal is to bridge the gap between academic learning and practical skills, making tech education accessible to everyone, everywhere.

## Tech Stack

Our platform is built with a modern, scalable tech stack designed to deliver a seamless and responsive user experience, both on the front end and the back end.

### Key Features
- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- Video player using Mux
- Text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using Aiven

## Front End

Node.js: Utilized for its efficiency and scalability in handling server-side tasks.
React: A JavaScript library for building user interfaces with high responsiveness and dynamic content.
Next.js: A React framework that enables functionalities such as server-side rendering and generating static websites.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Shadcn UI: A React UI library used for designing sleek, modern components and interfaces.

## Backend

Node.js: Powers our backend services, offering fast execution and non-blocking I/O.
Authentication: Integrated with Clerk.com for secure, hassle-free user authentication.
File Upload: Utilizing UploadThing for efficient handling of file uploads.
Visual Database Management: Prisma is employed for clear and concise database management.
Video Player: MUX is currently used for streaming video content (subject to change based on testing and requirements).
Payment Gateway: Stripe provides secure handling of payments, subscriptions, and financial transactions.

## Database

Aiven MySQL Database: Chosen for its reliability and performance, our data is stored in an Aiven-managed MySQL database, ensuring data integrity and security.

### Prerequisites

Node version 20.10.x

### Cloning the repository

```
git clone https://github.com/MOHAMED-INSAF/MATRIX-Online-learning-platform.git
```

### Install packages

```
npm install
```

### Setup .env file

```.env

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

DATABASE_URL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

MUX_TOKEN_ID=
MUX_TOKEN_SECRET=

STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_TEACHER_ID=

```


### Setup Prisma

Add MySQL Database (We used Aiven a free MySql Database)

```
npx prisma generate
npx prisma db push
```


### Start the app

```
npm run dev
```

### Available commands

Running commands with npm run [command]

| command | description |
|-----------------|-----------------|
| dev | Starts a development instance of the app |
| test | Start unit testing the Jest files |

[MATRIX](https://drive.google.com/file/d/18xQUPLpW5OLoUY5hTqsGYnzle8NRRhMr/view?usp=sharing)

Thank you for visiting the Matrix Online Learning Platform repository. Together, we can make tech education more accessible and impactful.
