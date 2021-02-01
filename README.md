
# Kanban app
  
Welcome to a REST-ful kanban application that helps to control and monitor team's tasks.
  
**A Netlify deployed version**:  https://kanban-redux-dnd.netlify.app/

Server deployed at Heroku.

**Front end stack** : 
- JavaScript ES6
- React 
- Redux 
- Ant Design

**Back end stack** : 
- JavaScript
- Node.js
- Express.js
- Mongo DB
  
## Features  
  
Kanban usage is pretty simple - create a task, set priority, and status. 
Each column indicates an individual status. Move task from column to column to change status. 
  
### Basic functionality  

1. Create, edit, delete a task  
2. Tasks are filtered by priority from high to low in each column
3. Change status as a task moved to another column
  
### REST  
  
Client-Server-Database structure. The app is storing tasks in the database. Each interaction with the kanban will send an HTTP-request. Express.js server processes it and, if a request is valid and eligible, makes changes to MongoDB.
  
### Drag-n-drop  
  
For this feature, I used the React-dnd library to work with HTML Drag and Drop API. A customer can drag any task and drop it into any column. As a result, a task's status will be changed to a column's title.