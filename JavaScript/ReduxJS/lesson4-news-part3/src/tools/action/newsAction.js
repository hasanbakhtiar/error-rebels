export const addNews = ({cTitle,cImg,cDesc})=>({
        type:"ADD_NEWS",
        news:{
            id:crypto.randomUUID(),
            title:cTitle,
            img:cImg,
            desc:cDesc
        }
})