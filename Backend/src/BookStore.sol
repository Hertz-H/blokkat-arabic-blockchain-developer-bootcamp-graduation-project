// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title A decentralized book store with ETH payments
/// @notice Allows owners to manage books and users to purchase them using ETH
/// @dev Uses Chainlink Price Feeds for USD to ETH conversion
contract BookStore is Ownable {
    /// @notice Chainlink price feed interface for ETH/USD
    AggregatorV3Interface internal dataFeed;

    /// @notice Structure representing a book in the store
    /// @param id Unique identifier for the book
    /// @param usdPrice Price in US cents (e.g., 1000 = $10.00)
    /// @param stock Current inventory count
    /// @param title Title of the book
    /// @param author Author of the book
    /// @param exists Flag indicating if book exists
    /// @param imageUrl URL for book cover image
    struct Book {
        uint256 id;
        uint256 usdPrice;
        uint256 stock;
        bool exists;
        string title;
        string author;
        string imageUrl;
    }

    /// @notice Mapping of book IDs to Book structs
    mapping(uint256 => Book) public books;
    
    /// @notice Counter for total books in the store
    uint256 public bookCount = 0;
    
    /// @notice Event emitted when a book is purchased
    /// @param buyer Address of the purchaser
    /// @param bookId ID of the purchased book
    /// @param ethPaid Amount of ETH paid
    /// @param usdPrice Price in US cents
    /// @param newStock Updated stock count after purchase
    event BookPurchased(
        address indexed buyer,
        uint256 indexed bookId,
        uint256 ethPaid,
        uint256 usdPrice,
        uint256 newStock
    );

    /// @notice Event emitted when the owner withdrow the contract balance
    /// @param owner Address of the owner
    /// @param balance The wathdrow balance Amount 
    event BalanceWithdrow(
        address indexed owner,
        uint256 balance
    );


    /// @notice Initializes the contract with owner and price feed
    /// @dev Uses Chainlink ETH/USD price feed on Scroll spolia test net
    constructor() Ownable(msg.sender) {
        dataFeed = AggregatorV3Interface(
            0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41
        );
    }
    
    /// @notice Gets current ETH/USD price from Chainlink
    /// @dev Returns price with 8 decimal places
    /// @return usdPrice Current ETH/USD price
    function getEthUsdPrice() public view returns (int) {
        (
            /* uint80 roundId */,
            int256 usdPrice,
            /*uint256 startedAt*/,
            /*uint256 updatedAt*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        
        require(usdPrice > 0, "Invalid Price");
        return usdPrice;
    }

    /// @notice Converts USD cents to wei amount
    /// @param usdCents Price in US cents (e.g., 1000 = $10.00)
    /// @return weiAmount Equivalent value in wei
    function usdToWei(uint256 usdCents) public view returns (uint256) {
        int256 ethUsdPrice = getEthUsdPrice(); // e.g., 2000 * 10^8
        // usdCents * 1e18 (ETH decimals) / ethUsdPrice (8 decimals) / 100 (to adjust cents)
        return (usdCents * 1e18) / (uint256(ethUsdPrice) * 100);
    }

    /// @notice Allows users to purchase a book
    /// @dev Requires exact payment in wei based on current ETH/USD rate
    /// @param bookId ID of the book to purchase
    function purchaseBook(uint256 bookId) external payable {
        Book storage book = books[bookId];
        require(book.exists, "Book Does Not Exist");
        require(book.stock > 0, "Not In Stock");
        
        uint256  bookPriceInWei = usdToWei(book.usdPrice);
        require(msg.value >= bookPriceInWei, "Not Enough Money");
        
        books[bookId].stock--;
        emit BookPurchased(msg.sender, bookId, msg.value, book.usdPrice, book.stock);
    }
    
    /// @notice Modifier to validate price is positive 
    /// @param price Price value to check
    modifier isValidPrice(uint256 price) {
        require(price > 0, "Price Must Be Positive");
        _; 
    }

    /// @notice Adds a new book to the store (owner only)
    /// @param _title Title of the book
    /// @param _author Author of the book
    /// @param _usdPrice Price in US cents
    /// @param _stock Initial inventory count
    /// @param _imageUrl URL for book cover image
    function addBook(
        string memory _title,
        string memory _author,
        uint256 _usdPrice,
        uint256 _stock,
        string memory _imageUrl
    ) public onlyOwner isValidPrice(_usdPrice) {
        bookCount++;
        books[bookCount] = Book({
            id: bookCount, 
            title: _title, 
            author: _author,
            usdPrice: _usdPrice,
            stock: _stock,
            imageUrl: _imageUrl,
            exists: true
        });
    }

    /// @notice Gets all books in the store
    /// @return allBooks Array of all Book structs
    function getAllBooks() external view returns (Book[] memory) {
        Book[] memory allBooks = new Book[](bookCount);  
        for (uint256 i = 1; i <= bookCount; i++) {
            if(books[i].stock>0){
                allBooks[i-1] = books[i];
            }
           
        }
        return allBooks;
    }

    /// @notice Gets details of a specific book
    /// @param id ID of the book to query
    /// @return Book struct with all details
    function show(uint256 id) external view returns (Book memory) {
        Book memory _book = books[id];
        require(_book.exists, "Book does not exist");
        return _book;
    }
    
    /// @notice Withdraws contract balance to owner (owner only)
    function withdraw() external onlyOwner {
        require(address(this).balance>0,"Empty Balance");
        uint256 contractBalance=address(this).balance;
        payable(owner()).transfer(address(this).balance);
        emit BalanceWithdrow(owner(),contractBalance);
    }

    /// @notice Seeds the store with initial books (owner only)
    function seedBooks() external onlyOwner {
        addBook("The Crypto World", "Lynette Preston", 1000, 50, "/images/crypto_world.jpg");
        addBook("Burning Man", "Lynette Preston", 200, 20, "/images/burning_man.jpg");
        addBook("The Bitcoin Standard", "Saifedean Ammous", 100, 70, "/images/bitcoin_standards_.jpg");
        addBook("Proof of Stake", "Vitalik Buterin", 100, 70, "/images/proof_of_stake.jpg");
        addBook("Programming Bitcoin", "Jimmy Song", 100, 70, "/images/programming_bitcoin.jpg");
        addBook("DeFi and the Future of Finance", "Campbell R. Harvey et al", 100, 70, "/images/DEFI_future_of_finance_.jpg");
        addBook("The Age of Cryptocurrency ", "Paul Vigna & Michael J. Casey", 100, 70, "/images/crypto_curency.jpg");
        addBook("Mastering Ethereum ", "Andreas M. Antonopoulos & Gavin Wood", 100, 70, "/images/mastering_ethereum.jpg");



        

    }

    /// @notice Gets ETH balance of an address
    /// @param accountAddress Address to check
    /// @return balance ETH balance in wei
    function getBalance(address accountAddress) public view returns(uint256) {
        return accountAddress.balance;
    }
   
    /// @notice Gets contract's ETH balance
    /// @return balance Contract balance in wei
    function getContractBalance() public view returns(uint256) {
        return address(this).balance;
    }
}