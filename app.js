// fetch("https://jasonplaceholder.typicode.com/users/1")
const emailRef = document.querySelector(".email");

//1. Then
// fetch("https://jasonplaceholder.typicode.com/users/1")
//      .then((response)  => {
//       return response.jason();
//       })
//      .then((data)  => {
//      console.log(data);
//      rmailRef.innerHTML = data.email
//      });


// 2. Async/Await
async function main() {
    const response = await fetch("https://jasonplaceholder.typicode.com/users/1")
    const data = await response.json
    console.log (data)
}

main():