import React, { useState } from "react";
import './index.css'

export default function HabitTracker(){
    const [habit, setHabit ] = useState("")
    const [habits, setHabits ] = useState([])

    const handleChange = (e) => {
        setHabit(e.target.value)
    }

    const addHabit = () => {
        //add habit
        if(habit.trim() !== " "){
            setHabits([...habits, {name: habit}])
            setHabit("");
        }
    }

    const toggleComplete = (index) => {
        setHabits(
            habits.map((h, i) => i === index ? {...h, completed: !h.completed} : h)
        )
    }

    return (
        <div className="habit-container">
            <h1 className="habit-title">Habit Tracker</h1>
            <div className="habit-input-container">
                <input className="habit-input" type="text" value={habit} placeholder="Enter a habit here" onChange={handleChange} />
                <button className="habit-add-button" onClick={addHabit}>Add</button>
            </div>
            <ul className="habit-list">
                {
                    habits.map((h, index) => (
                        <li key={index} className={`habit-item ${h.completed ? "completed" : ""}`}>
                            {h.name}
                            <button className="habit-toggle-button" onClick={() => toggleComplete(index)}> {h.completed ? "Undo" : "complete"} </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
 
}