pragma solidity ^0.8.0;

contract SimpleVoting {
    mapping(address => bool) public hasVoted;
    mapping(string => uint256) public votes;
    
    function vote(string memory candidate) public {
        require(!hasVoted[msg.sender], "Already voted");
        votes[candidate] += 1;
        hasVoted[msg.sender] = true;
    }
    
    function getVotes(string memory candidate) public view returns (uint256) {
        return votes[candidate];
    }
}
