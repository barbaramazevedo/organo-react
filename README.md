# Team Organizer - Start DB

This project is a web application built with React to register and display team member cards for the Start DB program, organizing them by unit. The interface features a dynamic form where users can enter the member's name, role, image, and unit. Upon submission, a new customized card is generated and displayed in the section corresponding to the selected unit.

## ✨ Features

- [x] Add/remove collaborators
- [x] Create new teams
- [x] Local data persistence
- [x] Responsive interface
- [x] Form toggle

This project aims to practice form handling, state management, and data organization using React components.

## 🛠 Prerequisites

- Node.js (v16+)
- npm ou yarn
- Git (to clone the repository)

## 🚀 Installation and Execution

### 1. Clone the repository
```bash
git clone https://github.com/barbaramazevedo/organo-react.git
cd organo
```
### 2. Install dependencies
```bash
npm install
```
### 3. Start the application
```bash
npm run dev
```
## 🌐 API Endpoints

| Method  | Endpoint            | Description                     |
|---------|---------------------|---------------------------------|
| GET     | `/employees`        | List all employees              |
| GET     | `/teams`            | List all teams                  |
| POST    | `/employees`        | Add a new employee              |
| PUT     | `/employees/:id`    | Update an employee              |
| DELETE  | `/employees/:id`    | Remove an employee              |

## 🔄 Data Flow

![Data Flow](./organo/public/images/data_flow.png.png)


## 📸 Screenshots

![Formulário](./organo/public/images/Cards_Employees.png)
![Tela Principal](./organo/public/images/form.png) 



