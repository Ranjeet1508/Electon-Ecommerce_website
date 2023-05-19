

const fetchedDetails = async () => {
    try{
        let cameraId = localStorage.getItem("CameraId");
        let res = await fetch (`http://localhost:3000/Camera/${cameraId}`)
        let details = await res.json();
        console.log(details);
        displayData(details);
    }catch(err){
        console.log(err);
    }
}

const displayData = ((data) => {
    document.getElementById("bottom").innerHTML = "";

    let upperdiv = document.createElement("div");
    upperdiv.setAttribute("id","upper-div");

    let imagediv = document.createElement("div");
    imagediv.setAttribute("id","image-div");
    let image = document.createElement("img");
    image.setAttribute("id","myImage");
    image.src = data.image;
    imagediv.append(image);

    let detaildiv = document.createElement("div");
    detaildiv.setAttribute("id","detail-div");

    let availibilty = document.createElement("h3");
    availibilty.textContent = "Availibilty ✅";

    let title = document.createElement("h2");
    title.textContent = data.title;

    let price = document.createElement("h2");
    price.textContent ="Rs. " + data.price;

    let btn = document.createElement("button");
    btn.setAttribute("id","cart-button");
    btn.textContent = "Add to Cart";

    detaildiv.append(title,availibilty,price,btn);
    upperdiv.append(imagediv,detaildiv);

    let bottomdiv = document.createElement("div");
    bottomdiv.setAttribute("id","bottom-div")
    let desc = document.createElement("h2");
    desc.textContent = "Description"
    desc.style.textDecoration = "underline";
    let description = document.createElement("h3");
    description.textContent = data.description;
    bottomdiv.append(desc,description);

    document.getElementById("bottom").append(upperdiv,bottomdiv);
})


export {fetchedDetails,displayData};