import { reactive } from 'vue';
import { Upgrade } from './models/Upgrade.js';


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
  cheese: 0,
  
  clickUpgrades: [
    new Upgrade({ name: 'Basket', cost: 10, power: 'cheese per click by 1' }),
    new Upgrade({ name: 'Cheese Magnet', cost: 20, power: 'cheese per click by 5' })
  ],
  autoUpgrades: [
    new Upgrade({ name: 'Cheese Farm', cost: 50, power: '10 cheese per second' }),
    new Upgrade({ name: 'Cheese Factory', cost: 100, power: '20 cheese per second' })
  ],

  increaseCheese() {
    this.cheese++;
  }
});

