const listMeal = [
    { id: 10, name: 'ע', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 12, name: 'בקבוקי שתיה', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 17, name: 'פירות', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 14, name: 'חטיפים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 11, name: 'תפוחי אדמה', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 18, name: 'חלות', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 6, name: 'פלפלים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 7, name: 'מלפפונים', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 5, name: 'עגבניות', amount: '0', status: 'homeShopingBasicMeal' },
    { id: 0, name: 'אורז', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 1, name: 'ממתקים', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 2, name: 'לסעודה סלטים', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 3, name: 'חסה', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 4, name: 'דגים', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 5, name: 'שקדי מרק', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 6, name: 'עוף', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 7, name: 'מוצרים למנה אחרונה', amount: '0', status: 'homeShopingfirstMeal' },
    { id: 8, name: 'כבד', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 9, name: 'בשר', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 10, name: 'מוצרים למנה אחרונה', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 11, name: 'חומרים לפשטידה', amount: '0', status: 'homeShopingSecondMeal' },
    { id: 12, name: 'חומרים לתוספת', amount: '0', status: 'homeShopingthirdMeal' }
];

const hostingShopingList = [
    { id: 23, name: 'מתנות לאורחים', amount: '0', status: 'hostingShoping' },
    { id: 24, name: 'פרחים', amount: '0', status: 'hostingShoping' },
    { id: 25, name: 'עוגה לאורחים', amount: '0', status: 'hostingShoping' },
    { id: 26, name: 'נרות שעווה', amount: '0', status: 'hostingShoping' }
];

const travelingShopingList = [
    { id: 26, name: 'מזון יבש', amount: '0', status: 'travelingShoping' },
    { id: 27, name: 'מים מינרלים', amount: '0', status: 'travelingShoping' },
    { id: 28, name: 'אוכל לדרך', amount: '0', status: 'travelingShoping' },
    { id: 29, name: 'מתנות למארחים', amount: '0', status: 'travelingShoping' }
];

const basicShopingList = [
    { id: 20, name: 'מנקה רצ', amount: '0', status: 'basicShoping' },
    { id: 21, name: 'נייר טואלט', amount: '0', status: 'basicShoping' },
    { id: 22, name: 'טיטולים', amount: '0', status: 'basicShoping' },
    { id: 23, name: 'שמפו', amount: '0', status: 'basicShoping' },
    { id: 1, name: 'חלב', amount: '0', status: 'basicShoping' },
    { id: 2, name: 'לחם', amount: '0', status: 'basicShoping' },
    { id: 3, name: 'ביצים', amount: '0', status: 'basicShoping' },
    { id: 4, name: 'גבינה', amount: '0', status: 'basicShoping' }
];

export const getlistMeal = () => {
    console.log('getlistMeal called');
    return Promise.resolve(listMeal);
};

export const getHostingShopingList = () => {
    return Promise.resolve(hostingShopingList);
};

export const getTravelingShopingList = () => {
    return Promise.resolve(travelingShopingList);
};

export const getBasicShopingList = () => {
    return Promise.resolve(basicShopingList);
};

export const addNewMeal = (product) => {
    listMeal.push(product);
};

export const addNewHostingProduct = (product) => {
    hostingShopingList.push(product);
};

export const addNeeTravelingProduct = (product) => {
    travelingShopingList.push(product);
};

export const addNewBasicProduct = (product) => {
    basicShopingList.push(product);
};