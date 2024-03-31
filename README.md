# Task Tracker App

## Overview
The Task Tracker App is designed to help team to manage their tasks efficiently by tracking their status and priority. [Internship Task]

## Features
- **Task Creation**: Users can create new tasks by providing a task name, description, priority level.
- **Task Listing**: The app displays all tasks in a list format, showing their name, description, status, priority.
- **Task Status Update**: Users can update the status of tasks as they progress, marking them as 'To Do', 'In Progress', or 'Done'.
- **Priority Management**: Tasks are categorized based on Pending, In Progress, Completed, Deployed, Deferred.
- **Search Functionality**: Users can search for specific tasks by Assignee and Priority.
- **Sorting**: Tasks can be sorted by priority and status.
- **Task Details**: Users can view detailed information about each task, including its description, priority and status.
- **Task Deletion**: Users can delete tasks that are no longer relevant or necessary.

## Usage
1. **Task Creation**:
   - Click on the "Create Task" button.
   - Fill in the required details such as task name, description, priority level. [Status is by default set to Pending]
   - Click on the "Create Task" button to create the task.

2. **Task Status Update**:
   - Click on the "Edit Task" button on task you want to update.
   - Choose the appropriate status from the dropdown menu ('In Progress', or 'Completed' ,etc).
   - The status will be automatically updated.

3. **Task Deletion**:
   - Click on the bin icon on task you want to delete.
   - Click on the "Delete" button to remove the task from the list.

4. **Search Functionality**:
   - Enter the assignee name or priority level you want to find in the search bar.
   - The app will display tasks containing those assignee in their names or descriptions.


# Note:
  - This app is not 100 % Completed. There are few bugs 
    1. After clearing filter, original tasks list is not update, need to refresh the page
    2. Sort by date needs to be implemented

# Tech Stack:
  - React JS
  - useContext for storing data
  - Bootstrap
  - React Icon Library





