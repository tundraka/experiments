package com.tundraka.experiments.lend;

import java.util.List;

import com.tundraka.experiments.lend.item.Lendable;

import java.util.ArrayList;

public class Borrower {
    private static final int MAX_LENDED = 10;
    private List<Lendable> items;

    public Borrower() {
        items = new ArrayList<>();
    }

    public void returnItem(Lendable item) {
    	// TODO. find the item that we need to return.
    	items.get(item);
    }

    public int totalBorrowed() {
        return items.size();
    }
}
