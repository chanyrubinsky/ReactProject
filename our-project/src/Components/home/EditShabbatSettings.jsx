import React, { useState, useEffect } from "react";
import { useShabbat } from "../context/ShabbatContext.jsx";

export const EditShabbatSettings = () => {

    // const [isTraveling, setIsTraveling] = useState(false);
    // const [editSettings, setEditSetting] = useState(true);

    // const shabbatSettings = {
    //     weekParsha: "",
    //     timeOfSabbath: "",
    //     timeOfLeavingSabbath: "",
    //     isTraveling: false,
    //     firstMeal: false,
    //     secondMeal: false,
    //     thirdMeal: false,
    //     numberOfGuests: 0
    // };

    // const handleSaveSettings = () => {
    //     shabbatSettings.weekParsha = document.getElementById("WeekParsha").value;
    //     shabbatSettings.timeOfSabbath = document.getElementById("timeOfSabbath").value;
    //     shabbatSettings.timeOfLeavingSabbath = document.getElementById("timeOfLeavingSabbath").value;
    //     shabbatSettings.isTraveling = document.getElementById("isTraveling").checked;
    //     shabbatSettings.firstMeal = document.getElementById("firstMeal").checked;
    //     shabbatSettings.secondMeal = document.getElementById("secondMeal").checked;
    //     shabbatSettings.thirdMeal = document.getElementById("thirdMeal").checked;
    //     shabbatSettings.numberOfGuests = parseInt(document.getElementById("numberOfGuests").value);
    //     setEditSetting(false);

    // };

    // const resetSettings = () => {
    //     WeekParsha.value = "";
    //     timeOfSabbath.value = "";
    //     timeOfLeavingSabbath.value = "";
    //     isTraveling.checked = false;
    //     firstMeal.checked = false;
    //     secondMeal.checked = false;
    //     thirdMeal.checked = false;
    //     numberOfGuests.value = 0;
    // };

    // return <>
    //     <div id="editShabbatSettings" style={{ display: editSettings ? 'block' : 'none' }}>
    //         <h1>עריכת הגדרות שבת</h1>
    //         <input type="text" name="WeekParsha" id="WeekParsha" placeholder="פרשת השבוע" /><br />
    //         <label>זמן כניסת השבת
    //             <input type="time" name="timeOfSabbath" id="timeOfSabbath" /></label><br />
    //         <label>זמן יציאת השבת
    //             <input type="time" name="timeOfLeavingSabbath" id="timeOfLeavingSabbath" /></label><br />
    //         <label htmlFor="isTraveling"><input type="checkbox" name="isTraveling" id="isTraveling" checked={isTraveling} onChange={() => setIsTraveling(!isTraveling)} />נוסעים</label><br />
    //         <div id="notTraveling" style={{ display: isTraveling ? 'none' : 'block' }}>
    //             <p>סעודות שנמצאים בבית</p>
    //             <input id="firstMeal" type="checkbox" />סעודה ראשונה<br />
    //             <input id="secondMeal" type="checkbox" />סעודה שנייה<br />
    //             <input id="thirdMeal" type="checkbox" />סעודה שלישית<br />
    //             <label htmlFor="numberOfGuests">מספר אורחים:
    //                 <input type="number" name="numberOfGuests" id="numberOfGuests" min="0" max="20" /></label><br />
    //         </div>
    //         <button onClick={handleSaveSettings}>שמירת הגדרות</button>
    //         <button onClick={resetSettings}>איפוס הגדרות</button>
    //     </div>
    //     {!editSettings ? <ShabbatSettings shabbatSettings={shabbatSettings}/>:'' }
    // </>


    const { shabbatSettings, updateShabbat, setShabbatSettings } = useShabbat();
    const [form, setForm] = useState(() => shabbatSettings || {});

    useEffect(() => setForm(shabbatSettings || {}), [shabbatSettings]);

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setForm((f) => ({
            ...f,
            [name]: type === "checkbox" ? checked : (type === "number" ? Number(value) : value),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateShabbat(form);
        // switch back to view mode via context
        // if (setIsEditing) setIsEditing(false);
    };

    const handleReset = () => {
        const defaults = {
            weekParsha: '',
            timeOfSabbath: '',
            timeOfLeavingSabbath: '',
            isTraveling: false,
            firstMeal: false,
            secondMeal: false,
            thirdMeal: false,
            numberOfGuests: 0,
        };
        setShabbatSettings(defaults);
        setForm(defaults);
    };

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: 12 }}>
            <h2>עריכת הגדרות שבת</h2>

            <label>
                פרשת שבת:
                <input name="weekParsha" value={form.weekParsha || ''} onChange={handleChange} />
            </label>
            <br />

            <label>
                זמן כניסה:
                <input name="timeOfSabbath" type="time" value={form.timeOfSabbath || ''} onChange={handleChange} />
            </label>
            <br />

            <label>
                זמן יציאה:
                <input name="timeOfLeavingSabbath" type="time" value={form.timeOfLeavingSabbath || ''} onChange={handleChange} />
            </label>
            <br />

            <label>
                <input name="isTraveling" type="checkbox" checked={!!form.isTraveling} onChange={handleChange} /> נוסעים
            </label>
            <br />

            {!form.isTraveling && (
                <div>
                    <p>סעודות בבית:</p>
                    <label><input name="firstMeal" type="checkbox" checked={!!form.firstMeal} onChange={handleChange} /> סעודה ראשונה</label>
                    <br />
                    <label><input name="secondMeal" type="checkbox" checked={!!form.secondMeal} onChange={handleChange} /> סעודה שנייה</label>
                    <br />
                    <label><input name="thirdMeal" type="checkbox" checked={!!form.thirdMeal} onChange={handleChange} /> סעודה שלישית</label>
                    <br />
                    <label>
                        מספר אורחים:
                        <input name="numberOfGuests" type="number" min="0" max="50" value={form.numberOfGuests ?? 0} onChange={handleChange} />
                    </label>
                </div>
            )}

            <br />
            <button type="submit">שמור הגדרות</button>
            <button type="button" onClick={handleReset} style={{ marginLeft: 8 }}>איפוס ברירת מחדל</button>
            {/* <button type="button" onClick={() => setIsEditing && setIsEditing(false)} style={{ marginLeft: 8 }}>הצג הגדרות</button> */}
        </form>
    );
};