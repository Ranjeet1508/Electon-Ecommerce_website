function navbar(){

    return `<div id="upper-of-nav">
    <div>
        <p>Need help? Call us (+91) 9876543210</p>
    </div>

    <div id="upper-nav-right">
        <div>
            <i class="fa-solid fa-location-dot"></i>
            <p id="location">Our store</p>
        </div>
        <div>
            <i class="fa-solid fa-truck"></i>
            <p>Track your order</p> 
        </div>
    </div>
</div>


<div id="nav">
    <div id="nav-1">
        <div id="first">
            <div id="leftPart">
                <i class="fa-solid fa-bolt-lightning" id="bolt-logo"></i>
                <h2>Electon</h2> 
            </div>
            
            <div id="righPart">
                <input type="text" id="search-inp" placeholder="Search any thing">
                <button id="search-btn">Search</button>
            </div>
        </div>

        <div id="second">
            <i class="fa-regular fa-user"></i>
            <p>Sign in</p>
            <p>Sign up</p>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>           
        </div>
    </div>

    <div id="nav-2">
        <div id="categories">
            <ul>
                <li class="browse">Categories</i>
                <div class="sub-menu">
                    <ul>
                        <li><a href="#">Laptop</a></li>
                        <li><a href="#">PC</a></li>
                        <li><a href="#">Camera</a></li>
                        <li><a href="#">Headphone</a></li>
                        <li><a href="#">Mobile</a></li>
                        <li><a href="#">Refrigerator</a></li>
                        <li><a href="#">Fan</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">LCD</a></li>
                        <li><a href="#">LED</a></li>
                    </ul>
                </div>
            </li>
                <li class="newNav"><a href="#">Home</a> </li>   
                 <li class="newNav"><a href="#">Catalog</a> </li>
                 <li class="newNav"><a href="#">Blog</a></li>
                 <li class="newNav"><a href="#">Pages</a> </li>
                 <li class="newNav"><a href="#">About us</a> </li> 
                </ul>
        </div>

        <div id="free-return">
            <h3>30 Days Free Return</h3>
        </div>
    </div>
</div>`

}

export default navbar;