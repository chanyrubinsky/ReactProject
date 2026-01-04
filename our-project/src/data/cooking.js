const BasicCooking = [{
    id: 1000,
    name: "חלות",
    PreparationTime: '02:00',
    status: 'start'
}, {
    id: 1001,
    name: "סלט חצילים אדומים",
    PreparationTime: '00:20',
    status: 'start'
}, {
    id: 1002,
    name: "סלט זיתים מרוסק",
    PreparationTime: '00:03',
    status: 'start'
}, {
    id: 1003,
    name: "סלט תירס",
    PreparationTime: '00:04',
    status: 'start'
}, {
    id: 1004,
    name: "סלט חסה",
    PreparationTime: '00:10',
    status: 'start'
}, {
    id: 1005,
    name: "סלט כרוב",
    PreparationTime: '00:10',
    status: 'start'
}, {
    id: 1006,
    name: "חומוס",
    PreparationTime: '00:10',
    status: 'start'
}, {
    id: 1007,
    name: "טחינה",
    PreparationTime: '00:07',
    status: 'start'
}, {
    id: 1008,
    name: "מנה אחרונה",
    PreparationTime: '00:30',
    status: 'start'
}, {
    id: 1009,
    name: "עוגה",
    PreparationTime: '00:10',
    status: 'start'
}]
const firstMeal = [{
    id: 1010,
    name: "דגים",
    PreparationTime: '00:15',
    status: 'start'
}, {
    id: 1011,
    name: "מרק",
    PreparationTime: '00:05',
    status: 'start'
}, {
    id: 1012,
    name: "עוף",
    PreparationTime: '00:10',
    status: 'start'
}, {
    id: 1013,
    name: "ירקות מוקפצים",
    PreparationTime: '00:20',
    status: 'start'
}, {
    id: 1014,
    name:"אורז",
    PreparationTime: '00:40',
    status: 'start'
}, {
    id: 1015,
    name: "מנה אחרונה",
    PreparationTime: '00:30',
    status: 'start'
}]
const secondMeal = [{
    id: 1016,
    name: "ביצים",
    PreparationTime: '00:15',
    status: 'start'
}, {
    id: 1017,
    name: "כבד",
    PreparationTime: '00:05',
    status: 'start'
}, {
    id: 1018,
    name: "טשולנט",
    PreparationTime: '00:10',
    status: 'start'
}, {
    id: 1019,
    name: "מנה אחרונה",
    PreparationTime: '00:20',
    status: 'start'
}]
const thirdMeal = [{
    id: 1020,
    name: "טונה",
    PreparationTime: '00:06',
    status: 'start'
}, {
    id: 1021,
    name: "פשטידה",
    PreparationTime: '00:45',
    status: 'start'
}, {
    id: 1022,
    name: "רוטב פיצה",
    PreparationTime: '00:15',
    status: 'start'
}, {
    id: 1023,
    name: "מנה אחרונה",
    PreparationTime: '00:20',
    status: 'start'
}]

export const getBasicCooking = () => {
    return new Promise((resolve) => resolve(BasicCooking));
}
export const getFirstMeal = () => {
    return new Promise((resolve) => resolve(firstMeal));
}
export const getSecondMeal = () => {
    return new Promise((resolve) => resolve(secondMeal));
}
export const getThirdMeal = () => {
    return new Promise((resolve) => resolve(thirdMeal));
}