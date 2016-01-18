package com.tundraka.experiments.lend;

import java.util.List;
import java.util.ArrayList;

public class Lender<T extends Lendable> {
    private static final int MAX_LENDED = 10;
    private List<T> items;

    public Lender() {
        items = new ArrayList<>();
    }

    public void returnItem(T item) {
    }

    public void borrow(T item) {
        if (!this.canBorrow(item)) {
            return;
        }

        items.add(item);
    }

    public int totalBorrowed() {
        return items.size();
    }

    public boolean canBorrow(T item) {
        return item != null && !item.isLended() && items.size() < MAX_LENDED;
    }
}
