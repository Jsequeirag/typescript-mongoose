//1-npx tsc --init ---> inicia el archivo tsconfig.json
//2-configuro el archivo tsconfig.json---->descomento "outDir": "./dist" || "rootDir": "./src" || "strictPropertyInitialization":false || "experimentalDecorators": true
//3-npx tsc ---->build la aplicación
//agrego lo siguiente al package.json en scripts----->  "build": "tsc", "dev": "ts-node-dev --respawn src/app.ts"
import mongoose from "mongoose";
import User from "./models/User";
import Product from "./models/Product";
import Role from "./models/Role";
async function connectBD() {
  const db = await mongoose.connect("mongodb://localhost/typegoosedb");
  console.log("databse is conneted to", db.connection.db.databaseName);
}
connectBD();
async function saveUser() {
  const user = new User({
    firtsname: "joe",
    lastname: "Doe",
    email: "joedoe@gmail.com   ",
    password: "123456",

    age: 26,
    roles: ["627033a9b0b23a7cfeb22366"],
  });
  /*user.password = user.encryptPassword("123456");*/
  const userSaved = await user.save();
  console.log(userSaved);
}
saveUser();

/*async function findUsers() {
  const users = await User.find({}, { firtsname: 1, _id: 0 });
  console.log(users);
}
findUsers();*/

async function findUsers() {
  const result = await User.findByFirstName("joe");
  console.log(result);
}
findUsers();

/*async function update() {
  const user = await User.findOneAndUpdate(
    { _id: "626da6871abd4d7622b5aaa4" },
    { firtsname: "Ryen" },
    { new: true }
  );
  console.log(user);
}
update();*/

/*async function deleteById() {
  const user = await User.findByIdAndDelete("626da6871abd4d7622b5aaa4");
   const user = await User.findOneAndDelete({email:"joedoe@gmail.com"}) 
  const user = await User.deleteMany({ email: "joedoe@gmail.com" });
  console.log(user);
}
deleteById();*/

/*async function createProduct() {
  const product = await Product.create({
    name: "laptop",
    price: 30,
    url: "product-01",
    tags: ["laptop", "gaming", "razer"],
    comments: [{ text: "awesome product" }, { text: "awesome product" }],
    owner: "627025f1b13650beaee72083",
  });
  console.log(product);
}
createProduct();*/
/*async function getProduct() {
  const product = await Product.findById("62702d4da96c739ffe81f2ed").populate(
    "owner"
  );
  console.log(product);
}
getProduct();*/
/*async function createRole() {
  const result = await Role.insertMany([
    { name: "admin" },
    { name: "guest" },
    { name: "user" },
  ]);
  console.log(result);
}
createRole();*/
