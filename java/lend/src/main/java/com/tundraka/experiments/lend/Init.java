package com.tundraka.experiments.lend;

import com.tundraka.experiments.lend.item.Book;
import com.tundraka.experiments.lend.item.Item;

public class Init {
    public static void main(String[] args) {
    	Init init = new Init();
		init.initializeItems();
	}
    
    private void initializeItems() {
    	Book book1 = new Book("What I talk about when I talk about running");
    	Book book2 = new Book("South of the border, west of the sun");
    	Book book3 = new Book("1Q84");
    	Book book4 = new Book("The Road");
    	
    	Item item1 = new Item(1, book1);
    	Item item2 = new Item(2, book1);
    	Item item3 = new Item(3, book2);
    	Item item4 = new Item(4, book3);
    	Item item5 = new Item(5, book4);
    	Item item6 = new Item(6, book4);
    	Item item7 = new Item(7, book4);
    }
}
