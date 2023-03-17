let userfirstname = 'Rabin'
let userlastname ='Bhand'
let userdiscordId = 'disc'
let usersubscriptionStatus = 'VIP'


let user = {
{
    
},
};

function login(email, password) {
    for (let i =0; i < user.length; ++i ) {
        if (user[i].email === email) {
            console.log(user[i]);
        if (user[i].password === password) {
            console.log('log the user in - the details are correct')
        }
        else {
            console.log('password is incorrect - try again')
        }
        return;
     }

    } 
}
console.log(users[0]);

login('rabin@blahblah.com', 'test123')