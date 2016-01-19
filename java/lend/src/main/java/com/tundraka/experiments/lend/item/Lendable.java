package com.tundraka.experiments.lend.item;

public interface Lendable {
    public boolean isAvailable();
    public void lend();
    public void restore();
}
