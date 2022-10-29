import { discover, SCENES } from "wikari";


const checkBulb = async (state) => {
    const bulbs = await discover({ addr: process.env.BROADCAST_IP});
    
    const bulb = bulbs[0];
    if (!bulb) return;

    const details = await bulb.getPilot()

    // whenever the bulb sends a message, log it to the console
    // bulb.onMessage(console.log);
    console?.log(details);

    // turn the bulb on
    await bulb.turn(state);
}

// off = false, on = true
await checkBulb(false);