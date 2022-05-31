const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="../images/logo.jpg" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">watches</a></li>
            <li><a href="#" class="footer-link">perfumes</a></li>
            <li><a href="#" class="footer-link">shoes</a></li>
            <li><a href="#" class="footer-link">chain</a></li>
            <li><a href="#" class="footer-link">rings</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">perfumes</a></li>
            <li><a href="#" class="footer-link">makeups</a></li>
            <li><a href="#" class="footer-link">chains</a></li>
            <li><a href="#" class="footer-link">rings</a></li>
            <li><a href="#" class="footer-link">wigs</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Accessories</li>
            <li><a href="#" class="footer-link">plates</a></li>
            <li><a href="#" class="footer-link">chairs</a></li>
            <li><a href="#" class="footer-link">tables</a></li>
            <li><a href="#" class="footer-link">thermometers</a></li>
            <li><a href="#" class="footer-link">sun reflect</a></li>

        
        </ul>



    </div>
    
</div>
    <p class="footer-title">about our shop</p>
    <p class="info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate tempore, a atque quas quasi sequi quo error! Quis consequuntur
         natus eum. Dolore commodi voluptatem fugiat placeat explicabo esse aperiam?</p>
    <p class="info"> support emails, epiphany@gmail.com, whwhw@gmail.com</p>
    <p class="info"> +25471452673</p>
    <div class="footer-social-container">
        <div>
            <a href="" class="social-link">terms & conditions</a>
            <a href="" class="social-link">privacy</a>
        </div>
        <div>
            <a href="" class="social-link">facebook</a>
            <a href="" class="social-link">instagram</a>
            <a href="" class="social-link">twitter</a>
            <a href="" class="social-link">whatsapp</a>
        </div>
    </div>
    <p class="footer-credit">Epiphany best online store</p>




    `;
}
createFooter();