module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const id = (req.query.id || (req.body && req.body.id));
    const name = (req.query.name || (req.body && req.body.name));
    const age = (req.query.age || (req.body && req.body.age));
    
    // cosmosDBにデータ格納
    context.bindings.outputDocument = JSON.stringify({
        id: id,
        name: name,
        age: age
    });
    
}