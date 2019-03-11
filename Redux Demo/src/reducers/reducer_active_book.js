//State argument is not  application state, only state to 
//this reducer is responsible for.
export default function ActiveBook( state =null, action){
    switch(action.type)
    {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state;
}