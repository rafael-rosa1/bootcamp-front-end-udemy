const data = `{"ticker":{"base":"BTC","target":"USD","price":"47306.08660869","volume":"33582.36986354","change":"-207.72730077"},"timestamp":1648511105,"success":true,"error":""}`
const parsedData = JSON.parse(data);
const BtcPrice = parsedData.ticker.price;

const dog = {breed: 'lab', color:'black', isAlive:'true', owner: undefined}
const dogJSON = JSON.stringify(dog);