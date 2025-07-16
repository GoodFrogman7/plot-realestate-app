const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const DB_uri = process.env.ATLAS_URI;
moongoose.connect(DB_uri);
const connection = moongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection established sucessfully");
});

const AdminRouter = require("./routes/Admin");
const ContactUsRouter = require("./routes/ContactUs");
const AboutUsRouter = require("./routes/AboutUs");
const TeamRouter = require("./routes/Team");
const GalleryRouter = require("./routes/Gallery");
const VideoRouter = require("./routes/Video");
const MapsRouter = require("./routes/Maps");
const RentPropertyDetailRouter = require("./routes/RentPropertyDetail");
const SalePropertyDetailRouter = require("./routes/SalePropertyDetail");
const SubmittedPropertyRequestsRouter = require("./routes/SubmittedPropertyRequests");
const listingRoutes = require('./routes/Listing');
const userRoutes = require('./routes/User');
const messageRoutes = require('./routes/Message');
const reviewRoutes = require('./routes/Review');


app.use("/Admin", AdminRouter);
app.use("/ContactUs", ContactUsRouter);
app.use("/AboutUs", AboutUsRouter);
app.use("/Team", TeamRouter);
app.use("/Gallery", GalleryRouter);
app.use("/Video", VideoRouter);
app.use("/Maps", MapsRouter);
app.use("/RentPropertyDetail", RentPropertyDetailRouter);
app.use("/SalePropertyDetail", SalePropertyDetailRouter);
app.use("/SubmittedPropertyRequests", SubmittedPropertyRequestsRouter);
app.use('/api/listings', listingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/reviews', reviewRoutes);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
