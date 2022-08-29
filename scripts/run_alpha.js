const main = async () => {
    const [owner, other1, other2] = await hre.ethers.getSigners();
    const alphaContractFactory = await hre.ethers.getContractFactory(
        "alpha"
    );
    const alphaContract = await alphaContractFactory.deploy();
    await alphaContract.deployed();

    console.log("alpha Contract deployed: ", alphaContract.address);
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
