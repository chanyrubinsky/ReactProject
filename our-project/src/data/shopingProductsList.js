const homeShopingList = [
    { id: 9, name: 'אורז', amount: '0' },
    { id: 10, name: 'עופות', amount: '0' },
    { id: 11, name: 'תפוחי אדמה', amount: '0' },
    { id: 12, name: 'בקבוקי שתיה', amount: '0' },
    { id: 14, name: 'חטיפים', amount: '0' },
    { id: 15, name: 'ממתקים', amount: '0' },
    { id: 17, name: 'פירות', amount: '0' },
    { id: 18, name: 'חלות', amount: '0' },
    { id: 19, name: 'סלטים', amount: '0' },
    { id: 6, name: 'חסה', amount: '0' },
    { id: 7, name: 'בשר', amount: '0' },
    { id: 8, name: 'דגים', amount: '0' }];

const hostingShopingList = [
    { id: 23, name: 'מתנות לאורחים', amount: '0' },
    { id: 24, name: 'פרחים', amount: '0' },
    { id: 25, name: 'עוגה  לאורחים', amount: '0' },
    { id: 26, name: 'נרות שעוה', amount: '0' },
];
const travelingShopingList = [
    { id: 26, name: 'מזון יבש', amount: '0' },
    { id: 27, name: 'מים מינרלים', amount: '0' },
    { id: 28, name: 'אוכל לדרך', amount: '0' },
    { id: 29, name: 'מתנות מארחים', amount: '0' },
];
const basicShopingList = [
    { id: 20, name: 'מנקה רצפות ', amount: '0' },
    { id: 21, name: 'נייר טואלט', amount: '0' },
    { id: 22, name: 'טיטולים', amount: '0' },
    { id: 23, name: 'שמפו', amount: '0' },
    { id: 1, name: 'חלב', amount: '0' },
    { id: 2, name: 'לחם', amount: '0' },
    { id: 3, name: 'ביצים', amount: '0' },
    { id: 4, name: 'גבינה', amount: '0' },
     { id: 5, name: 'עגבניות', amount: '0' },
    { id: 6, name: 'מלפפונים', amount: '0' },
    { id: 6, name: 'פלפלים', amount: '0' },
    
];
export const getBasicShopingList=() => {
  return new Promise((resolve, reject) => {
    resolve(basicShopingList);
    reject('קרתה שגיאה בשליפת המערך');
  });
};

export const getTravelingShopingList=() => {
    return new Promise((resolve, reject) => {
        resolve(travelingShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
}

export const getHostingShopingList=() => {
    return new Promise((resolve, reject) => {
        resolve(hostingShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
};
export const getHomeShopingList=() => {
    return new Promise((resolve, reject) => {
        resolve(homeShopingList);
        reject('קרתה שגיאה בשליפת המערך');
    });
};
