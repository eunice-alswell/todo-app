# Todo App

A simple and intuitive task management application to help you organize your daily activities and stay productive. Built with modern web technologies during my web development learning journey.

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## About

This Todo App is a lightweight task management application that helps you keep track of your daily tasks and stay organized. Created as part of my web development learning journey, this project demonstrates fundamental concepts in JavaScript, DOM manipulation, and local storage.

## Features

- **Add Tasks** - Quickly add new tasks to your list
- **Edit Tasks** - Modify existing tasks on the fly
- **Delete Tasks** - Remove completed or unwanted tasks
-  **Mark as Complete** - Check off tasks as you complete them
- **Local Storage** - Your tasks persist even after closing the browser
- **Clean UI** - Simple and intuitive user interface
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Real-time Updates** - Instant feedback on all actions
- **Visual Feedback** - Clear indicators for task status

## Technologies Used

- **HTML5** - Markup structure
- **CSS3** - Styling and layout
- **JavaScript (ES6+)** - Application logic and interactivity
- **Local Storage API** - Client-side data persistence

## Project Structure

```
todo-app/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Stylesheet
├── js/
│   └── app.js         # JavaScript logic
├── assets/            # Images and icons (if applicable)
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites

All you need is a modern web browser! No installation or dependencies required.

### Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eunice-alswell/todo-app.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd todo-app
   ```

3. **Open in browser:**
   
   Simply open `index.html` in your web browser:
   ```bash
   # On macOS
   open index.html
   
   # On Linux
   xdg-open index.html
   
   # On Windows
   start index.html
   ```

   Or you can use a local development server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

   Then visit `http://localhost:8000` in your browser.

## How to Use

1. **Adding a Task:**
   - Type your task in the input field
   - Press Enter or click the "Add" button
   - Your task will appear in the list below

2. **Completing a Task:**
   - Click on the checkbox next to a task
   - The task will be marked as complete (usually with a strikethrough)

3. **Editing a Task:**
   - Click the edit button next to a task
   - Modify the text
   - Save your changes

4. **Deleting a Task:**
   - Click the delete/trash icon next to a task
   - The task will be removed from your list

5. **Viewing Tasks:**
   - All tasks are displayed in your list
   - Completed and pending tasks may be visually distinguished

## Key Features Explained

### Local Storage
Your tasks are automatically saved to your browser's local storage, meaning they'll still be there when you return to the app later. No backend or database required!

### Responsive Design
The app adapts to different screen sizes, providing an optimal experience whether you're on a phone, tablet, or desktop.

### Clean Code
The JavaScript code follows best practices with clear variable names, comments, and modular functions.

## 🎓 What I Learned

Building this todo app helped me understand:

- DOM manipulation with JavaScript
- Event handling and listeners
- Working with the Local Storage API
- Array methods (map, filter, forEach, etc.)
- Creating responsive layouts with CSS
- Implementing CRUD operations (Create, Read, Update, Delete)
- Debugging JavaScript applications
- User experience design principles
- State management in vanilla JavaScript

## Future Enhancements

Ideas for improving this app:

- [ ] Add task categories/tags
- [ ] Implement task prioritization (high, medium, low)
- [ ] Add due dates and reminders
- [ ] Include search and filter functionality
- [ ] Add dark mode toggle
- [ ] Implement drag-and-drop reordering
- [ ] Add task notes or descriptions
- [ ] Create multiple todo lists
- [ ] Add statistics (completion rate, total tasks, etc.)
- [ ] Export tasks to file (JSON, CSV)
- [ ] Add animations and transitions
- [ ] Implement undo/redo functionality
- [ ] Add keyboard shortcuts

## Browser Compatibility

This app works on all modern browsers:

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Code Examples

### Adding a Task
```javascript
function addTask(taskText) {
  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(task);
  saveTasks();
  renderTasks();
}
```

### Saving to Local Storage
```javascript
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
}
```

## Contributing

This is a learning project, but contributions and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Eunice Alswell**

- GitHub: [@eunice-alswell](https://github.com/eunice-alswell)

## Acknowledgments

- Built as part of my JavaScript learning journey
- Inspired by classic todo applications like TodoMVC
- Thanks to the web development community for tutorials and resources

## Known Issues

If you find any bugs or have suggestions, please [open an issue](https://github.com/eunice-alswell/todo-app/issues).

---

💡 **Note:** This project represents an important step in my journey to understanding JavaScript and web development fundamentals. While simple, it covers essential concepts that are foundational to more complex applications.

If you found this project helpful or interesting, please consider giving it a star!
