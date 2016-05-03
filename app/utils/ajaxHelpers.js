var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  addNew: function(image, type, color, callbackAfterSubmit) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    // switch to determine category from type
    switch(type) {
      case "skirt":
      case "pants":
      case "jeans":
      case "leggings":
      case "sweatpants":
      case "shorts":
        var category = "bottom";
        break;
      case "blouse":
      case "sweater":
      case "cardigan":
      case "turtle neck":
      case "tank-top":
      case "shirt":
      case "t-shirt":
      case "sweatshirt":
      case "jacket":
      case "tank-top":
      case "top":
        var category = "top";
        break;
      case "shoes":
      case "sneakers":
      case "boots":
      case "sandals":
      case "flip-flops":
        var category = "shoes";
        break;
      case "dress":
      case "sweaterdress":
      case "one-piece suite":
        var category = "one piece";
        break;
      default:
        var category = "unknown";
        console.log("type not determined")
    };
    let today = new Date();
    let last_worn = today.setFullYear(today.getFullYear() - 1);
    console.log("last worn", last_worn);
    let item =  {
        image: image,
        item_type: type,
        item_color: color,
        last_worn: last_worn,
        item_category: category
      }

    console.log(item);

    axios.post(this.baseUrl + '/items', item)
    .then(function (response) {
      console.log("response:", response.data);
      if (callbackAfterSubmit) {
        callbackAfterSubmit(true)
      }
    })

    .catch(function (response) {
      console.log('There was an error', response);
      if (callbackAfterSubmit) {
        callbackAfterSubmit(false)
      }
    });
  },

  retrieveClothes: function(savingClothesData) {
    axios.get(this.baseUrl + '/items.json')
    .then(function(response) {
      console.log("response:", response.data);
      savingClothesData(response.data.items);
    })
    .catch(function( response) {
      console.log("There was an error", response);
    });
  }
}
