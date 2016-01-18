package com.tundraka.experiments.lend;

import java.util.ArrayList;
import java.util.List;

public class Book implements Lendable {
	private long bookId;
    private boolean lended;
    private List<Copy> copies;
    private String name;

    public Book(String name) {
    	bookId = 0;
        this.lended = false;
        this.copies = new ArrayList<>();
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void addCopy(Copy copy) {
    	copies.add(copy);
    }
    
    private Copy getAvailable() {
        for (Copy copy : copies) {
        	if (copy.isAvailable()) {
        		return copy;
        	}
        }

        return null;
    }

    public void lend() {
        Copy copy = getAvailable();
        copy.borrow();
    }

    public boolean isAvailable() {
        Copy copy = getAvailable();
        
        return copy != null;
    }

    public void restore(Copy copy) {
        
    }
}
