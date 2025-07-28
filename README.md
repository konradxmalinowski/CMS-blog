# 🚀 TechBlog CMS

A modern, full-stack Content Management System (CMS) for blogging built with React, TypeScript, and PHP. This project features a beautiful frontend interface and a robust backend API for managing blog articles, user authentication, and content administration.

![Tech Stack](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![PHP](https://img.shields.io/badge/PHP-8.0+-purple?style=for-the-badge&logo=php)
![MySQL](https://img.shields.io/badge/MySQL-8.0+-orange?style=for-the-badge&logo=mysql)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.11-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Frontend Features

- **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS
- **TypeScript** - Full type safety and better development experience
- **React Router** - Client-side routing for smooth navigation
- **Context API** - Global state management for user authentication
- **Component-based Architecture** - Reusable and maintainable components
- **Responsive Design** - Works perfectly on all devices

### 🔧 Backend Features

- **RESTful API** - Clean and organized PHP endpoints
- **MySQL Database** - Reliable data storage with PDO
- **User Authentication** - Secure login/register system
- **Admin Panel** - Full content management capabilities
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Comprehensive error management

### 📝 Content Management

- **Article Management** - Create, read, update, delete articles
- **Comment System** - User interaction and engagement
- **Category Organization** - Structured content categorization
- **Rich Text Support** - Enhanced content formatting
- **SEO Friendly** - Optimized for search engines

## 🛠️ Tech Stack

### Frontend

- **React 19.1.0** - Modern UI library
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 7.0.4** - Fast build tool and dev server
- **React Router DOM 7.7.0** - Client-side routing
- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **TanStack React Query 5.83.0** - Data fetching and caching

### Backend

- **PHP 8.0+** - Server-side scripting
- **MySQL 8.0+** - Reliable database
- **PDO** - Database abstraction layer
- **Apache/Nginx** - Web server (XAMPP/WAMP)

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+
- PHP 8.0+
- MySQL 8.0+
- XAMPP/WAMP (recommended for easy setup)

### 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd CMS-blog
   ```

2. **Setup Backend**

   ```bash
   # Navigate to backend directory
   cd backend

   # Create MySQL database
   # Open phpMyAdmin and create a database named 'blog'

   # Update database configuration in database.php if needed
   # Default: host=localhost, dbname=blog, user=root, password=''
   ```

3. **Setup Frontend**

   ```bash
   # Navigate to frontend directory
   cd frontend

   # Install dependencies
   npm install

   # Start development server
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost/CMS-blog/backend/

## 📁 Project Structure

```
CMS-blog/
├── 📁 frontend/                 # React TypeScript frontend
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   ├── 📁 sites/          # Page components
│   │   ├── 📁 store/          # Context and state management
│   │   ├── 📁 assets/         # Static assets
│   │   └── http.ts            # API communication
│   ├── package.json
│   └── vite.config.ts
├── 📁 backend/                 # PHP backend API
│   ├── database.php           # Database connection
│   ├── login.php              # Authentication endpoints
│   ├── register.php           # User registration
│   ├── articles.php           # Article management
│   ├── admin_panel.php        # Admin functionality
│   └── ...                    # Other API endpoints
└── README.md
```

## 🔐 Authentication System

The application includes a complete authentication system:

- **User Registration** - New users can create accounts
- **User Login** - Secure authentication with session management
- **Admin Panel** - Protected admin area for content management
- **Session Management** - Persistent login state
- **Logout Functionality** - Secure session termination

## 🎯 Available Scripts

### Frontend (in `/frontend` directory)

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🌐 API Endpoints

### Authentication

- `POST /login.php` - User login
- `POST /register.php` - User registration
- `POST /logout.php` - User logout
- `GET /checkIfIsLoggedIn.php` - Check authentication status

### Content Management

- `GET /articles.php` - Fetch all articles
- `POST /add_article.php` - Create new article
- `PUT /update_article.php` - Update existing article
- `DELETE /remove_article.php` - Delete article
- `POST /add_comment.php` - Add comment to article
- `DELETE /remove_comment.php` - Remove comment

### Admin

- `GET /admin_panel.php` - Admin panel data

## 🎨 UI Components

The frontend includes a comprehensive set of reusable components:

- **Header** - Navigation and branding
- **Footer** - Site information and links
- **Form** - Reusable form wrapper
- **Input** - Styled input fields
- **Button** - Multiple button variants
- **Article** - Article display component
- **Category** - Category management
- **Hero** - Landing page hero section

## 🔧 Configuration

### Database Configuration

Update `backend/database.php` with your database credentials:

```php
$conn = new PDO('mysql:host=localhost;dbname=blog', 'username', 'password');
```

### CORS Configuration

The backend is configured to allow requests from `http://localhost:5173` (Vite dev server). Update the CORS headers in `database.php` if needed.

## 🚀 Deployment

### Frontend Deployment

```bash
cd frontend
npm run build
# Deploy the 'dist' folder to your web server
```

### Backend Deployment

- Upload the `backend` folder to your web server
- Ensure PHP and MySQL are installed
- Configure database connection
- Set up proper CORS headers for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **React Team** - For the amazing frontend framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **PHP Community** - For the robust backend language
