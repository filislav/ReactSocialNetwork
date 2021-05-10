let reRenederEntireTree;
let state ={
    profile:{
        posts:[{id:1,message:'Hi, how are you?',likeCount:34},
        {id:2,message:"It's my first post",likeCount:56},
        {id:3,message:"It's my second post",likeCount:13}
        ],
        newPostText:''
    },
    dialogs:{
        messages:[{message:"Привет",id:1},{message:"Как дела?",id:2},{message:"Что нового?",id:3}],
        dialogs:[{id:1,name:"Slava"},{id:2,name:"Andrey"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Sveta"}],
        newMessageText:''
    },
    nav:{
        friends:[{photo_url:"/img/friend.jpg",name:"Dwain Rock"},{photo_url:"/img/friend.jpg",name:"Johnson"},
        {photo_url:"/img/friend.jpg",name:"Johnson"}]
    },
}    
export let addPost = ()=>{    
    state.profile.posts.push({id:4,message:state.profile.newPostText,likeCount:22})
    state.profile.newPostText = '';
    reRenederEntireTree(state);
};
export let addMessage = ()=>{
    state.dialogs.messages.push({message:state.dialogs.newMessageText,id:4})
    state.dialogs.newMessageText ='';
    reRenederEntireTree(state);
};
export let updateNewPostChange = (newText)=>{
    state.profile.newPostText = newText;
    reRenederEntireTree(state);
};
export let updateNewMessageText = (newText)=>{
    state.dialogs.newMessageText = newText;
    reRenederEntireTree(state);
}
export const subscribe =(observer) =>{
    reRenederEntireTree = observer;
}
export default state;