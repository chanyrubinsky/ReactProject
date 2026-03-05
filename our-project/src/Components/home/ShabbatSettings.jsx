import React from "react";
import { useShabbat } from "../context/ShabbatContext.jsx";
import { EditShabbatSettings } from "./EditShabbatSettings.jsx";
import "./ShabbatSettings.css";

export const ShabbatSettings = (props) => {

    const { shabbatSettings, isEditing, setIsEditing, resetSettings } = useShabbat();

    if (!shabbatSettings) return null;

    if (isEditing) return <EditShabbatSettings />;

    const isEmpty = !shabbatSettings.weekParsha && !shabbatSettings.timeOfSabbath;

    return (
        <>
            <div id="shabbatSettings">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>הגדרות שבת</h1>
                    <div>
                        <button onClick={() => setIsEditing(true)} style={{ marginLeft: 8 }}>ערוך הגדרות</button>
                        <button onClick={resetSettings} style={{ marginLeft: 8 }}>איפוס לברירת מחדל</button>
                    </div>
                </div>

                {isEmpty ? (
                    <div className="empty-state">
                        <p>עדיין לא הגדרת את ההגדרות שלך</p>
                        <p>לחץ על "ערוך הגדרות" כדי להתחיל לתכנן את השבת שלך</p>
                        <button onClick={() => setIsEditing(true)}>בואו נתחיל!</button>
                    </div>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </>
    );
}