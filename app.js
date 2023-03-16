let userfirstname = 'Rabin'
let userlastname ='Bhand'
let userdiscordId = 'disc'
let usersubscriptionStatus = 'VIP'


let user = {
{
    username: 'Rabin',
    email: 'rabin@blahblah.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Disc',
    lessonscompleted: [0],
},
{
    username: 'sabin',
    email: 'sabin@blahblah.com',
    password: 'sad1234',
    subscriptionStatus: 'VIP',
    discordId: 'Dsasisc',
    lessonscompleted: [0, 1, 2, 3],
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