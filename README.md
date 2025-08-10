# Team Organizer - Start DB

This project is a web application built with React to register and display team member cards for the Start DB program, organizing them by team/unit. The interface features a dynamic form where users can enter the member's name, role, image, and team. Upon submission, a new customized card is generated and displayed in the section corresponding to the selected team.

## ✨ Features

- [x] Add/remove collaborators
- [x] Create new teams
- [x] Local data persistence using localStorage
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
## 💾 Data Persistence

Employee and team data are stored locally in the browser using localStorage. This means information is retained even after closing the tab or browser, without requiring any external server or API.

You can reset the data to the default initial state by clicking the Reset Data button in the interface.

## 🔄 Data Flow

![Data Flow](/public/images/data_flow.png)


## 📸 Screenshots

![Formulário](/public/images/Cards_Employees.png)
![Tela Principal](/public/images/form.png) 



