const main = async () => {
    const [owner, other1, other2] = await hre.ethers.getSigners();
    const beeContractFactory = await hre.ethers.getContractFactory("bee");
    const beeContract = await beeContractFactory.deploy();
    await beeContract.deployed();

    console.log("owner address", owner.address);
    console.log("bee Contract deployed: ", beeContract.address);

    const odycContractFactory = await hre.ethers.getContractFactory("ODYC");
    const odycContract = await odycContractFactory.deploy();
    await odycContract.deployed();

    console.log("ODYC Contract deployed: ", odycContract.address);

    let txn = await beeContract.toggle();
    await txn.wait();
    console.log("Toggle Done");

    txn = await beeContract.setDuckAddress(odycContract.address);
    await txn.wait();
    console.log("___ duck address ___", await beeContract.DUCK_ADDRESS());

    txn = await odycContract.setApprovalForAll(beeContract.address, true);
    await txn.wait();
    console.log(
        "___ approve action ___",
        await odycContract.isApprovedForAll(owner.address, beeContract.address)
    );

    txn = await beeContract.stakeDuckById([0, 2]);
    await txn.wait();

    let stakedDuck = await beeContract.getStakedDuck(owner.address);
    console.log("StakedDuck: " + stakedDuck);
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
