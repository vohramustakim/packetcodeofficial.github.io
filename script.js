/* Add any JavaScript you need to this file. */
var kidsItems = [
    {
      Name: 'Track Suit',
      Description:
        'Age 1-8 Years.Avaliable in 4 colours red,blue,green.grey.Made by special polyster clothes.',
      Price: 30.00,
      Category: 'Clothes',
      Image: 'tracksuit.jpg'
    },
    {
      Name: 'Remote Car',
      Description:
        'For 2-5 years age Kids.Operated by Battery.Comes with 3years warranty.',
      Price: 49.99,
      Category: 'Toys',
      Image: 'remote.jpg'
    },
    {
      Name: 'Perfomance Shoes',
      Description:
        'Ideal to use any daily wear.Size Available From 0-8 Years.',
      Price: 30.00,
      Category: 'Shoes',
      Image: 'shoes.jpg'
    },
    {
      Name: 'Lightning Shoes',
      Description: 'Amazing product for kids from 0-5 Age.Do Random lights while kids walk.',
      Price: 35.00,
      Category: 'Shoes',
      Image: 'lightshoes.jpg'
    },
    {
      Name: 'Barbie Doll',
      Description:
        'Nice Doll with Blinking eyes.',
      Price: 12.04,
      Category: 'Toys',
      Image: 'doll.jpg'
    },
    {
      Name: 'Comfort Shoes',
      Description:
        'Comfortable shoes for the kids who just started walking.Available from Age 0-3 years.',
      Price: 20.99,
      Category: 'Shoes',
      Image: 'running.jpg'
    },
  
    {
      Name: 'T shirt',
      Description:
        'A nice pattern T shirt with funny emoji',
      Price: 8.99,
      Category: 'Clothes',
      Image: 'tshirt.jpg'
    },
    {
      Name: 'Puzzle',
      Description:
        'Nice Mind games for the development of kids thoughts and skills.',
      Price:  5.00,
      Category: 'Toys',
      Image: 'puzzle.jpg'
    },
    {
      Name: 'Shorts',
      Description:
        'Good for daily comfort wear.Avaliable for ages upto 5 years. ',
      Price: 13.99,
      Category: 'Clothes',
      Image: 'shorts.jpg'
    },
    {
      Name: 'Slippers',
      Description:
        'Summer wear for kids .Available size rom Age 2-6 years.',
      Price: 7.99,
      Category: 'Shoes',
      Image: 'slippers.png'
    },
    {
      Name: 'Bus',
      Description:
        'A nicely Crafted Bus with different types of Music in it.',
      Price: 5.99,
      Category: 'Toys',
      Image: 'bus.jpg'
    },
    {
      Name: 'Pants',
      Description:
        'A soft material .Ideal to use for outing as well.Best to wear in Summer.Available for kids from 2-6 years.',
      Price: 9.99,
      Category: 'Clothes',
      Image: 'pants.jpg'
    },
    {
      Name: 'Hoodie',
      Description:
        'Nice fall wear.Size Available from 2-5 years.',
      Price: 14.99,
      Category: 'Clothes',
      Image: 'hoodie.jpg'
    },
    {
      Name: 'scandal',
      Description:
        'Summer wear.Nicely crafted and available from kids 2-6 years Age.',
      Price: 17.99,
      Category: 'Shoes',
      Image: 'scandal.jpg'
    },
    {
      Name: 'Blocks',
      Description:
        'Can Design House and cars by using different Blocks .Good for kids upto 7 years..',
      Price: 11.99,
      Category: 'Toys',
      Image: 'block.jpg'
    }
  ];
  
 
  window.onload = function() {
    setListing(kidsItems);
    document.querySelector('#toys').onclick = toys;
    document.querySelector('#shoes').onclick = shoes;
    document.querySelector('#clothes').onclick =clothes;
    document.querySelector('#home').onclick =home;
  }; 

  function setListing(items) {
  
    var listings = document.querySelector('#listings');
    // remove all items within the listings
    while (listings.firstChild) {
      listings.removeChild(listings.firstChild);
    }
  
    var row = null;
    for (var i = 0; i < items.length; i++) {
      
      if (i % 3 === 0) {
        row = document.createElement('div');
        row.className = 'row';
      }
     
      row.appendChild(createCard(items[i]));
   
      if (i % 3 === 2 || i + 1 === items.length) {
        listings.appendChild(row);
      }
    }
  }

  function createCard(item) {
    var card = createElementWithClass('div', 'card');
    var image = createElementWithClass('div', 'card-image');
    image.style.backgroundImage = 'url(images/' + item.Image + ')';
    card.appendChild(image);
  
    var content = createElementWithClass('div', 'card-content');
  
    var name = createElementWithClass('p', 'card-name');
    name.appendChild(document.createTextNode(item.Name));
    content.appendChild(name);
  
    var description = createElementWithClass('p', 'card-description');
    description.appendChild(document.createTextNode(item.Description));
    content.appendChild(description);
  
    var price = createElementWithClass('p', 'card-price');
    price.appendChild(document.createTextNode('$' + item.Price));
    content.appendChild(price);
  
    var button = createElementWithClass('p', 'card-button');
    button.appendChild(document.createTextNode('Add to Cart'));
    content.appendChild(button);
  
    card.appendChild(content);
    return card;
  }
 
  function createElementWithClass(elementType, className) {
    var element = document.createElement(elementType);
    element.className = className;
    return element;
  }
  // sets the subtitle
  function setSubtitle(text) {
    document.querySelector('#subtitle').textContent = text;
  }
  function clothes() {
    setSubtitle('Clothes');
    var filterClothes = kidsItems.filter(function(c) {
      return c.Category === 'Clothes';
    });
    setListing(filterClothes);
  }
  
  function shoes() {
    setSubtitle('Shoes');
    var filterShoes = kidsItems.filter(function(c) {
      return c.Category === 'Shoes';
    });
    setListing(filterShoes);
  }
  
  function toys() {
    setSubtitle('Toys');
    var filterToys = kidsItems.filter(function(c) {
      return c.Category === 'Toys';
    });
    setListing(filterToys);
  }
  function home() {
    setSubtitle('Home');
    setListing(kidsItems);
  }
