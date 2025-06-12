// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {BookStore} from "../src/BookStore.sol";

contract BookStoreTest is Test {
    BookStore public bookStore;
    address  owner = makeAddr("owner");
    address user = makeAddr("user");

    function setUp() public {
        vm.prank(owner);
        bookStore = new BookStore();
        vm.deal(user,10 ether);
        vm.deal(owner,10 ether);

    }
    // This tests that getAllBooks returns the correct books in the contract and their initial details.
    function testGetAllBooks() public {
        vm.startPrank(owner);
        bookStore.seedBooks();
        vm.stopPrank();
        
        BookStore.Book[] memory allBooks = bookStore.getAllBooks();
        assertEq(allBooks.length, 8);
        
        assertEq(allBooks[0].title, "The Crypto World");
        assertEq(allBooks[1].title, "Burning Man");
        assertEq(allBooks[2].title, "The Bitcoin Standard");
        
        
        assertEq(allBooks[0].stock, 50);
        assertEq(allBooks[1].stock, 20);
        assertEq(allBooks[2].stock, 70);
    }
    // This tests that show correctly retrieves and returns details for an existing book.
    function testOwnerCanAddBook() public {
            vm.prank(owner);
            bookStore.addBook("Hacker Book", "Anonymous", 100, 5, "");
            BookStore.Book memory book = bookStore.show(1);
            assertEq(book.title, "Hacker Book");
            assertEq(book.stock, 5);
     }
     // This tests that  cannot add a book with zero price, expecting the transaction to revert.
    function testCannotAddBookWithZeroPrice() public {
            vm.prank(owner);
             vm.expectRevert();
            bookStore.addBook("Hacker Book", "Anonymous", 0, 5, "");
     }
     // This tests that a non-owner address cannot add a book, expecting the transaction to revert.
    function testNonOwnerCannotAddBook() public {
            vm.prank(user);
            vm.expectRevert();
            bookStore.addBook("Hacker Book", "Anonymous", 100, 5, "");
            

     }
     // This tests that show correctly retrieves and returns details for an existing book.
    function testShowValidBook() public {
        vm.startPrank(owner);
        bookStore.addBook("The Crypto World", "Lynette Preston" , 1000, 50, "" );
        BookStore.Book  memory book=bookStore.show(1);
        assertEq(book.title, "The Crypto World");
        assertEq(book.stock, 50);

    }
    // This tests that show reverts when attempting to retrieve a non-existent book.
    function testShowInvalidBook() public {
        vm.expectRevert(); 
        bookStore.show(8);
    }

// This tests that the contract owner can successfully seed the initial set of books.
     function testOwnerCanSeedBooks() public {
            vm.prank(owner);
            bookStore.seedBooks();
            BookStore.Book memory book = bookStore.show(3);
            assertEq(book.title, "The Bitcoin Standard");
            assertEq(book.stock, 70);
     }

// This tests that a non-owner address cannot seed books, expecting the transaction to revert.
    function testNonOwnerCannotSeedBooks() public {
            vm.prank(user);
            vm.expectRevert();
            bookStore.seedBooks();
            

     }
}
