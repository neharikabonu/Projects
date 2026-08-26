# Job Application Tracker

A simple and responsive web application for tracking job applications in one place.

The application allows users to add job applications, view all applications, update application status, edit application details, and delete applications.

## Features

- Add new job applications
- View all submitted applications
- Edit application details
- Delete applications with confirmation
- Update application status
- Track application statistics
- View job links directly
- Display an empty state when no applications exist
- Responsive design for desktop and mobile
- Animated homepage background
- Data persistence using browser Local Storage

## Application Status

The tracker supports four application statuses:

- Applied
- Interview
- Rejected
- Offer

Each status has its own visual badge and color.

## Pages

### Home

The homepage provides an introduction to the application with navigation options to:

- View Applications
- Add Application

### Your Applications

Displays all saved job applications.

Each application card contains:

- Company name
- Job title
- Application date
- Application status
- Job link
- Edit option
- Delete option

If there are no applications, a centered empty-state message is displayed with an option to add a new application.

### Add Application

Allows users to enter details for a new job application.

### Dashboard

Displays application statistics based on the current applications.

Statistics include:

- Total Applications
- Applied
- Interviews
- Rejected
- Offers

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Local Storage
- Git
- GitHub

## Project Structure

```text
Job-Application-Tracker/
│
├── index.html
├── applications.html
├── add-application.html
├── dashboard.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── ...
│
└── README.md
```

## How It Works

The application uses the browser's Local Storage to save application data.

When a user:

1. Adds an application, the data is saved to Local Storage.
2. Opens the applications page, saved applications are loaded and displayed.
3. Edits an application, the updated data is saved.
4. Deletes an application, it is removed from Local Storage.
5. Refreshes the page, the saved data remains available.

If all applications are deleted, the application displays the empty-state section instead of restoring previously deleted applications.

## Responsive Design

The application is designed to work across different screen sizes.

It includes responsive layouts for:

- Desktop
- Tablet
- Mobile

The navigation, application cards, forms, dashboard statistics, and homepage adapt to smaller screens.

## UI Design

The application uses a simple modern color palette:

- Black for navigation
- Orange for primary actions
- Dark blue for highlights
- Light gray for the page background
- White for cards and surfaces

Application statuses use different colors to make them easy to identify.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/job-application-tracker.git
```

### 2. Navigate to the Project

```bash
cd job-application-tracker
```

### 3. Run the Application

Open `index.html` in your browser.

For the best development experience, use VS Code with the Live Server extension.

## Future Improvements

- User authentication
- Backend database
- Search applications
- Filter applications by status
- Sort applications by date
- Application deadline reminders
- Resume management
- Dark mode
- Cloud synchronization
- Export applications to CSV
- Application analytics
- Email notifications

## Learning Outcomes

This project demonstrates practical usage of:

- HTML semantic structure
- CSS layouts
- CSS animations
- Responsive web design
- JavaScript DOM manipulation
- JavaScript event handling
- Form handling
- CRUD operations
- Local Storage
- Dynamic UI rendering

## Author

**Neharika Bonu**

⭐ If you found this project useful, consider giving the repository a star!