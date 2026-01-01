import { useState } from "react";

export const Home = () => {

    const [isTraveling, setIsTraveling] = useState(false);

    const shabbatSettings = {
        WeekParsha: "",
        timeOfSabbath: "",
        timeOfLeavingSabbath: "",
        isTraveling: false,
        numberOfGuests: 0,
        firstMeal: false,
        secondMeal: false,
        thirdMeal: false
    };

    const handleSaveSettings = () => {
        shabbatSettings.WeekParsha = document.getElementById("WeekParsha").value;
        shabbatSettings.timeOfSabbath = document.getElementById("timeOfSabbath").value;
        shabbatSettings.timeOfLeavingSabbath = document.getElementById("timeOfLeavingSabbath").value;
        shabbatSettings.isTraveling = document.getElementById("isTraveling").checked;
        shabbatSettings.numberOfGuests = parseInt(document.getElementById("numberOfGuests").value);
        shabbatSettings.firstMeal = document.getElementById("firstMeal").checked;
        shabbatSettings.secondMeal = document.getElementById("secondMeal").checked;
        shabbatSettings.thirdMeal = document.getElementById("thirdMeal").checked;

        console.log(shabbatSettings);

    };

    const resetSettings = () => {
        WeekParsha.value = "";
        timeOfSabbath.value = "";
        timeOfLeavingSabbath.value = "";
        numberOfGuests.value = 0;
        isTraveling.checked = false;
        firstMeal.checked = false;
        secondMeal.checked = false;
        thirdMeal.checked = false;
    };

    return <>
        <h1>הגדרות שבת</h1>
        <input type="text" name="WeekParsha" id="WeekParsha" placeholder="פרשת השבוע" /><br />
        <label>זמן כניסת השבת
            <input type="time" name="timeOfSabbath" id="timeOfSabbath" /></label><br />
        <label>זמן יציאת השבת
            <input type="time" name="timeOfLeavingSabbath" id="timeOfLeavingSabbath" /></label><br />
        <label htmlFor="isTraveling"><input type="checkbox" name="isTraveling" id="isTraveling" checked={isTraveling} onChange={() => setIsTraveling(!isTraveling)} />נוסעים</label><br />
        <div id="notTraveling" style={{ display: isTraveling ? 'none' : 'block' }}>
            <input id="firstMeal" type="checkbox" />סעודה ראשונה<br />
            <input id="secondMeal" type="checkbox" />סעודה שנייה<br />
            <input id="thirdMeal" type="checkbox" />סעודה שלישית<br />
            <label htmlFor="numberOfGuests">מספר אורחים:
                <input type="number" name="numberOfGuests" id="numberOfGuests" min="0" max="20" /></label><br />
        </div>
        <button onClick={handleSaveSettings}>שמירת הגדרות</button>
        <button onClick={resetSettings}>איפוס הגדרות</button>

    </>
}