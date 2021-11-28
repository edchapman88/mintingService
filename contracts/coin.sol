pragma solidity ^0.8.5;

contract coin {
    // The keyword "public" makes variables
    // accessible from other contracts
    // create a state variable called minter of type=address
    address public minter;
    // create a balances state variable that is mapped to an address
    mapping (address => uint) public balances;

    // Events allow clients to react to specific
    // contract changes you declare
    // a listener of this event with receive the 3 arguements related
    // to the event
    event Sent(address from, address to, uint amount);

    // Constructor code is only run when the contract
    // is created
    constructor() {
        //msg is a magic global variable that contains some properties which
        // allow access to the blockchain. 
        // msg.sender is always the address where the current (external) function
        // call came from.
        minter = msg.sender;
    }

    // Sends an amount of newly created coins to an address
    // Can only be called by the contract creator
    function mint(address receiver, uint amount) public {
        require(msg.sender == minter);
        balances[receiver] += amount;
    }

    // Errors allow you to provide information about
    // why an operation failed. They are returned
    // to the caller of the function.
    error InsufficientBalance(uint requested, uint available);

    // Sends an amount of existing coins
    // from any caller to an address
    function send(address receiver, uint amount) public {
        if (amount > balances[msg.sender])
            revert InsufficientBalance({
                requested: amount,
                available: balances[msg.sender]
            });

        balances[msg.sender] -= amount;
        balances[receiver] += amount;
        // the Sent event is triggered
        emit Sent(msg.sender, receiver, amount);
    }
}
