import { discover, SCENES } from "wikari";

// Toggle Bulb
const toggleBulb = async () => {
         
    const bulbs = await discover({ addr: process.env.WIZ_ADDR });
    
    const bulb = bulbs[0];
    if (!bulb) return;

    const details = await bulb.getPilot()

    // whenever the bulb sends a message, log it to the console
    // bulb.onMessage(console.log);
    console?.log(details);

    // turn the bulb on
    await bulb.toggle();
} 

// Set bulb  state
const setBulb = async (state) => {
       
    const bulbs = await discover({ addr: process.env.WIZ_ADDR});
    
    const bulb = bulbs[0];
    if (!bulb) return;

    const details = await bulb.getPilot()

    // whenever the bulb sends a message, log it to the console
    // bulb.onMessage(console.log);
    console.log(details);

    // turn the bulb on
    await bulb.turn(state);
} 


export {toggleBulb, setBulb};