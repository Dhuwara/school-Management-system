# School Management System

A comprehensive student management system built with React.js, Node.js, Express, and MongoDB. Features modern UI with Tailwind CSS, complete CRUD operations, authentication, and role-based access control.

## 🚀 Features

### Core Features
- **Student Management**: Complete CRUD operations with advanced forms
- **Teacher Management**: Faculty records and performance tracking
- **Course Management**: Subject and class management
- **Admin Dashboard**: Analytics, reports, and system overview
- **Authentication**: Secure login system with JWT tokens
- **Role-based Access**: Admin, Teacher, Student, Parent roles

### Technical Features
- **Modern UI**: Responsive design with Tailwind CSS and custom components
- **Form Validation**: Zod schema validation with React Hook Form
- **API Integration**: RESTful API with proper error handling
- **Database**: MongoDB with comprehensive schemas
- **Security**: JWT authentication, input validation, rate limiting
- **Search & Filtering**: Advanced search and pagination
- **Real-time Updates**: Live data synchronization

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - UI framework
- **React Router 7.13.0** - Client-side routing
- **Tailwind CSS 4.1.18** - Styling
- **DaisyUI 5.5.18** - Component library
- **React Hook Form 7.71.1** - Form management
- **Zod 4.3.6** - Schema validation
- **Axios 1.13.5** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express 4.18.2** - Web framework
- **MongoDB** - Database
- **Mongoose 8.0.3** - ODM
- **JWT 9.0.2** - Authentication
- **Bcryptjs 2.4.3** - Password hashing
- **Express Validator 7.0.1** - Input validation

## 📁 Project Structure

```
school-management-system/
├── backend/                    # Backend API server
│   ├── models/                # MongoDB models
│   │   ├── User.js           # User schema
│   │   ├── Student.js        # Student schema
│   │   ├── Teacher.js        # Teacher schema
│   │   └── Course.js         # Course schema
│   ├── routes/               # API routes
│   │   ├── auth.js           # Authentication routes
│   │   ├── users.js          # User management
│   │   ├── students.js       # Student CRUD
│   │   ├── teachers.js       # Teacher CRUD
│   │   └── courses.js        # Course management
│   ├── middleware/           # Custom middleware
│   │   └── auth.js           # Authentication middleware
│   ├── server.js             # Express server
│   └── package.json          # Backend dependencies
├── src/                     # React frontend
│   ├── components/           # Reusable UI components
│   │   └── ui/              # Base UI components
│   │       ├── Button.jsx     # Custom button
│   │       ├── Input.jsx      # Custom input
│   │       ├── Modal.jsx      # Custom modal
│   │       ├── Table.jsx      # Custom table
│   │       └── Card.jsx       # Custom card
│   ├── modules/              # Feature modules
│   │   ├── students/         # Student management
│   │   │   ├── Pages/        # Page components
│   │   │   └── components/   # Student-specific components
│   │   ├── teachers/         # Teacher management
│   │   ├── admin/            # Admin dashboard
│   │   └── settings/         # Settings management
│   ├── context/              # React context
│   ├── routes/               # React Router routes
│   ├── layouts/              # Layout components
│   └── App.jsx              # Main App component
└── package.json              # Frontend dependencies
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd school-management-system
```

### 2. Install Dependencies

#### Frontend
```bash
npm install
```

#### Backend
```bash
cd backend
npm install
```

### 3. Environment Setup

Create a `.env` file in the `backend` directory:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/school_management

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend Configuration
FRONTEND_URL=http://localhost:5173

# Email Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# File Upload Configuration
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880
```

### 4. Database Setup

#### Option 1: Local MongoDB
```bash
# Start MongoDB service
mongod

# Create database (optional - will be created automatically)
mongosh
use school_management
```

#### Option 2: MongoDB Atlas
1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in `.env` file

### 5. Start the Application

#### Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

#### Start Frontend Development Server
```bash
# In a new terminal
npm run dev
```
Frontend will run on `http://localhost:5173`

## 📊 Database Schema

### User Model
- Personal information (name, email, phone, address)
- Authentication (password, role)
- Profile management

### Student Model
- Academic information (grade, section, roll number)
- Parent information (father, mother, guardian details)
- Attendance tracking
- Grade management
- Fee tracking
- Medical information

### Teacher Model
- Professional information (employee ID, department, designation)
- Qualification and experience
- Class assignments
- Performance evaluations
- Schedule management

### Course Model
- Course information (name, code, description)
- Teacher assignments
- Student enrollment
- Syllabus and resources
- Assessments and grading

## 🔐 Authentication & Authorization

### Roles
- **Admin**: Full system access
- **Teacher**: Class and student management
- **Student**: Personal information and grades
- **Parent**: Child's information and progress

### JWT Token Structure
```json
{
  "userId": "user_id",
  "role": "admin|teacher|student|parent",
  "iat": "issued_at",
  "exp": "expires_at"
}
```

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - User logout

### Students
- `GET /api/students` - List students (with pagination)
- `GET /api/students/:id` - Get student details
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student
- `DELETE /api/students/:id` - Delete student
- `POST /api/students/:id/attendance` - Mark attendance
- `GET /api/students/:id/attendance` - Get attendance records

### Teachers
- `GET /api/teachers` - List teachers
- `GET /api/teachers/:id` - Get teacher details
- `POST /api/teachers` - Create new teacher
- `PUT /api/teachers/:id` - Update teacher
- `DELETE /api/teachers/:id` - Delete teacher
- `POST /api/teachers/:id/performance` - Add performance evaluation

### Courses
- `GET /api/courses` - List courses
- `GET /api/courses/:id` - Get course details
- `POST /api/courses` - Create new course
- `PUT /api/courses/:id` - Update course
- `DELETE /api/courses/:id` - Delete course
- `POST /api/courses/:id/students` - Add students to course

## 🎨 UI Components

### Base Components
- **Button**: Customizable button with variants and sizes
- **Input**: Form input with validation states
- **Modal**: Reusable modal component
- **Table**: Data table with sorting and pagination
- **Card**: Flexible card component with variants

### Features
- Responsive design for all screen sizes
- Dark mode support (configurable)
- Loading states and error handling
- Form validation with real-time feedback
- Search and filtering capabilities
- Data export functionality

## 🔧 Development

### Code Style
- ESLint configuration for consistent code
- Prettier for code formatting
- Component-based architecture
- Custom hooks for reusable logic

### Testing
- Jest for unit testing
- React Testing Library for component testing
- API testing with Supertest

### Build & Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Features Roadmap

### Phase 1 (Completed)
- ✅ Basic CRUD operations
- ✅ Authentication system
- ✅ Admin dashboard
- ✅ Student management
- ✅ Teacher management

### Phase 2 (Planned)
- 📧 Email notifications
- 📊 Advanced reporting
- 📱 Mobile app
- 🔄 Real-time updates
- 📁 File upload system

### Phase 3 (Future)
- 💳 Payment integration
- 📈 Analytics dashboard
- 🌐 Multi-language support
- 🔔 Push notifications
- 📚 Library management

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Email: support@schoolmanagement.com
- Documentation: [Wiki](https://github.com/your-repo/wiki)

## 🙏 Acknowledgments

- React.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible database solution
- All contributors and users of this project

---

**Built with ❤️ for educational institutions**
