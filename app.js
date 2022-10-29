import { discover, SCENES } from "wikari";

const initBuld = async () => {
    // Find bulb on network
    const bulbs = await discover({ addr: process.env.WIZ_ADDR });
    const bulb = bulbs[0];

    // Return if no bulb found
    if (!bulb) return;

    // whenever the bulb sends a message, log it to the console
    const details = await bulb.getPilot()
    //console.log(details);

    return bulb;
};

// Toggle Bulb
const toggleBulb = async () => {
    // Init bulb     
    const bulb = await initBuld();
    // turn the bulb on
    await bulb.toggle();
} 

// Set bulb  state
const setBulb = async (state) => {
    // Init bulb   
    const bulb = await initBuld();
    // turn the bulb on
    await bulb.turn(state);
} 


export {toggleBulb, setBulb};