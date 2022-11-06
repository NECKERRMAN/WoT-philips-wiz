import { discover, SCENES } from "wikari";

const initBuld = async () => {
    // Find bulb on network
    const bulbs = await discover({ addr: process.env.WIZ_ADDR });
    const bulb = bulbs[0];

    // Return if no bulb found
    if (!bulb) return;

    // whenever the bulb sends a message, log it to the console
    const details = await bulb.getPilot()
    console.log(details);

    return bulb;
};

// Toggle Bulb
const toggleBulb = async () => {
    // Init bulb     
    const bulb = await initBuld();
    // turn the bulb on or off
    await bulb.toggle();
} 

// Set bulb  state
const setBulb = async (state) => {
    // Init bulb   
    const bulb = await initBuld();
    // turn the bulb on
    await bulb.turn(state);
} 

// Set bulb  state
/**
* Brightness is described in percentage
* Temperature is described in kelvin
* * Value between 1000 and 10000
*/
const setBlackLight = async (BRIGHTNESS, TEMP) => {
    // Init bulb   
    const bulb = await initBuld();
    // set the bulb brightness to 10%
    await bulb.brightness(BRIGHTNESS);
    await bulb.white(TEMP);
    // turn the bulb on
    await bulb.turn(true);
} 


// Disconnect bulb
const disconnectBulb = async () => {
    // Init bulb
    const bulb = await initBuld();
    // Disconnect bulb
    bulb.closeConnection();
}

export {toggleBulb, setBulb, initBuld, setBlackLight, disconnectBulb};