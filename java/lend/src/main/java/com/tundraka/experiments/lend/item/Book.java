package com.tundraka.experiments.lend.item;

import java.util.ArrayList;
import java.util.List;

public class Book implements Lendable {
	private long bookId;
	private boolean borrowed;
    private String name;

    public Book(String name) {
    	bookId = 0;
        this.name = name;
    }

    public String getName() {
        return name;
    }
    
    public void lend() {
    	this.borrowed = true;
    }

    public boolean isAvailable() {
        return borrowed;
    }

    public void restore() {
        borrowed = false;
    }
}
