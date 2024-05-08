 // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import OpenZeppelin contracts
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
contract TemporaryShelterToken is ERC20, Ownable, Pausable, ERC20Permit {
   
    struct Shelter {
        string name;                // Name of the shelter
        uint256 availableUnits;     // Total available units for shelter
        uint256 pricePerUnit;       // Price per unit in wei
        bool isActive;              // Flag indicating if the shelter is active (available for token purchase)
        address owner;              // Address of the shelter owner
    }

    // Mapping to store shelters by ID
    mapping(uint256 => Shelter) public shelters;
    // Counter to keep track of the total number of shelters listed
    uint256 public shelterCount;

    // Event emitted when a new shelter is listed
    event ShelterListed(uint256 indexed shelterId, string name, uint256 availableUnits, uint256 pricePerUnit, bool isActive, address indexed owner);
    // Event emitted when tokens are purchased for shelter
    event TokensPurchasedForShelter(address indexed buyer, uint256 indexed shelterId, uint256 tokensPurchased);

// Constructor to initialize the TemporaryShelterToken contract
constructor(address initialOwner) ERC20("TemporaryShelterToken", "TST") ERC20Permit("TemporaryShelterToken") Ownable(initialOwner) {
    
}


    // Function to list a new shelter option on the platform
    function listShelter(
        string memory name,
        uint256 availableUnits,
        uint256 pricePerUnit
    ) public onlyOwner {
        // Ensure available units and price per unit are greater than 0
        require(availableUnits > 0, "Available units must be greater than 0");
        require(pricePerUnit > 0, "Price per unit must be greater than 0");

        // Create a new Shelter struct with the provided details
        Shelter memory newShelter = Shelter({
            name: name,
            availableUnits: availableUnits,
            pricePerUnit: pricePerUnit,
            isActive: true,
            owner: msg.sender
        });

        // Add the new shelter to the shelters mapping
        shelters[shelterCount] = newShelter;
        // Increment the shelter count
        shelterCount++;

        // Emit an event to notify listeners about the new shelter listing
        emit ShelterListed(shelterCount - 1, name, availableUnits, pricePerUnit, true, msg.sender);
    }

    // Function to allow donors to purchase tokens representing shelter units
    function donateForShelter(uint256 shelterId, uint256 tokensToDonate) public payable whenNotPaused {
        // Ensure the shelter exists
        require(shelterId < shelterCount, "Shelter does not exist");
        Shelter storage shelter = shelters[shelterId];

        // Ensure the shelter is active and the number of tokens to donate is greater than 0
        require(shelter.isActive, "Shelter is not active");
        require(tokensToDonate > 0, "Number of tokens to donate must be greater than 0");
        // Ensure the donor sends enough funds to cover the donation
        require(msg.value >= tokensToDonate * shelter.pricePerUnit, "Insufficient funds");

        // Mint tokens to the donor
        _mint(msg.sender, tokensToDonate);
        // Reduce the available units of the shelter
        shelter.availableUnits -= tokensToDonate;

        // Deactivate the shelter if all units are sold
        if (shelter.availableUnits == 0) {
            shelter.isActive = false;
        }

        // Emit an event to notify listeners about the token donation for shelter
        emit TokensPurchasedForShelter(msg.sender, shelterId, tokensToDonate);
    }

    // Function to allow the contract owner to withdraw accumulated funds
    function withdrawFunds() public onlyOwner {
        // Get the contract's balance
        uint256 balance = address(this).balance;
        // Transfer the balance to the owner
        payable(owner()).transfer(balance);
    }

    // Function to pause the contract
    function pause() public onlyOwner {
        _pause();
    }

    // Function to unpause the contract
    function unpause() public onlyOwner {
        _unpause();
    }
}