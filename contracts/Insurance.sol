pragma solidity ^0.5.17;

contract Insurance {

    address public insurer;

    struct Policy {
        uint id;
        string policyType;
        string customerName;
        uint age;
        address payable holder;
        bool active;
    }

    uint public policyCount;

    mapping(uint => Policy) public policies;

    event PolicyPurchased(
        uint id,
        string policyType,
        string customerName,
        address holder
    );

    constructor() public {
        insurer = msg.sender;
    }

    function buyPolicy(
        string memory _policyType,
        string memory _customerName,
        uint _age
    )
        public
        payable
    {
        require(msg.value > 0);

        policyCount++;

        policies[policyCount] = Policy(
            policyCount,
            _policyType,
            _customerName,
            _age,
            msg.sender,
            true
        );

        emit PolicyPurchased(
            policyCount,
            _policyType,
            _customerName,
            msg.sender
        );
    }

    function getPolicy(uint _id)
        public
        view
        returns(
            uint,
            string memory,
            string memory,
            uint,
            address,
            bool
        )
    {
        Policy memory p = policies[_id];

        return(
            p.id,
            p.policyType,
            p.customerName,
            p.age,
            p.holder,
            p.active
        );
    }
}