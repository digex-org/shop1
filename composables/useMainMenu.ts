// composables/useMainMenu.js
import { reactive} from 'vue';

export function useMainMenu() {
  // Define the main menu state using reactive.
  // Using readonly() when returning prevents accidental mutations.
  const state = reactive({
    menus: [
      {
        id: 1,
        name: 'New',
        url: '/basket',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/newest',
        subMenu: [
          {
            name: 'Shoes',
            url: '/category/1',
            subMenu: [
              { name: 'Classics', url: '/category/1' },
              { name: 'Lifestyle', url: '/category/1' },
              { name: 'Running', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Motosport', url: '/category/1' },
              { name: 'GV Special', url: '/category/1' },
              { name: 'Rider', url: '/category/1' },
              { name: 'Sandals', url: '/category/1' }
            ]
          },
          {
            name: 'Good Deals',
            url: '/category/1',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/category/1' },
              { name: 'Jackets', url: '/category/1' },
              { name: 'Short', url: '/category/1' },
              { name: 'Tracksuits', url: '/category/1' },
              { name: 'Tops', url: '/category/1' }
            ]
          },
          {
            name: 'Kitchen',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/category/1' },
              { name: 'Socks', url: '/category/1' },
              { name: 'Sports Equipment', url: '/category/1' }
            ]
          },
          {
            name: 'Bedroom',
            url: '/category/1',
            subMenu: [
              { name: 'Soccer', url: '/category/1' },
              { name: 'Yoga', url: '/category/1' },
              { name: 'Golf', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Running', url: '/category/1' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Living Room',
        url: '/category/1',
        image: new URL('~/assets/images/category1.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/category/1',
        subMenu: [
          {
            name: 'Living Room',
            url: '/category/1',
            subMenu: [
              { name: 'Classics', url: '/category/1' },
              { name: 'Lifestyle', url: '/category/1' },
              { name: 'Running', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Motosport', url: '/category/1' },
              { name: 'GV Special', url: '/category/1' },
              { name: 'Rider', url: '/category/1' },
              { name: 'Sandals', url: '/category/1' }
            ]
          },
          {
            name: 'Clothing',
            url: '/category/1',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/category/1' },
              { name: 'Jackets', url: '/category/1' },
              { name: 'Short', url: '/category/1' },
              { name: 'Tracksuits', url: '/category/1' },
              { name: 'Tops', url: '/category/1' }
            ]
          },
          {
            name: 'Accessories',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/category/1' },
              { name: 'Socks', url: '/category/1' },
              { name: 'Sports Equipment', url: '/category/1' }
            ]
          },
          {
            name: 'Sports',
            url: '/category/1',
            subMenu: [
              { name: 'Soccer', url: '/category/1' },
              { name: 'Yoga', url: '/category/1' },
              { name: 'Golf', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Running', url: '/category/1' }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Kids',
        url: '/category/1',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More ',
        texturl: '/category/1',
        subMenu: [
          {
            name: 'Shoes',
            url: '/category/1',
            subMenu: [
              { name: 'Classics', url: '/kids/shoes/classics' },
              { name: 'Lifestyle', url: '/kids/shoes/lifestyle' },
              { name: 'Running', url: '/kids/shoes/running' },
              { name: 'Basketball', url: '/kids/shoes/basketball' },
              { name: 'Motosport', url: '/kids/shoes/motosport' },
              { name: 'GV Special', url: '/kids/shoes/gv-special' },
              { name: 'Rider', url: '/kids/shoes/rider' },
              { name: 'Sandals', url: '/kids/shoes/sandals' }
            ]
          },
          {
            name: 'Clothing',
            url: '/category/1',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/kids/clothing/hoodies-sweatshirts' },
              { name: 'Jackets', url: '/kids/clothing/jackets' },
              { name: 'Short', url: '/kids/clothing/short' },
              { name: 'Tracksuits', url: '/kids/clothing/tracksuits' },
              { name: 'Tops', url: '/kids/clothing/tops' }
            ]
          },
          {
            name: 'Accessories',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/kids/accessories/bags-backpacks' },
              { name: 'Socks', url: '/kids/accessories/socks' },
              { name: 'Sports Equipment', url: '/kids/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/category/1',
            subMenu: [
              { name: 'Soccer', url: '/kids/sports/soccer' },
              { name: 'Yoga', url: '/kids/sports/yoga' },
              { name: 'Golf', url: '/kids/sports/golf' },
              { name: 'Basketball', url: '/kids/sports/basketball' },
              { name: 'Running', url: '/kids/sports/running' }
            ]
          }
        ]
      },
      {
        id: 4,
        name: 'Accessories',
        url: '/category/1',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/category/1',
        subMenu: [
          {
            name: 'Shoes',
            url: '/category/1',
            subMenu: [
              { name: 'Classics', url: '/accessories/shoes/classics' },
              { name: 'Lifestyle', url: '/accessories/shoes/lifestyle' },
              { name: 'Running', url: '/accessories/shoes/running' },
              { name: 'Basketball', url: '/accessories/shoes/basketball' },
              { name: 'Motosport', url: '/accessories/shoes/motosport' },
              { name: 'GV Special', url: '/accessories/shoes/gv-special' },
              { name: 'Rider', url: '/accessories/shoes/rider' },
              { name: 'Sandals', url: '/accessories/shoes/sandals' }
            ]
          },
          {
            name: 'Accessories',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/accessories/accessories/bags-backpacks' },
              { name: 'Socks', url: '/accessories/accessories/socks' },
              { name: 'Sports Equipment', url: '/accessories/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/category/1',
            subMenu: [
              { name: 'Soccer', url: '/accessories/sports/soccer' },
              { name: 'Yoga', url: '/accessories/sports/yoga' },
              { name: 'Golf', url: '/accessories/sports/golf' },
              { name: 'Basketball', url: '/accessories/sports/basketball' },
              { name: 'Running', url: '/category/1' }
            ]
          }
        ]
      },
      {
        id: 5,
        name: 'Sale',
        url: '/category/1',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/category/1',
        subMenu: [
          {
            name: 'Shoes',
            url: '/sale/shoes',
            subMenu: [
              { name: 'Classics', url: '/category/1' },
              { name: 'Lifestyle', url: '/category/1' },
              { name: 'Running', url: '/category/1' },
            ]
          },
          {
            name: 'Clothing',
            url: '/category/1',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/category/1' },
              { name: 'Jackets', url: '/category/1' },
              { name: 'Short', url: '/category/1' },
              { name: 'Tracksuits', url: '/category/1' },
              { name: 'Tops', url: '/category/1' }
            ]
          },
          {
            name: 'Accessories',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/category/1' },
              { name: 'Socks', url: '/category/1' },
              { name: 'Sports Equipment', url: '/category/1' }
            ]
          }
        ]
      },
      {
        id: 6,
        name: 'Gift',
        url: '/category/1',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/category/1',
        subMenu: [
          {
            name: 'Shoes',
            url: '/category/1',
            subMenu: [
              { name: 'Classics', url: '/category/1' },
              { name: 'Lifestyle', url: '/category/1' },
              { name: 'Running', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Motosport', url: '/category/1' },
              { name: 'GV Special', url: '/category/1' },
              { name: 'Rider', url: '/category/1' },
              { name: 'Sandals', url: '/category/1' }
            ]
          },
          {
            name: 'Clothing',
            url: '/category/1',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/category/1' },
              { name: 'Jackets', url: '/category/1' },
              { name: 'Short', url: '/category/1' },
              { name: 'Tracksuits', url: '/category/1' },
              { name: 'Tops', url: '/category/1' }
            ]
          },
          {
            name: 'Accessories',
            url: '/category/1',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/category/1' },
              { name: 'Socks', url: '/category/1' },
              { name: 'Sports Equipment', url: '/category/1' }
            ]
          },
          {
            name: 'Sports',
            url: '/category/1',
            subMenu: [
              { name: 'Soccer', url: '/category/1' },
              { name: 'Yoga', url: '/category/1' },
              { name: 'Golf', url: '/category/1' },
              { name: 'Basketball', url: '/category/1' },
              { name: 'Running', url: '/category/1' }
            ]
          }
        ]
      }
    ]
  });

  // Return the menu list and the current menu item.
  return {
    menus: state.menus,
  };
}
