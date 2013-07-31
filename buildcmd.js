(function ()
{
    var fs = require("fs"),
        src = "./",
        des = "./static/";

    var batStr = "";
    var batName = "staticbuild.cmd";

    var sourceFile = process.argv[2];
    var sourceType = process.argv[3] || "js";

    var suffixMap = {
        "js": "jsinputlist",
        "css": "cssinputlist"
    };

    function crandom(n)
    {
        var uid = Math.random().toString(16).substr(2, n);

        while (uid.length < n)
        {
            uid = Math.random().toString(16).substr(2, n);
        }

        return uid;
    }

    fs.readFile(process.argv[2], "utf-8", function (err, data)
    {
        if (err) throw err;

        var jsonObj = JSON.parse(data);

        var temArr = [];

        temArr.push("ajaxmin");
        temArr.push(" ");

        temArr.push(jsonObj[suffixMap[sourceType]].join(" "));
        temArr.push(" -o ");
        temArr.push(des + sourceType + "/");
        temArr.push(crandom(8) + "-" + crandom(4) + "-" + crandom(4) + "-" + crandom(4) + "-" + crandom(8) + crandom(4));
        temArr.push("." + sourceType);

        batStr = temArr.join("");
        fs.writeFileSync(batName, batStr);
    });

})();
