import { useState, useEffect } from 'react';
import { getFirstMeal, getSecondMeal, getThirdMeal } from '../../data/cooking';
import { Cooking } from './Cooking';

export function ListCooking() {
    const [firstMeal, setFirstMeal] = useState([]);
    const [secondMeal, setSecondMeal] = useState([]);
    const [thirdMeal, setThirdMeal] = useState([]);
    const [newIdea, setIdea] = useState(""); // להוספה חדש
    const [newName, setNewName] = useState("");
    const [newTime, setNewTime] = useState("");
    const [newStatus, setNewStatus] = useState("start");
    useEffect(() => {
        getFirstMeal().then(data => setFirstMeal(data));
        getSecondMeal().then(data => setSecondMeal(data));
        getThirdMeal().then(data => setThirdMeal(data));
    }, []);


    const AddItem = (setArr) => {
        if (!newName.trim() || !newTime.trim()) return;

        const newItem = {
            id: Date.now(),
            name: newName,
            PreparationTime: newTime,
            status: newStatus,
        };

        setArr(prev => [...prev, newItem]);

        setNewName("");
        setNewTime("");
        setNewStatus("start");
    };
    const display = (arr, setArr) =>
        arr.map((item, index) => <Cooking key={item.id} item={item} arr={arr} setArr={setArr} />);

    return (
        <div>
            <h2>First Meal</h2>
            {display(firstMeal, setFirstMeal)}
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="start">Start</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={() => AddItem(setFirstMeal)}>Add Item to First Meal</button>


            <h2>Second Meal</h2>
            {display(secondMeal, setSecondMeal)}
             <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="start">Start</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={() => AddItem(setSecondMeal)}>Add Item to Second Meal</button>
           


            <h2>Third Meal</h2>
            {display(thirdMeal, setThirdMeal)}
             <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
            <input type="text" value={newTime} onChange={(e) => setNewTime(e.target.value)} />
            <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option value="start">Start</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
             <button onClick={() => AddItem(setThirdMeal)}>Add Item to Third Meal</button>
            
        </div>
    );
}
