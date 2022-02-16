exports.addMovie = async (collection, movieObj) => {
    await collection.insertOne(movieObj);
}

exports.findMovie = async (collection, movieObj) => {
	await collection.find(movieObj).toArray();
	
};

exports.updateMovie = async (collection, yargsObj) => {
    if (yargsObj.newtitle) {
        await collection.updateOne(
        {title: yargsObj.title, actor: yargsObj.actor}, 
        {$set: {title: yargsObj.newtitle}}
    );
    } else if (yargsObj.newactor) {
        await collection.updateOne (
        {title: yargsObj.title, actor: yargsObj.actor}, 
        {$set: {actor: yargsObj.newactor}}
    );
    }
}

exports.deleteMovie = async (collection, movieObj) => {
    await collection.deleteOne(movieObj);
}