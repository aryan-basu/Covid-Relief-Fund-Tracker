pragma solidity ^0.5.1;

contract Campaign {
  
  struct Request{
      string description;
      uint value;
      address payable recipient;
      bool complete;
      uint approvalCount;
      mapping(address=>bool)approvals;
  }

struct Donators{
string name;
address donoraddress;
}
    Donators[] public donators;
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address=>bool) public approvers;
    uint public approversCount;
    mapping(address=>uint256) public donoramount;
    mapping(address=>string) public donorname;

modifier restricted(){
    require(msg.sender==manager);
    _;
}


constructor (uint a) public {
    manager=msg.sender;
    
    minimumContribution=a;
}

function contribute(string memory name) public payable {
 
    require (msg.value>minimumContribution);
    approvers[msg.sender]=true;
    approversCount++;
    if(donoramount[msg.sender]==0){
       Donators memory newdonor=Donators({
        name:name,
        donoraddress:msg.sender
    });
    donators.push(newdonor);
   donorname[msg.sender]=name;
    donoramount[msg.sender]=donoramount[msg.sender]+msg.value;
    }
    else
    {
       donoramount[msg.sender]=donoramount[msg.sender]+msg.value; 
    }
}

function createRequest(string memory description,uint value,address payable recipient) public restricted{

Request memory newRequest=Request({

    description:description,
    value:value,
    recipient:recipient,
    complete:false,
    approvalCount:0
});

requests.push(newRequest);

}

function approveRequest(uint index) public{

   Request storage request=requests[index];
    require(approvers[msg.sender]);
    require(!request.approvals[msg.sender]);

    request.approvals[msg.sender]=true;
    request.approvalCount++;
}

function finalizeRequest(uint index) public restricted{

    Request storage request=requests[index];

    require(request.approvalCount>(approversCount /2 ));
    require(!request.complete);
    request.recipient.transfer(request.value);
    request.complete=true;
}
 function getRequestsCount() public view returns (uint256){
     return requests.length;
 }
  function donatorsCount() public view returns (uint256){
     return donators.length;
 }

}