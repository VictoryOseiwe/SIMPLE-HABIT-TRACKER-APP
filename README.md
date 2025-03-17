# React Habit Tracker

This is a simple React application that allows users to track their habits. Users can add habits, mark them as completed, and undo completion.

## Features

* **Add Habits:** Users can input a habit and add it to the tracking list.
* **Mark as Completed:** Users can mark habits as completed with a toggle button.
* **Undo Completion:** Users can undo the completion of a habit.
* **Simple UI:** Clean and straightforward user interface.

## Prerequisites

* Node.js (>= 14)
* npm (or yarn)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/VictoryOseiwe/SIMPLE-HABIT-TRACKER-APP.git
    cd SIMPLE-HABIT-TRACKER-APP
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

## Running the Application

1.  **Start the development server:**

    ```bash
    npm start
    ```

    or

    ```bash
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1.  **Adding a Habit:**
    * Enter the habit in the input field.
    * Click the "Add" button.
2.  **Marking as Completed:**
    * Click the "Complete" button next to the habit.
3.  **Undoing Completion:**
    * Click the "Undo" button next to the completed habit.

## Code Explanation

* **`HabitTracker.js`:**
    * Uses the `useState` hook to manage the `habit` input value and the `habits` array.
    * `handleChange` function updates the `habit` state.
    * `addHabit` function adds a new habit object to the `habits` array.
    * `toggleComplete` function updates the `completed` property of a habit in the `habits` array.
    * Renders the input field, add button, and the list of habits.
* **`index.css`:**
    * Contains the styling for the habit tracker application.

## Dependencies

* `react`: Core React library.

## Future Improvements

* Add local storage to persist habits.
* Implement habit deletion functionality.
* Improve styling and user experience.
* Add date tracking for habits.
* Add a visual representation of habit completion, such as a calendar view.
