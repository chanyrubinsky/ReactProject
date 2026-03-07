import React, { useMemo, useState } from "react";
import { useShabbat } from "../context/ShabbatContext";

export function SummaryPage() {

  const {
    shabbatSettings,
    firstMealList,
    secondMealList,
    thirdMealList
  } = useShabbat();

  // איחוד כל הרשימות למערך אחד
  const allMeals = useMemo(() => {
    let arr = [];

    if (shabbatSettings.firstMeal) arr = [...arr, ...firstMealList];
    if (shabbatSettings.secondMeal) arr = [...arr, ...secondMealList];
    if (shabbatSettings.thirdMeal) arr = [...arr, ...thirdMealList];

    return arr;
  }, [shabbatSettings, firstMealList, secondMealList, thirdMealList]);

  // חישוב זמן כולל התחלתי
  const totalTime = useMemo(() => {
    return allMeals.reduce((sum, item) =>
      sum + Number(item.PreparationTime), 0);
  }, [allMeals]);

  const [remainingTime, setRemainingTime] = useState(totalTime);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheck = (item) => {

    const isChecked = checkedItems.includes(item.id);

    if (isChecked) {
      // ביטול סימון
      setCheckedItems(prev => prev.filter(id => id !== item.id));
      setRemainingTime(prev => prev + Number(item.PreparationTime));
    } else {
      // סימון
      setCheckedItems(prev => [...prev, item.id]);
      setRemainingTime(prev => prev - Number(item.PreparationTime));
    }
  };

  return (
    <div>

      <h1>תצוגת בישולים</h1>

      <h3>סה"כ זמן התחלתי: {totalTime} דקות</h3>
      <h2>זמן שנותר: {remainingTime} דקות</h2>

      {allMeals.map(item => (
        <div key={item.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(item)}
          />
          {item.name} - {item.PreparationTime} דקות
        </div>
      ))}

    </div>
  );
}
