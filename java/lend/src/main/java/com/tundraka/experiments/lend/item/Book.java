package com.tundraka.experiments.lend.item;

public class Book implements Lendable {
	private long bookId;
    private String name;

    public Book(String name) {
    	bookId = 0;
        this.name = name;
    }

    public String getName() {
        return name;
    }
    }
