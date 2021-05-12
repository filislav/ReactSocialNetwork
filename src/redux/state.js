let store = {
    reRenederEntireTree(){
        console.log('no observers exists');
    },
    _state:{
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
    }, 
        addPost(){    
        this.state.profile.posts.push({id:4,message:this.state.profile.newPostText,likeCount:22})
        this.state.profile.newPostText = '';
        this.reRenederEntireTree();
    },
        addMessage(){
        this.state.dialogs.messages.push({message:this.state.dialogs.newMessageText,id:4})
        this.state.dialogs.newMessageText ='';
        this.reRenederEntireTree();
    },
        updateNewPostChange(newText){
        this.state.profile.newPostText = newText;
        this.reRenederEntireTree();
    },
        updateNewMessageText(newText){
        this.state.dialogs.newMessageText = newText;
        this.reRenederEntireTree();
    },
        subscribe(observer){
        this.reRenederEntireTree = observer;
    },
        getState(){
            return this._state;
        }  
}
export default store;