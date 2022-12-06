
let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
    },
];



function showProduct(i) {
    document.querySelector(".modal-body").innerHTML = "";
    document.getElementById("exampleModalLabel").innerText = products[i].name;
    document.querySelector(
        ".modal-body"
    ).innerHTML += `<p><b>Serial Number: </b>${products[i].id}</p> 
  <p><b>Category: </b>${products[i].category}</p>
  <p><b>Description: </b>${products[i].description}</p>
  <p class="text-end"><b>Price: </b>${products[i].price}</p>`;
}
