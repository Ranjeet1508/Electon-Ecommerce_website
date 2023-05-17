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
            <div id="browse">
                <p>Browse categories</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div>
                <p>Home</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div>
                <p>Catalog</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div>
                <p>Blog</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div>
                <p>Pages</p>
                <i class="fa-solid fa-angle-down"></i>
            </div>
            <div>
                <p>About us</p>
            </div>      
        </div>

        <div id="free-return">
            <h3>30 Days Free Return</h3>
        </div>
    </div>
</div>`

}

export default navbar;