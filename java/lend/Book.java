package com.tundraka.experiments.lend;

public class Book implements Lendable {
    private boolean lended;
    private String name;

    public Book(String name) {
        this.lended = false;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void lend() {
        lended = true;
    }

    public boolean isLended() {
        return this.lended;
    }

    public void restore() {
        lended = false;
    }
}
