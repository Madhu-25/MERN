const router = require("express").Router();
const Snippet = require("../models/snippetModel");

router.get("/", async (req, res) => {
    try{
        const snippets = await Snippet.find();    //find every snippet, find method returns an document array
        res.json(snippets);   //json accepts array
    }
    catch(err){
        res.status(500).send();       //500 - internal server error
    }

});

router.post("/" , async (req, res) => {            // async function can pause itself till the rest of the server runs
    try{
    const {title , description, code} = req.body;

    //validation - either description or code is required

    if(!description && !code)
    {
        return res.status(400).json({ errormessage: "You need to enter atleast a description or code"});    //status code 400 - bad request not accepted or client error
    }

    const newSnippet = new Snippet({
        title, description, code
    }) ;   //model - schema 

    const savedSnippent = await newSnippet.save();  //sends doc to mongodb and mongodb saves it

    res.json(savedSnippent)
    }
    catch(err){
        res.status(500).send();       //500 - internal server error
    }
});  // one end point for getting data


//endpoint for updating

router.put("/:id" , async (req, res) =>    
{
    try{
        const {title, description, code} = req.body;
        const snippetId = req.params.id;
        
        
        //validation - either description or code is required

        if(!description && !code)
        {
            return res.status(400).json({ errormessage: "You need to enter atleast a description or code"});    //status code 400 - bad request not accepted or client error
        }


        if(!snippetId){
            return res.status(400).json({ errormessage: "Snippet id not given. Please contact developer"});
        }
        const originalSnippet = await Snippet.findById(snippetId);  //returns a doc
        if(!originalSnippet)
            return res.status(400).json({ errormessage: "Snippet with this id is not found. Please contact developer"}); 
        
        originalSnippet.title = title;
        originalSnippet.description = description;
        originalSnippet.code = code;

        const savedSnippent = await originalSnippet.save();

        res.json(savedSnippet);    //tells front-end which snippet is deleted
    }
    catch(err){
        res.status(500).send();       //500 - internal server error
    }
});

router.delete("/:id", async (req, res) =>    //delete specific snippet using id ; ':' --> parameter
{
    try{
        const snippetId = req.params.id;
        
        //validation 

        if(!snippetId){
            return res.status(400).json({ errormessage: "Snippet id not given. Please contact developer"});
        }
        const exisitingSnippet = await Snippet.findById(snippetId);  //returns a doc
        if(!exisitingSnippet)
            return res.status(400).json({ errormessage: "Snippet with this id is not found. Please contact developer"}); 
        
            await exisitingSnippet.delete();

            res.json(exisitingSnippet);    //tells front-end which snippet is deleted
    }
    catch(err){
        res.status(500).send();       //500 - internal server error
    }
});

module.exports = router;  //create router and export 