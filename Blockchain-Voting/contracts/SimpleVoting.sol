pragma solidity ^0.8.0;

contract SimpleVoting {
    mapping (address => bool) public hasVoted;
    mapping (string => uint256) public votes;
    
    event Voted(address indexed voter, string candidate);

    function vote(string calldata candidate) external {
        require(!hasVoted[msg.sender], "You already voted");
        votes[candidate]++;
        hasVoted[msg.sender] = true;
        emit Voted(msg.sender, candidate);
    }

    function getVotes(string calldata candidate) external view returns (uint256) {
        return votes[candidate];
    }
}
