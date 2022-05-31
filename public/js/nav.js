const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <div class="nav">
        <a href="../index.html"><img src="../images/logo.jpg"  class="brand-logo" alt=""></a>
    <div class="nav-items">
    <meta name="viewport" content="width=device-width, initial-scale=1">

       <div class="search">
       
        <input type="text" class="search-box" placeholder="search brand, product">
        <button class="search-btn"><p> search  </p></button>
    </div>
    <a>
        <img src="../images/use.png" id="user-img" alt="">
        <div class="login-logout-popup hide">
            <p class="account-info">Log in as, name</p>
            <button class="btn" id="user-btn">Log out</button>


        </div>
    </a>
    <a href="/cart"><img src="../images/cart.png" alt=""></a>

    </div>


</div>
<ul class="link-container">
    <li class="link-items"><a href="#" class="link">Home</a></li>
    <li class="link-items"><a href="#" class="link">Men</a></li>
    <li class="link-items"><a href="#Women" class="link">Women</a></li>
    <li class="link-items"><a href="#" class="link">Kids</a></li>
    <li class="link-items"><a href="#men-tshirt-products" class="link">Accessories</a></li>
</ul>

    `;
}

createNav();

//nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn')

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})
window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = 'log out';
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })

    } else {
        // user is logged out
        popuptext.innerHTML = 'log in to place order';
        actionBtn.innerHTML = 'log in';
        actionBtn.addEventListener('click', () => {
            location.href = '/login';
        })
    }
}
// search box
const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/search/${searchBox.value}`
    }
})