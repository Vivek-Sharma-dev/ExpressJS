import fs from "fs";
import path from "path";

export class Home {
  constructor(homeName, price, location, rating, image, id) {
    this.id = id;
    this.homeName = homeName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.image = image;
  }

  save() {
    Home.getAllHomes((registeredHomes) => {
      registeredHomes.push(this);

      const filePath = path.join(process.cwd(), "/data/registeredHomes.json");
      fs.writeFile(filePath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("Data written to file successfully.");
        } 
      });
    });
  }

  static getAllHomes(callback) {
    try {
      const filePath = path.join(process.cwd(), "/data/registeredHomes.json");
      fs.readFile(filePath, "utf8", (err, data) => {
        return callback(!err ? JSON.parse(data) : []);
      });
    } catch (error) {
      console.error("Error reading file:", error);
    }
  }

  static getHomeById(id, callBack) {
    Home.getAllHomes((registeredHomes) => {
      const home = registeredHomes.find((home) => home.id === id);
      callBack(home);
    });
  }
}
