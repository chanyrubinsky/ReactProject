import React, { createContext, useContext, useState } from 'react';

const defaultSettings = {
    weekParsha: '',
    timeOfSabbath: '',
    timeOfLeavingSabbath: '',
    isTraveling: false,
    firstMeal: false,
    secondMeal: false,
    thirdMeal: false,
    numberOfGuests: 0,
};

export const ShabbatContext = createContext({
    shabbatSettings: defaultSettings,
    setShabbatSettings: () => {},
    updateShabbat: () => {},
    isEditing: false,
    setIsEditing: () => {},
    resetSettings: () => {},
});

export const ShabbatProvider = ({ children, initial = defaultSettings }) => {
    const [shabbatSettings, setShabbatSettings] = useState(initial);
    const [isEditing, setIsEditing] = useState(false);
    const [basicMealList, setBasicMealList] = useState([]);
    const [firstMealList, setFirstMealList] = useState([]);
    const [secondMealList, setSecondMealList] = useState([]);
    const [thirdMealList, setThirdMealList] = useState([]);

    const updateShabbat = (patch) => {
        setShabbatSettings((prev) => ({ ...prev, ...patch }));
        setIsEditing(false); // חזרה אוטומטית לתצוגה לאחר שמירה
    };

    const resetSettings = () => {
        setShabbatSettings(defaultSettings);
        setIsEditing(false);
    };

    return (
        <ShabbatContext.Provider value={{
            shabbatSettings,
            setShabbatSettings,
            updateShabbat,
            isEditing,
            setIsEditing,
            resetSettings,
            basicMealList,
            setBasicMealList,
            firstMealList,
            setFirstMealList,
            secondMealList,
            setSecondMealList,
            thirdMealList,
            setThirdMealList,
        }}>
            {children}
        </ShabbatContext.Provider>
    );
};

export const useShabbat = () => useContext(ShabbatContext);