export const addNews = ({title,img,desc})=>({
        type:"ADD_NEWS",
        news:{
            id:crypto.randomUUID(),
            title,
            img,
            desc
        }
})

export const editNews = (id,update)=>({
    type:"EDIT_NEWS",
    id,
    update
    
})

export const deleteNews = ({id})=>({
    type:"DELETE_NEWS",
    id
})