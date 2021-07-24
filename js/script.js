

function toggleView(pagina){
    document.body.setAttribute('page',pagina);
    if (pagina == 'show-clients'){listClients()}
    if (pagina == 'show-products'){listProducts()}
};

function addClient(){
    let clientNome = document.getElementById('clientName').value;
    let clientMail = document.getElementById('clientMail').value;
    let clientCPF = document.getElementById('clientCPF').value;
    let clientPhone = document.getElementById('clientPhone').value;
    let clientAddress = document.getElementById('clientAddress').value;
    let clientAddressInfo = document.getElementById('clientAddressInfo').value;
    let clientAddressCity = document.getElementById('clientAddressCity').value;
    let clientAddressUF = document.getElementById('clientAddressUF').value;

    let clientData = {
        clientNome,
        clientMail,
        clientCPF,
        clientPhone,
        clientAddress,
        clientAddressInfo,
        clientAddressCity,
        clientAddressUF,
    }

    if (clientNome == "" || clientMail == "" || clientCPF == "" || clientPhone == "" || clientAddress == "" || clientAddressInfo == "" || clientAddressCity == "" || clientAddressUF == ""){
        alert("Favor preencher todos os campos")
    } else
        if (typeof(Storage) !== "undefined") {
        let clientsNow = localStorage.getItem("Clients");
        if (clientsNow == null) clientsNow = [];
        else clientsNow = JSON.parse(clientsNow);
        clientsNow.push(clientData);

        localStorage.setItem('Clients', JSON.stringify(clientsNow));
        alert("Cliente cadastrado com sucesso")
        }
};

function listClients() {
    let tbody = document.getElementById('block-show-clients-body')
    const clients = JSON.parse(localStorage.getItem('Clients'));

    if (clients != null) {
        let eachClient = '';
        clients.map(content => {
        eachClient += `
            <tr>
                <td>${content.clientNome}</td>
                <td>${content.clientMail}</td>
                <td>${content.clientCPF}</td>
                <td>${content.clientPhone}</td>
                <td>${content.clientAddress}</td>
                <td>${content.clientAddressInfo}</td>
                <td>${content.clientAddressCity}</td>
                <td>${content.clientAddressUF}</td>
            </tr>`

        })
        tbody.innerHTML = eachClient;
    } else {
        let empty = document.getElementById('block-show-clients')
        empty.innerHTML = '<h2>Lista de clientes vazia!</h2>';

    }
}

function addProduct(){
    let prodName = document.getElementById('productName').value;
    let prodCat = document.getElementById('productCategory').value;
    let prodDesc = document.getElementById('productDescription').value;
    let prodPrice = document.getElementById('productPrice').value;
    let prodAmount = document.getElementById('productAmount').value;

    let prodData = {
        prodName,
        prodCat,
        prodDesc,
        prodPrice,
        prodAmount,
    }

    if (prodName == "" || prodCat == "" || prodDesc == "" || prodPrice == "" || prodAmount == ""){
        alert("Favor preencher todos os campos")
    } else
        if (typeof(Storage) !== "undefined") {
        let productsNow = localStorage.getItem("Products");
        if (productsNow == null) productsNow = [];
        else productsNow = JSON.parse(productsNow);
        productsNow.push(prodData);

        localStorage.setItem('Products', JSON.stringify(productsNow));
        alert("Produto cadastrado com sucesso")
    }
};

function listProducts() {
    let tbody = document.getElementById('block-show-products-body')
    const products = JSON.parse(localStorage.getItem('Products'));

    if (products != null) {
        let eachProduct = '';
        products.map(content => {
            eachProduct += `
            <tr>
                <td>${content.prodName}</td>
                <td>${content.prodCat}</td>
                <td>${content.prodDesc}</td>
                <td>${content.prodPrice}</td>
                <td>${content.prodAmount}</td>
            </tr>`

        })
        tbody.innerHTML = eachProduct;
    }else {
        let empty = document.getElementById('block-show-products')
        empty.innerHTML = '<h2>Lista de produtos vazia!</h2>';

    }
}