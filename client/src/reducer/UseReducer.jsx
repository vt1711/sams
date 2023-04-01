
export const initialState = null;

export const reducer = (state, action) => {
    if (action.type === "USER") {
        return action.payload;
    }
   
    return state;

}

export const recordsreducer = (state, action) => {
   if (action.type === "RECORDS") {
        return action.payload;
    }

    return state;
}

export const searchnamereducer = (state, action) => {
    if (action.type === "SEARCHNAME") {
         return action.payload;
     }
 
     return state;
 }