function sortListOldToNew(listName, delimiterChar) {
    console.log("sortListByYear function is called");
    var list = document.getElementById(listName);
    var items = list.getElementsByTagName('li');
    var itemsArr = [];

    for (var i = 0; i < items.length; i++) {
        itemsArr.push(items[i]);
    }

    itemsArr.sort(function(a, b) {
        var aYear = a.textContent.split(delimiterChar)[0].slice(-4);
        var bYear = b.textContent.split(delimiterChar)[0].slice(-4);
        // console.log("a:", a, "b:", b)
        console.log("aYear:", aYear, "bYear:", bYear);
        return aYear - bYear
    });

    for (var i = 0; i < itemsArr.length; i++) {
        list.appendChild(itemsArr[i]);
    }
    console.log(itemsArr)
}

function sortListNewToOld(listName, delimiterChar) {
    console.log("sortListByYear function is called");
    var list = document.getElementById(listName);
    var items = list.getElementsByTagName('li');
    var itemsArr = [];

    for (var i = 0; i < items.length; i++) {
        itemsArr.push(items[i]);
    }

    itemsArr.sort(function(a, b) {
        var aYear = a.textContent.split(delimiterChar)[0].slice(-4);
        var bYear = b.textContent.split(delimiterChar)[0].slice(-4);
        // console.log("a:", a, "b:", b)
        console.log("aYear:", aYear, "bYear:", bYear);
        return - aYear + bYear
    });

    for (var i = 0; i < itemsArr.length; i++) {
        list.appendChild(itemsArr[i]);
    }
    console.log(itemsArr)
}
