(function () {
    var i =0;
    while(i < 20){
        document.write((++i % 2 === 0) ? i + "是偶数" + "<br/>" : i + "是奇数" + "<br/>")
    }
})()