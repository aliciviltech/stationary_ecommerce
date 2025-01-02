const array = [
    {
        id: 1,
        quantity: 1
    },
    {
        id: 2,
        quantity: 1
    }
]

const addItem = (array, payload) => {
    let itemFound = false;
    const updatedArray = array.map((item) => { 
        if (item.id === payload.id) {
            itemFound = true;
            return {...item, quantity:item.quantity+1 };
        }
        return item;
    })
    if(itemFound === false){
        return [...array, payload, 'this array'];
    }
    return updatedArray;
}
const finalArray = addItem(array, { id: 3, quantity: 4 })
console.log('final array',finalArray)

const newArray = array.map((item)=>item.quantity+2)
// console.log(newArray)

