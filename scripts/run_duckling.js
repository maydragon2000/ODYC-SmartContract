const main = async () => {
    const [owner, other1, other2] = await hre.ethers.getSigners();
    const ducklingContractFactory = await hre.ethers.getContractFactory(
        "Duckling"
    );
    const ducklingContract = await ducklingContractFactory.deploy();
    await ducklingContract.deployed();

    console.log("Duckling Contract deployed: ", ducklingContract.address);
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
