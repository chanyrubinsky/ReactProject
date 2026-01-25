import { useState } from "react";
import { ShabbatSettings } from "./ShabbatSettings";

export const EditShabbatSettings = () => {

    const [isTraveling, setIsTraveling] = useState(false);
    const [editSettings, setEditSetting] = useState(true);

    const shabbatSettings = {
        weekParsha: "",
        timeOfSabbath: "",
        timeOfLeavingSabbath: "",
        isTraveling: false,
        firstMeal: false,
        secondMeal: false,
        thirdMeal: false,
        numberOfGuests: 0
    };

    const handleSaveSettings = () => {
        shabbatSettings.weekParsha = document.getElementById("WeekParsha").value;
        shabbatSettings.timeOfSabbath = document.getElementById("timeOfSabbath").value;
        shabbatSettings.timeOfLeavingSabbath = document.getElementById("timeOfLeavingSabbath").value;
        shabbatSettings.isTraveling = document.getElementById("isTraveling").checked;
        shabbatSettings.firstMeal = document.getElementById("firstMeal").checked;
        shabbatSettings.secondMeal = document.getElementById("secondMeal").checked;
        shabbatSettings.thirdMeal = document.getElementById("thirdMeal").checked;
        shabbatSettings.numberOfGuests = parseInt(document.getElementById("numberOfGuests").value);
        setEditSetting(false);

    };

    const resetSettings = () => {
        WeekParsha.value = "";
        timeOfSabbath.value = "";
        timeOfLeavingSabbath.value = "";
        isTraveling.checked = false;
        firstMeal.checked = false;
        secondMeal.checked = false;
        thirdMeal.checked = false;
        numberOfGuests.value = 0;
    };

    return <>
        <div id="editShabbatSettings" style={{ display: editSettings ? 'block' : 'none' }}>
            <h1>עריכת הגדרות שבת</h1>
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
        </div>
        {!editSettings ? <ShabbatSettings shabbatSettings={shabbatSettings}/>:'' }
    </>
}