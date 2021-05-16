let store = {
    _callSubscriber(){
        console.log('no observers exists');
    },
    _state:{
        profile:{
            posts:[{id:1,message:'Hi, how are you?',likeCount:34},
            {id:2,message:"It's my first post",likeCount:56},
            {id:3,message:"It's my second post",likeCount:13}
            ],
            newPostText:'',
            addPost(){    
                this.posts.push({id:4,message:this.newPostText,likeCount:22})
                this.newPostText = '';
                store._callSubscriber(store._state);
            },
            updateNewPostChange(newText){
                this.newPostText = newText;
                store._callSubscriber(store._state);
            },
            
        },
        dialogs:{
            messages:[{message:"Привет",id:1},{message:"Как дела?",id:2},{message:"Что нового?",id:3}],
            dialogs:[{id:1,name:"Slava"},{id:2,name:"Andrey"},{id:3,name:"Sasha"},{id:4,name:"Masha"},{id:5,name:"Sveta"}],
            newMessageText:'',
            addMessage(){
                this.messages.push({message:this.newMessageText,id:4})
                this.newMessageText ='';
                store._callSubscriber(store._state);
            },
            updateNewMessageText(newText){
                this.newMessageText = newText;
                store._callSubscriber(store._state);
            },
        },
        nav:{
            friends:[{photo_url:"/img/friend.jpg",name:"Dwain Rock"},{photo_url:"/img/friend.jpg",name:"Johnson"},
            {photo_url:"/img/friend.jpg",name:"Johnson"}]
        },
    }, 

        subscribe(observer){
        this._callSubscriber = observer;
    },
        getState(){
            return this._state;
        }  
}
export default store;