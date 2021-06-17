let initialState = {
    friends:[{photo_url:"/img/friend.jpg",name:"Dwain Rock"},{photo_url:"/img/friend.jpg",name:"Johnson"},
    {photo_url:"/img/friend.jpg",name:"Johnson"}],
};

const navReducer = (state = initialState,action) => {
    console.log("nav");
    return state;
}
export default navReducer;