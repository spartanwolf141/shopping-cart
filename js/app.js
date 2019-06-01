var items = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

console.log(items.length);

for(i = 0; i<items.length; i++){
    var Barry = document.createElement('div');
    Barry.className = 'product';
    Barry.innerHTML = items[i].product;
    stuff.appendChild(Barry);

    var describe = document.createElement('div');
    describe.className = 'description';
    describe.innerHTML = items[i].description;
    Barry.appendChild(describe);

    var amount = document.createElement('div');
    amount.className = 'Price';
    amount.innerHTML = items[i].price;
    stuff.appendChild(amount);
}





var info = document.getElementsByClassName('product'); 

for(i=0;i<info.length;i++){
    info[i].addEventListener('click', showMe);
}
//info.addEventListener('click', showMe);
//var Barry = document.createElement('div');
    //Barry.id = 'albumDescrip';
    //Barry.innerHTML = album.description + ' '+ 'Price: '+  album.price;
    //songs.appendChild(Barry);
function showMe(){
    var x = this.querySelector('.description');
        if(x.style.display === 'block'){
            x.style.display = 'none';
        }else{
            x.style.display = 'block';
        }
}

