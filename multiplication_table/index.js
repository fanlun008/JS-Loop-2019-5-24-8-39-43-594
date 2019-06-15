(function multip_tab() {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(i + " * " + j + " = " + i * j + "\t");
            console.log(i + " * " + j + " = " + i * j + "\t")
        }
        document.write("<br/>");
        console.log("\n\t")
    }
})()
