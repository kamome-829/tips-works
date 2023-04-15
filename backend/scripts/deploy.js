const fs = require("fs");

const main = async() => {
    tipsworker = await ethers.getContractFactory("TipsWorker");
    tipsworker = await tipsworker.deploy();
    await tipsworker.deployed();
    console.log(`Contract deployd to: ${tipsworker.address}`);


    //コントラクトアドレスの書き出し
    fs.writeFileSync("./tipsworker.js",
    `
    module.exports = "${tipsworker.address}"
    `
    );
}

const deploy = async () =>{
    try{
        await main();
        process.exit(0);
    } catch(err){
        console.log(err);
        process.exit(1);
    }
};

deploy();
