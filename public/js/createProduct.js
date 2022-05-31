
const createProduct = (data) => {
    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
    <div class="product-card">
        <div class="product-image">
             ${data.draft ? ` <span class="tag">Draft</span>` : ''}
           
            <img src="${data.images[0] || 'images/no image.png'}" class="product-thumb"alt="">
            <button class="card-action-btn edit-btn" onclick="location.href = '/add-product/${data.id}'"><img src="images/edit.png" alt=""></button>
            <button class="card-action-btn open-btn" onclick="location.href = '/products/${data.id}'"><img src="images/open.png"  alt=""></button>
            <button class="card-action-btn delete-popup-btn" onclick="openDeletePopup('${data.id}')"><img src="images/delete.png" alt=""></button>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${data.name}</h2>
            <p class="product-shot-des">${data.shortDes}</p>
            <span class="price">$${data.sellPrice}</span><span class="actual-price">$${data.actualPrice}</span>
        </div>
        </div> 
    
    `;
}
const openDeletePopup = (id) => {
    let deleteAlert = document.querySelector('.delete-alert');
    deleteAlert.style.display = 'flex';

    let closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => deleteAlert.style.display = null);

    let deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteItem(id))
}

const deleteItem = (id) => {
    fetch('/delete-product', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({id: id})
    }).then(res => res.json())
    .then(data => {
        if(data == 'success'){
            location.reload();

        } else {
            showAlert('some error occured while deleting the product. try again');
        }

    })
}