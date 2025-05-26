const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const categoryRoutes = require("./routes/categoryRoutes");
const memberRoutes = require("./routes/memberRoutes");
const commentRoutes = require("./routes/commentRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const ingredientRecipeRoutes = require("./routes/ingredientRecipeRoutes");
const userAuthRoutes = require("./routes/userAuthRoutes");
const verifyToken = require('./middlewares/authMiddlewares');
const cors = require('cors');

dotenv.config();

const app = express();

// effectue la connection a mangoDB
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log("Connexion à MongoDB a réussie"))
    .catch((error) => console.log("Connexion à MongoDB a échouée : " + error));

app.use(cors({
  origin: '*'
}));

// parse pour le json
app.use(bodyParser.json());

// routes pour l'authentification
app.use("/auth", userAuthRoutes);

// routes protégées
app.use('/api', verifyToken);

// endpoint de l'api
app.use("/Category", categoryRoutes);
app.use("/Comment", commentRoutes)
app.use("/Member", memberRoutes);
app.use("/Ingredient", ingredientRoutes);
app.use("/Recipe", recipeRoutes);
app.use("/IngredientRecipe", ingredientRecipeRoutes);

// lance le serveur express
app.listen(8090, () => {
    console.log("Le serveur est démarré");
});