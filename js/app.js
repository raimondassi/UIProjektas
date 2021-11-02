$(function () {

  var products = [];

  $.ajax({
    url: 'resources/products.json',
    dataType: 'json',
    success: successHandler,
    error: errorHandler
  });

  function successHandler(response) {
    products = response;
    fillProducts(products);
  }

  function errorHandler(response) {
    console.log(response.status);
  }

  function fillProducts(array) {
    let cards = '';
    array.forEach(function (item) {
      cards += '' +
        '                <div class="col">' +
        '                    <div class="card">' +
        '                        <img src="' + item.image + '" class="card-img-top cardImgApp" alt="...">' +
        '                        <div class="card-body">' +
        '                            <h6 class="cardTitleApp">' + item.title + '</h6>' +
        '                            <p class="cardTextApp card-text">' + item.description + '</p>' +
        '                            <p class="priceApp">Price: ' + item.price + '</p>' +
        '                            <a href="#" class="btn btn-primary shopNowApp add-to-cart">Shop Now</a>' +
        '                        </div>' +
        '                    </div>' +
        '                </div>' +
        '' +
        '';
    });
    $('#cardList').html(cards);
  }

  $('#searchButton').click(function () {
    const search = $('#searchText').val();
    let filteredArray = products.filter(p => p.title.includes(search)
      || p.description.includes(search)
      || p.category.includes(search));
    fillProducts(filteredArray);
  });

  $('#mensCategory').click(function () {
    var value=document.getElementById("mensCategory").innerHTML;
    let filteredArray = products.filter(p =>p.category.includes(value));
    fillProducts(filteredArray);
  });

  $('#jeweleryCategory').click(function () {
    var value=document.getElementById("jeweleryCategory").innerHTML;
    let filteredArray = products.filter(p =>p.category.includes(value));
    fillProducts(filteredArray);
  });

  $('#electronicsCategory').click(function () {
    var value=document.getElementById("electronicsCategory").innerHTML;
    let filteredArray = products.filter(p =>p.category.includes(value));
    fillProducts(filteredArray);
  });

  $('#womenCategory').click(function () {
    var value=document.getElementById("womenCategory").innerHTML;
    let filteredArray = products.filter(p =>p.category.includes(value));
    fillProducts(filteredArray);
  });
  

});

