import React from "react";
import { useShabbat } from "../context/ShabbatContext.jsx";
import { EditShabbatSettings } from "./EditShabbatSettings.jsx";

export const ShabbatSettings = (props) => {

    const { shabbatSettings, isEditing, setIsEditing } = useShabbat();

    console.log(shabbatSettings+" from ShabbatSettings.jsx");
    

    if (!shabbatSettings) return null;

    if (isEditing) return <EditShabbatSettings />;

    return (
        <>
            <div id="shabbatSettings">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>הגדרות שבת</h1>
                    <button onClick={() => setIsEditing && setIsEditing(true)}>ערוך הגדרות</button>
                </div>

                <h2>שבת פרשת {shabbatSettings.weekParsha || '-'}</h2>
                <h3>זמן כניסת השבת: {shabbatSettings.timeOfSabbath || '-'}</h3>
                <h3>זמן יציאת השבת: {shabbatSettings.timeOfLeavingSabbath || '-'}</h3>

                {shabbatSettings.isTraveling ? (
                    <p>נוסעים בשבת זו</p>
                ) : (
                    <div>
                        <p>סעודות בבית:</p>
                        <ul>
                            {shabbatSettings.firstMeal && <li>סעודה ראשונה</li>}
                            {shabbatSettings.secondMeal && <li>סעודה שנייה</li>}
                            {shabbatSettings.thirdMeal && <li>סעודה שלישית</li>}
                            {!shabbatSettings.firstMeal && !shabbatSettings.secondMeal && !shabbatSettings.thirdMeal && (
                                <li>אין סעודות בבית</li>
                            )}
                        </ul>

                        <p>סעודות שמתארחים:</p>
                        <ul>
                            {!shabbatSettings.firstMeal && <li>סעודה ראשונה</li>}
                            {!shabbatSettings.secondMeal && <li>סעודה שנייה</li>}
                            {!shabbatSettings.thirdMeal && <li>סעודה שלישית</li>}
                        </ul>

                        <h3>מספר אורחים: {shabbatSettings.numberOfGuests ?? 0}</h3>
                    </div>
                )}
            </div>
        </>
    );
}