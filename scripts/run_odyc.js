const main = async () => {
    const [owner, other1, other2] = await hre.ethers.getSigners();
    const odycContractFactory = await hre.ethers.getContractFactory("ODYC");
    const odycContract = await odycContractFactory.deploy();
    await odycContract.deployed();

    console.log("ODYC Contract deployed: ", odycContract.address);

    let txn = await odycContract.mint(4, {
        value: hre.ethers.utils.parseEther("0.03"),
    });
    await txn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
