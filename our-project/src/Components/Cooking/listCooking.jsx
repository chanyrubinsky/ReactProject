import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShabbat } from '../context/ShabbatContext';
import { Cooking } from './Cooking';
import { getBasicCooking, getFirstMeal, getSecondMeal, getThirdMeal } from '../data/cooking';

/**
 * קומפוננטה מרכזית להצגת רשימות הבישולים לכל הסעודות.
 * משתמשת ב-Context כדי לדעת אילו סעודות להציג והאם המשתמש נוסע.
 */
export function ListCooking() {
  //const navigate = useNavigate();
  const { shabbatSettings } = useShabbat(); // קריאה ל-Context
  const [basicMeal, setBasicMeal] = useState([]); // רשימת הבישולים לסעודה בסיסית (למשתמשים שנוסעים)
  const [firstMeal, setFirstMeal] = useState([]);
  const [secondMeal, setSecondMeal] = useState([]);
  const [thirdMeal, setThirdMeal] = useState([]);
  const [newName, setNewName] = useState(""); // שם מאכל חדש
  const [newTime, setNewTime] = useState(""); // זמן הכנה של מאכל חדש
  const [newStatus, setNewStatus] = useState("start"); // סטטוס של מאכל חדש

  /**
   * useEffect שמטעין את רשימות הסعودות בהתאם למצב המשתמש:
   * - אם נוסע → רק רשימה בסיסית
   * - אחרת → רק הסعودות שהמשתמש סימן
   */
  useEffect(() => {
    if (shabbatSettings.isTraveling) {
      getBasicCooking().then(data => setBasicMeal(data)); // נסיעה - משתמשים רק ברשימה בסיסית
      setFirstMeal([]);
      setSecondMeal([]);
      setThirdMeal([]);
    } else {
          getBasicCooking().then(data => setBasicMeal(data)); // נסיעה - משתמשים רק ברשימה בסיסית)
      if (shabbatSettings.firstMeal) getFirstMeal().then(data => setFirstMeal(data));
      if (shabbatSettings.secondMeal) getSecondMeal().then(data => setSecondMeal(data));
      if (shabbatSettings.thirdMeal) getThirdMeal().then(data => setThirdMeal(data));
    }
  }, [shabbatSettings]);



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

  /**
   * פונקציה להצגת כל פריט ברשימת סעודה
   * @param {Array} arr - מערך של פריטי הסעודה
   * @param {Function} setArr - פונקציית עדכון המערך
   */
  const display = (arr, setArr) =>
    arr.map((item) => <Cooking key={item.id} item={item} arr={arr} setArr={setArr} />);

  const renderMeal = (mealName, arr, setArr) => (
    <>
      <h2>{mealName}</h2>
      {display(arr, setArr)}
      <input
        type="text"
        placeholder="שם המאכל"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="זמן הכנה"
        value={newTime}
        onChange={(e) => setNewTime(e.target.value)}
      />
      <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
        <option value="start">Start</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={() => AddItem(setArr)}>Add Item</button>
      <hr />
    </>
  );

  return (
    <div>
      {/* הצגת סעודות בהתאם ל-Context */}
      {shabbatSettings.firstMeal && renderMeal("סעודה ראשונה", firstMeal, setFirstMeal)}
      {shabbatSettings.secondMeal && renderMeal("סעודה שנייה", secondMeal, setSecondMeal)}
      {shabbatSettings.thirdMeal && renderMeal("סעודה שלישית", thirdMeal, setThirdMeal)}
      {renderMeal("סעודה בסיסית", basicMeal, setBasicMeal)}

      <button onClick={() => navigate("/summary")}>
        אישור
      </button>
    </div>
  );
}