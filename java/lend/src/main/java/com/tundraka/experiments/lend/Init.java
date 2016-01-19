package com.tundraka.experiments.lend;

import com.tundraka.experiments.lend.item.Book;

public class Init {
    public static void main(String[] args) {
        Book book1 = new Book("Murakami");
        Book book2 = new Book("Martin");
        Book book3 = new Book("Brown");
        Borrower<Book> lender = new Borrorwer<>();

        book3.lend();

        lender.borrow(book1);
        lender.borrow(book2);
        lender.borrow(book3);

        System.out.println(lender.totalBorrowed()); // 2
    }
}
