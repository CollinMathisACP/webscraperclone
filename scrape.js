var scraper = require('./tools').scraper;
//scraper = function(url,function,file)
//scrapes a URL, parses it with parseFcn, and archives the data in a JSON file called filename.

var parser = function($, data)
{
    var parent = $("#comics-characterindex > section.module.moduColor_Light.modu_AZ > div:nth-child(4) > div");
    var children = parent.find("li");
    children.toArray()
        .forEach(function(item,index)
        {
            data.push($(item).text());
        });
}

var file = "results.json";
scraper("https://www.marvel.com/comics/characters",parser,file);
