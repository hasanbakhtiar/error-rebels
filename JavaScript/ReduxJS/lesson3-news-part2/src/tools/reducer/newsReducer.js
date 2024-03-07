const initialState = [];


export const newsReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "ADD_NEWS":
            return [...state,action.news]
    
        default:
            // return "this case is default";
    }
}