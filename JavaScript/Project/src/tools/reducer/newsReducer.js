const initialState = [];


export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEWS":
            return [...state, action.news]
        case "EDIT_NEWS":
            return state.map(item=>{
                if (item.id === action.id) {
                    return{
                        ...item,...action.update
                    }
                }else{
                    return item
                }
            })

        case "DELETE_NEWS":
            return state.filter(({id})=>{
                return id !== action.id
            })

        default:
        // return "this case is default";
    }
}