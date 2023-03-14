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
        console.log(users[i]);
    } 
}
console.log(users[0]);

login('rabin@blahblah.com', 'test123')