const form = document.querySelector('form');
const list = document.querySelector('#list');
const addItem = function (productInput, qtyInput) {
    const newItem = document.createElement('li');
    list.appendChild(newItem);
    newItem.innerText = `${qtyInput} ${productInput}`;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addItem(productInput.value, qtyInput.value);
    productInput.value = '';
    qtyInput.value = '';
})
