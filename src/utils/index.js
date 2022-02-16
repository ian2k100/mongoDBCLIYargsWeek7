exports.addMovie = async (collection, movieObj) => {
    await collection.insertOne(movieObj);
}

exports.findMovie = async (collection, movieObj) => {
	await collection.find(movieObj).toArray();
	
};

exports.updateMovie = async (collection, movieObj) => {
    await collection.updateOne(movieObj);
}

exports.deleteMovie = async (collection, movieObj) => {
    await collection.deleteOne(movieObj);
}