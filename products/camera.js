const fetchedData = async () => {
    try{
        let res = await fetch(`http://localhost:3000/Camera`);
        let data = await res.json();
        console.log(data);
        displayData(data);
    }catch(err){
        console.log(err);
    }
}


const displayData = ((data) => {
    let mainSection = document.getElementById("myproduct");
    mainSection.innerHTML = "";
    
    data.forEach((elem) => {
        let div = document.createElement("div");
        div.setAttribute("id","box");
        div.addEventListener("click", () => {
            localStorage.setItem("CameraId",elem.id);
            location.href = "detailscamera.html"
        })

        let upperDiv = document.createElement("div");
        upperDiv.setAttribute("id","imagediv")
        let image = document.createElement("img");
        image.setAttribute("id","laptop-img")
        image.src = elem.image;
        upperDiv.append(image);

        let bottomDiv = document.createElement("div");
        bottomDiv.setAttribute("id","detail-div")
        let title = document.createElement("h4");
        title.setAttribute("class","laptop-title")
        title.textContent = elem.title;
        let br = document.createElement("br");
        let price = document.createElement("h2");
        price.textContent = "Rs. " + elem.price;

        bottomDiv.append(title,br,price);
        div.append(upperDiv,bottomDiv);
        mainSection.append(div);
    })
})
function searchProd () {
    document.getElementById("search-btn").addEventListener("click",() => {

    let input = document.getElementById("search-inp").value;
    console.log("done")
    location.href = `${input}.html`
})
}

export {fetchedData,displayData,searchProd}