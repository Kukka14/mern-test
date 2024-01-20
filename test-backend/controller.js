const users = [
    {
     id: 1,
     name: 'Thakshila',
    },
 
    {
     id: 2,
     name: 'Gunawardena',
    }
 ];
 
 const getUsers = (cb) => {
     cb(users);
 };
 
 const getUsersById  = (id, cb) => {
     const user = users.find(user => user.id == id);
     cb(user);
 };
 
 exports.getUsers = getUsers;
 exports.getUsersById = getUsersById;