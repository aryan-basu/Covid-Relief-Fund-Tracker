const Campaign = artifacts.require("campaign.sol");


module.exports = function(deployer) {
    //deployer.deploy(B);
    deployer.deploy(Campaign,1);
  };


