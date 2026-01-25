import { useState } from "react";

export const ShabbatSettings = (props) => {

    const { shabbatSettings } = props;
    console.log("----------" + props);


    return <>
        <div id="shabbatSettings">
            <h1>הגדרות שבת</h1>
            <h2>שבת פרשת {shabbatSettings.weekParsha}</h2>
            <h3>זמן כניסת השבת: {shabbatSettings.timeOfSabbath}</h3>
            <h3>צאת השבת: {shabbatSettings.timeOfLeavingSabbath}</h3>
            {shabbatSettings.isTraveling ? <p>נוסעים בשבת זו</p> : <div>
                <p>סעודות בבית:</p>
                {shabbatSettings.firstMeal && <li>סעודה ראשונה</li>}
                {shabbatSettings.secondMeal && <li>סעודה שנייה</li>}
                {shabbatSettings.thirdMeal && <li>סעודה שלישית</li>}
                <p>סעודות שמתארחים</p>
                {!shabbatSettings.firstMeal && <li>סעודה ראשונה</li>}
                {!shabbatSettings.secondMeal && <li>סעודה שנייה</li>}
                {!shabbatSettings.thirdMeal && <li>סעודה שלישית</li>}
                <h3>מספר אורחים: {shabbatSettings.numberOfGuests}</h3>
            </div>}
            {/* <label htmlFor="isTraveling"><input type="checkbox" name="isTraveling" id="isTraveling" checked={isTraveling} onChange={() => setIsTraveling(!isTraveling)} />נוסעים</label><br />
            <div id="notTraveling" style={{ display: isTraveling ? 'none' : 'block' }}>
                <input id="firstMeal" type="checkbox" />סעודה ראשונה<br />
                <input id="secondMeal" type="checkbox" />סעודה שנייה<br />
                <input id="thirdMeal" type="checkbox" />סעודה שלישית<br />
                <label htmlFor="numberOfGuests">מספר אורחים:
                    <input type="number" name="numberOfGuests" id="numberOfGuests" min="0" max="20" /></label><br />
            </div>
            <button onClick={handleSaveSettings}>שמירת הגדרות</button>
            <button onClick={resetSettings}>איפוס הגדרות</button> */}
        </div>

    </>
}