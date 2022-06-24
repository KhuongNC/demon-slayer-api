const express = require("express");
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const dotevn = require("dotenv");
const url = "https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki";
const characterUrl = "https://kimetsu-no-yaiba.fandom.com/wiki/";

// Setup
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
dotevn.config();
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);

// Routes

// Get all characters
app.get("/v1", (req, resp) => {
    const thumbnail = [];
    const limit = Number(req.query.limit);

    try {
        axios(url).then((res) => {
            const html = res.data;
            const $ = cheerio.load(html);
            $(".portal", html).each(function () {
                const name = $(this).find("a").attr("title");
                const url = $(this).find("a").attr("href");
                const img = $(this).find("a > img").attr("data-src");
                thumbnail.push({
                    name: name,
                    url: "https://demon-slayer-api-bf9i.onrender.com/v1" + url.split("/wiki")[1],
                    img: img
                })
            });

            if (limit && limit > 0) {
                resp.status(200).json(thumbnail.slice(0, limit));
            }
            else {
                resp.status(200).json(thumbnail);
            }
        });
    } catch (error) {
        resp.status(500).json(error);
    }
})

//  Get a character
app.get("/v1/:character", (req, resp) => {
    let url = characterUrl + req.params.character;
    const titles = [];
    const details = [];
    const galleries = [];
    const characters = [];
    const characterObj = {};

    try {
        axios(url).then((res) => {
            const html = res.data;
            const $ = cheerio.load(html);
            $("aside", html).each(function () {
                // Get banner image
                const image = $(this).find("img").attr("src");

                //Get the title of character title
                $(this)
                    .find("section > div > h3")
                    .each(function () {
                        titles.push($(this).text());
                    });

                // Get character details
                $(this)
                    .find("section > div > div")
                    .each(function () {
                        details.push($(this).text());
                    });

                if (image !== undefined) {
                    // Create object with title as key and detail as value
                    for (let i = 0; i < titles.length; i++) {
                        characterObj[titles[i].toLowerCase()] = details[i];
                    }

                    characters.push({
                        name: req.params.character.replace("_", " "),
                        gallery: galleries,
                        image: image,
                        ...characterObj,
                    });
                }
            });

            resp.status(200).json(characters);
        });
    } catch (error) {
        resp.status(500).json(error);
    }
});

// Run port
app.listen(process.env.PORT || 8000, () => {
    console.log("Server is running");
})