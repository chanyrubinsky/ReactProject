

/* ===== משימות לשבת ביתית ===== */
const homeTasks = [
  { id: 1, title: "שטיפת רצפות", duration: 60, recommendedDay: "חמישי", done: false },
  { id: 2, title: "ניקוי מטבח", duration: 45, recommendedDay: "חמישי", done: false },
  { id: 3, title: "ניקוי שירותים", duration: 25, recommendedDay: "חמישי", done: false },
  { id: 4, title: "ניקוי חדר שינה", duration: 30, recommendedDay: "שישי", done: false },
  { id: 5, title: "החלפת מצעים", duration: 20, recommendedDay: "שישי", done: false },
  { id: 6, title: "סידור סלון", duration: 30, recommendedDay: "שישי", done: false },
  { id: 7, title: "ניקוי מקרר", duration: 40, recommendedDay: "חמישי", done: false },
  { id: 8, title: "פינוי פחים", duration: 10, recommendedDay: "שישי", done: false },
  { id: 9, title: "סידור ארונות", duration: 35, recommendedDay: "חמישי", done: false },
  { id: 10, title: "הכנת נרות לשבת", duration: 5, recommendedDay: "שישי", done: false }
];

/* ===== משימות לשבת שמתארחים בה ===== */
const hostingTasks = [
  { id: 1, title: "אריזת מזוודה", duration: 45, recommendedDay: "שישי", done: false },
  { id: 2, title: "בחירת בגדי שבת", duration: 20, recommendedDay: "חמישי", done: false },
  { id: 3, title: "הכנת מתנה למארחים", duration: 30, recommendedDay: "חמישי", done: false },
  { id: 4, title: "קיפול בגדים", duration: 25, recommendedDay: "שישי", done: false },
  { id: 5, title: "בדיקת רשימת ציוד", duration: 15, recommendedDay: "שישי", done: false },
  { id: 6, title: "ניקוי רכב", duration: 30, recommendedDay: "חמישי", done: false },
  { id: 7, title: "בדיקת זמני נסיעה", duration: 10, recommendedDay: "חמישי", done: false },
  { id: 8, title: "הכנת נעליים", duration: 10, recommendedDay: "שישי", done: false },
  { id: 9, title: "טעינת טלפונים", duration: 5, recommendedDay: "שישי", done: false },
  { id: 10, title: "אריזת מוצרי היגיינה", duration: 20, recommendedDay: "חמישי", done: false }
];

/* ===== תוספות לאירוח בבית ===== */
const guestTasks = [
  { id: 1, title: "סידור חדר אורחים", duration: 40, recommendedDay: "חמישי", done: false },
  { id: 2, title: "הכנת מצעים לאורחים", duration: 25, recommendedDay: "חמישי", done: false },
  { id: 3, title: "ניקוי שולחן אוכל", duration: 20, recommendedDay: "שישי", done: false },
  { id: 4, title: "הוספת כיסאות", duration: 10, recommendedDay: "שישי", done: false },
  { id: 5, title: "סידור כלים מיוחדים", duration: 20, recommendedDay: "חמישי", done: false },
  { id: 6, title: "הכנת שתייה חמה", duration: 15, recommendedDay: "שישי", done: false },
  { id: 7, title: "בדיקת תאורה", duration: 10, recommendedDay: "שישי", done: false },
  { id: 8, title: "הכנת מגבות", duration: 15, recommendedDay: "חמישי", done: false },
  { id: 9, title: "ניקוי מפה", duration: 10, recommendedDay: "חמישי", done: false },
  { id: 10, title: "הכנת סלסלת אירוח", duration: 25, recommendedDay: "שישי", done: false }
];

/* ===== פונקציות שרת מדומה (Promise בלבד) ===== */

export const getHomeTasks = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(homeTasks), 300);
  });

export const getHostingTasks = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(hostingTasks), 300);
  });

export const getGuestTasks = () =>
  new Promise(resolve => {
    setTimeout(() => resolve(guestTasks), 300);
  });
