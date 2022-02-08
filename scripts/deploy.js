const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const CryptonDonation = await ethers.getContractFactory("CryptonDonation");
  const cryptonDonation = await CryptonDonation.deploy();

  await cryptonDonation.deployed();
  
  console.log("CryptonDonation deployed to: ", cryptonDonation.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
