
const listMeal = [
    { id: 10, name: 'עופות', amount: '0', status: 'homeShopingBasicMeal', },
    { id: 12, name: 'בקבוקי שתיה', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 17, name: 'פירות', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 14, name: 'חטיפים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 11, name: 'תפוחי אדמה', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 18, name: 'חלות', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 6, name: 'פלפלים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 6, name: 'מלפפונים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 5, name: 'עגבניות', amount: '0', status: 'homeShopingBasicMeal' },
    , { id: 0, name: 'אורז', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 1, name: 'ממתקים', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 3, name: 'חסה', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 4, name: 'דגים', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 5, name: 'שקדי מרק', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 6, name: 'עוף', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 7, name: 'מוצרים למנה אחרונה', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 8, name: 'כבד', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 8, name: 'בשר', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 9, name: 'מוצרים למנה אחרונה', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 10, name: 'חומרים לפשטידה', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 11, name: ' חומרים לתוספת', amount: '0', status: 'homeShopingthirdMeal' }];
const hostingShopingList = [
    { id: 23, name: 'מתנות לאורחים', amount: '0', status: 'hostingShoping' },
    { id: 24, name: 'פרחים', amount: '0' },
    { id: 25, name: 'עוגה  לאורחים', amount: '0', status: 'hostingShoping' },
    { id: 26, name: 'נרות שעוה', amount: '0', status: 'hostingShoping' }];
const travelingShopingList = [
    { id: 26, name: 'מזון יבש', amount: '0', status: 'travelingShoping' },
    { id: 27, name: 'מים מינרלים', amount: '0', status: 'travelingShoping' },
    { id: 28, name: 'אוכל לדרך', amount: '0', status: 'travelingShoping' },
    { id: 29, name: 'מתנות למארחים', amount: '0', status: 'travelingShoping' }];
const basicShopingList = [
    { id: 20, name: 'מנקה רצפות ', amount: '0', status: 'basicShoping' },
    { id: 21, name: 'נייר טואלט', amount: '0', status: 'basicShoping' },
    { id: 22, name: 'טיטולים', amount: '0', status: 'basicShoping' },
    { id: 23, name: 'שמפו', amount: '0', status: 'basicShoping' },
    { id: 1, name: 'חלב', amount: '0', status: 'basicShoping' },
    { id: 2, name: 'לחם', amount: '0', status: 'basicShoping' },
    { id: 3, name: 'ביצים', amount: '0', status: 'basicShoping' },
    { id: 4, name: 'גבינה', amount: '0', status: 'basicShoping' }];

export const getlistMeal = () => {
    return new Promise((resolve, reject) => {
        resolve(listMeal);
        reject('קרתה שגיאה בשליפת המערך');
    });
};
export const getHostingShopingList = () => {
    return new Promise((resolve, reject) => {
        resolve(hostingShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
};

export const getTravelingShopingList = () => {
    return new Promise((resolve, reject) => {
        resolve(travelingShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
};
export const getBasicShopingList = () => {
    return new Promise((resolve, reject) => {
        resolve(basicShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
};
export const addNewMeal = (product) => {
    listMeal.push(product);
}
export const addNewHostingProduct = (product) => {
    hostingShopingList.push(product);
}
export const addNeeTravelingProduct = (product) => {
    travelingShopingList.push(product);
}
export const addNewBasicProduct = (product) => {
    basicShopingList.push(product);
}
export const removeMealById = async (id) => {
    const idx = listMeal.findIndex(item => item.id === id);
    if (idx === -1) return null;
    return listMeal.splice(idx, 1)[0];
};

export const removeHostingById = async (id) => {
    const idx = hostingShopingList.findIndex(item => item.id === id);
    if (idx === -1) return null;
    return hostingShopingList.splice(idx, 1)[0];
};

export const removeTravelingById = async (id) => {
    const idx = travelingShopingList.findIndex(item => item.id === id);
    if (idx === -1) return null;
    return travelingShopingList.splice(idx, 1)[0];
};

export const removeBasicById = async (id) => {
    const idx = basicShopingList.findIndex(item => item.id === id);
    if (idx === -1) return null;
    return basicShopingList.splice(idx, 1)[0];
};