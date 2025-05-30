// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;
// import {AggregatorV3Interface} from "@chainlink/contracts@1.4.0/interfaces/AggregatorV3Interface.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract BookStore is Ownable{

    AggregatorV3Interface internal dataFeed;

    struct Book{
        uint256 id;
        uint256 usdPrice;
        uint256 stock;
        string title;
        string author;
        bool exists;
        string imageUrl;

    }

    mapping (uint256 => Book) public books;
    uint256 public bookCount = 0 ;
    event BookPurchased(
        address indexed buyer,
        uint256 indexed bookId,
        uint256 ethPaid,
        uint256 usdPrice,
        uint256 newStock
    );

    // 0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41;
  
    constructor() Ownable( msg.sender){
        dataFeed = AggregatorV3Interface(
            0x59F1ec1f10bD7eD9B938431086bC1D9e233ECf41
        );

    }
    
    function getEthUsdPrice() public view returns (int){
        (
            /* uint80 roundId */,
            int256 usdPrice,
            /*uint256 startedAt*/,
            /*uint256 updatedAt*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        
        require(usdPrice > 0,"Invalid price");
        return usdPrice;
    }

    function usdToWei(uint256 usdCents) public view returns (uint256) {
        int256 ethUsdPrice = getEthUsdPrice(); // e.g., 2000 * 10^8
        // usdCents * 1e18 (ETH decimals) / ethUsdPrice (8 decimals) / 100 (to adjust cents)
        return (usdCents * 1e18) / (uint256(ethUsdPrice) * 100);
    }

    function purchaseBook(uint256 bookId) external  payable {
       
        Book storage book= books[bookId];
        require(book.exists,"Does not exist");
        require(book.stock>0,"Not in stock");
        uint256  bookPriceInWei = usdToWei(book.usdPrice);
        require(msg.value>=bookPriceInWei,"Not enough money");
         books[bookId].stock-- ;
         emit BookPurchased(msg.sender, bookId, msg.value ,book.usdPrice,book.stock);
    

    }
    
 modifier isValidPrice(uint256 price) {
       
        require( price > 0,"Price must be positive");
        _; 
    }
    function addBook  (
        string memory _title,
        string memory _author,
        uint256  _usdPrice,
        uint256  _stock, string  memory _imageUrl )public onlyOwner isValidPrice(_usdPrice) {

        require(_usdPrice>0,"Price must be positive");

        bookCount++;
        books[bookCount]=Book({
            id: bookCount, 
            title:_title, 
            author:_author ,
            usdPrice: _usdPrice,
            stock:_stock, 
            imageUrl:_imageUrl,
            exists:true
         });

         
     }

    function getAllBooks() external view returns ( Book[] memory) {
             Book[] memory allBooks=new Book[] (bookCount);  
             for (uint256 i=1 ; i<= bookCount ; i++){
                allBooks[i-1]=books[i];
             }
             return allBooks;
     }

    function show( uint256 id ) external view returns ( Book memory) {
            
            return books[id];
     }
    
    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function seedBooks() external onlyOwner {
      
       addBook("The Crypto World", "Lynette Preston" , 1000, 50, "" );

        addBook( "Burning Man", "Lynette Preston" , 200, 20, "" );
       
        addBook("The Bitcoin Standard", "Saifedean Ammous" ,100, 70, "");
    }

    function getBalance(address accountAddress)public view returns(uint256) {
        return accountAddress.balance;

    }
   
    function getContractBalance()public view returns(uint256) {
        return address(this).balance;

    }


}