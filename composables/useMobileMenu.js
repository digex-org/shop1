// composables/useMainMenu.js
import { reactive} from 'vue';

export function useMobileMenu() {
  // Define the main menu state using reactive.
  // Using readonly() when returning prevents accidental mutations.
  const state = reactive({
    menus: [
      {
        id: 1,
        name: 'Mobile',
        url: '/',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/newest',
        subMenu: [
          {
            name: 'Mobile',
            url: '/new/shoes',
            subMenu: [
              { name: 'Classics', url: '/new/shoes/classics' },
              { name: 'Lifestyle', url: '/new/shoes/lifestyle' },
              { name: 'Running', url: '/new/shoes/running' },
              { name: 'Basketball', url: '/new/shoes/basketball' },
              { name: 'Motosport', url: '/new/shoes/motosport' },
              { name: 'GV Special', url: '/new/shoes/gv-special' },
              { name: 'Rider', url: '/new/shoes/rider' },
              { name: 'Sandals', url: '/new/shoes/sandals' }
            ]
          },
          {
            name: 'Good Deals',
            url: '/new/good-deals',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/new/good-deals/hoodies-sweatshirts' },
              { name: 'Jackets', url: '/new/good-deals/jackets' },
              { name: 'Short', url: '/new/good-deals/short' },
              { name: 'Tracksuits', url: '/new/good-deals/tracksuits' },
              { name: 'Tops', url: '/new/good-deals/tops' }
            ]
          },
          {
            name: 'Kitchen',
            url: '/new/kitchen',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/new/kitchen/bags-backpacks' },
              { name: 'Socks', url: '/new/kitchen/socks' },
              { name: 'Sports Equipment', url: '/new/kitchen/sports-equipment' }
            ]
          },
          {
            name: 'Bedroom',
            url: '/new/bedroom',
            subMenu: [
              { name: 'Soccer', url: '/new/bedroom/soccer' },
              { name: 'Yoga', url: '/new/bedroom/yoga' },
              { name: 'Golf', url: '/new/bedroom/golf' },
              { name: 'Basketball', url: '/new/bedroom/basketball' },
              { name: 'Running', url: '/new/bedroom/running' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Living Room',
        url: '/living-room',
        image: new URL('~/assets/images/category1.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/Livingest',
        subMenu: [
          {
            name: 'Shoes',
            url: '/living-room/shoes',
            subMenu: [
              { name: 'Classics', url: '/living-room/shoes/classics' },
              { name: 'Lifestyle', url: '/living-room/shoes/lifestyle' },
              { name: 'Running', url: '/living-room/shoes/running' },
              { name: 'Basketball', url: '/living-room/shoes/basketball' },
              { name: 'Motosport', url: '/living-room/shoes/motosport' },
              { name: 'GV Special', url: '/living-room/shoes/gv-special' },
              { name: 'Rider', url: '/living-room/shoes/rider' },
              { name: 'Sandals', url: '/living-room/shoes/sandals' }
            ]
          },
          {
            name: 'Clothing',
            url: '/living-room/clothing',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/living-room/clothing/hoodies-sweatshirts' },
              { name: 'Jackets', url: '/living-room/clothing/jackets' },
              { name: 'Short', url: '/living-room/clothing/short' },
              { name: 'Tracksuits', url: '/living-room/clothing/tracksuits' },
              { name: 'Tops', url: '/living-room/clothing/tops' }
            ]
          },
          {
            name: 'Accessories',
            url: '/living-room/accessories',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/living-room/accessories/bags-backpacks' },
              { name: 'Socks', url: '/living-room/accessories/socks' },
              { name: 'Sports Equipment', url: '/living-room/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/living-room/sports',
            subMenu: [
              { name: 'Soccer', url: '/living-room/sports/soccer' },
              { name: 'Yoga', url: '/living-room/sports/yoga' },
              { name: 'Golf', url: '/living-room/sports/golf' },
              { name: 'Basketball', url: '/living-room/sports/basketball' },
              { name: 'Running', url: '/living-room/sports/running' }
            ]
          }
        ]
      },
      {
        id: 3,
        name: 'Kids',
        url: '/kids',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More ',
        texturl: '/kidsiest',
        subMenu: [
          {
            name: 'Shoes',
            url: '/kids/shoes',
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
            url: '/kids/clothing',
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
            url: '/kids/accessories',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/kids/accessories/bags-backpacks' },
              { name: 'Socks', url: '/kids/accessories/socks' },
              { name: 'Sports Equipment', url: '/kids/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/kids/sports',
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
        url: '/accessories',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/accessoriest',
        subMenu: [
          {
            name: 'Shoes',
            url: '/accessories/shoes',
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
            url: '/accessories/accessories',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/accessories/accessories/bags-backpacks' },
              { name: 'Socks', url: '/accessories/accessories/socks' },
              { name: 'Sports Equipment', url: '/accessories/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/accessories/sports',
            subMenu: [
              { name: 'Soccer', url: '/accessories/sports/soccer' },
              { name: 'Yoga', url: '/accessories/sports/yoga' },
              { name: 'Golf', url: '/accessories/sports/golf' },
              { name: 'Basketball', url: '/accessories/sports/basketball' },
              { name: 'Running', url: '/accessories/sports/running' }
            ]
          }
        ]
      },
      {
        id: 5,
        name: 'Sale',
        url: '/sale',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/salet',
        subMenu: [
          {
            name: 'Shoes',
            url: '/sale/shoes',
            subMenu: [
              { name: 'Classics', url: '/sale/shoes/classics' },
              { name: 'Lifestyle', url: '/sale/shoes/lifestyle' },
              { name: 'Running', url: '/sale/shoes/running' },
              { name: 'Basketball', url: '/sale/shoes/basketball' },
              { name: 'Motosport', url: '/sale/shoes/motosport' },
              { name: 'GV Special', url: '/sale/shoes/gv-special' },
              { name: 'Rider', url: '/sale/shoes/rider' },
              { name: 'Sandals', url: '/sale/shoes/sandals' }
            ]
          },
          {
            name: 'Clothing',
            url: '/sale/clothing',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/sale/clothing/hoodies-sweatshirts' },
              { name: 'Jackets', url: '/sale/clothing/jackets' },
              { name: 'Short', url: '/sale/clothing/short' },
              { name: 'Tracksuits', url: '/sale/clothing/tracksuits' },
              { name: 'Tops', url: '/sale/clothing/tops' }
            ]
          },
          {
            name: 'Accessories',
            url: '/sale/accessories',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/sale/accessories/bags-backpacks' },
              { name: 'Socks', url: '/sale/accessories/socks' },
              { name: 'Sports Equipment', url: '/sale/accessories/sports-equipment' }
            ]
          }
        ]
      },
      {
        id: 6,
        name: 'Gift',
        url: '/gift',
        image: new URL('~/assets/images/category2.webp', import.meta.url).href,
        text: 'See More',
        texturl: '/giftt',
        subMenu: [
          {
            name: 'Shoes',
            url: '/gift/shoes',
            subMenu: [
              { name: 'Classics', url: '/gift/shoes/classics' },
              { name: 'Lifestyle', url: '/gift/shoes/lifestyle' },
              { name: 'Running', url: '/gift/shoes/running' },
              { name: 'Basketball', url: '/gift/shoes/basketball' },
              { name: 'Motosport', url: '/gift/shoes/motosport' },
              { name: 'GV Special', url: '/gift/shoes/gv-special' },
              { name: 'Rider', url: '/gift/shoes/rider' },
              { name: 'Sandals', url: '/gift/shoes/sandals' }
            ]
          },
          {
            name: 'Clothing',
            url: '/gift/clothing',
            subMenu: [
              { name: 'Hoodies & Sweatshirts', url: '/gift/clothing/hoodies-sweatshirts' },
              { name: 'Jackets', url: '/gift/clothing/jackets' },
              { name: 'Short', url: '/gift/clothing/short' },
              { name: 'Tracksuits', url: '/gift/clothing/tracksuits' },
              { name: 'Tops', url: '/gift/clothing/tops' }
            ]
          },
          {
            name: 'Accessories',
            url: '/gift/accessories',
            subMenu: [
              { name: 'Bags & Backpacks', url: '/gift/accessories/bags-backpacks' },
              { name: 'Socks', url: '/gift/accessories/socks' },
              { name: 'Sports Equipment', url: '/gift/accessories/sports-equipment' }
            ]
          },
          {
            name: 'Sports',
            url: '/gift/sports',
            subMenu: [
              { name: 'Soccer', url: '/gift/sports/soccer' },
              { name: 'Yoga', url: '/gift/sports/yoga' },
              { name: 'Golf', url: '/gift/sports/golf' },
              { name: 'Basketball', url: '/gift/sports/basketball' },
              { name: 'Running', url: '/gift/sports/running' }
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
