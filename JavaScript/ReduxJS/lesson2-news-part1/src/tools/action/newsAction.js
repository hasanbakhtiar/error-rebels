export const addNews = ({cTitle,cImg,cDesc})=>({
        type:"ADD_NEWS",
        news:{
            title:cTitle,
            img:cImg,
            desc:cDesc
        }
})