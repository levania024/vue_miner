import { AppState } from "@/AppState.js";

class TreeMinerService {
    mine() {
        AppState.increaseCheese(); 
        AppState.cheese
    }

    increaseCheese() {
        AppState.increaseCheese(); 
    }

    buyClickUpgrade(upgrade) {
        if (AppState.cheese >= upgrade.cost) {
            AppState.cheese -= upgrade.cost;
            upgrade.quantity++;
            upgrade.cost = Math.floor(upgrade.cost * 1.5);
        }
    }
      
    buyAutoUpgrade(upgrade) {
        if (AppState.cheese >= upgrade.cost) {
            AppState.cheese -= upgrade.cost;
            upgrade.quantity++;
            upgrade.cost = Math.floor(upgrade.cost * 1.5);
        }
    }
      
    collectAutoCheese() {
        AppState.increaseCheese(); 
    }
}
export const treeMinerService = new TreeMinerService();