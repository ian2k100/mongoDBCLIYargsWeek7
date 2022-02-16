const yargs = require('yargs');
const { client,connection } = require("./db/connection");
const { addMovie, findMovie, updateMovie, deleteMovie } = require("./utils")

const app = async (yargsObj) => {
    try {
        const collection = await connection();
        if (yargsObj.add){
            await addMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
            //add movie to mongodb database, needs collection and success message
           console.log(`You have added the movie ${yargsObj.title} staring ${yargsObj.actor}`);
        } else if (yargsObj.find) {
			await findMovie(collection, {title: yargsObj.title});
            console.log(`I have found the movie you are looking for ${yargsObj.actor}`);
        } else if (yargsObj.update) {
            await updateMovie(collection, yargsObj);
            console.log(`I have updated the movie ${yargsObj.title} starring ${yargsObj.actor} with ${yargsObj.newtitle} starring ${yargsObj.newactor}`); 
        } else if (yargsObj.delete) {
            await deleteMovie(collection, {title: yargsObj.title, actor: yargsObj.actor});
            console.log(`I have delete the movie you asked ${yargsObj.title, yargsObj.actor}`)
		} else {
            console.log("Incorrect command");
        }
        client.close();
    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);