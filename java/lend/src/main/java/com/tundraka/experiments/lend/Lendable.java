package com.tundraka.experiments.lend;

interface Lendable {
    public boolean isAvailable();
    public void lend();
    public void restore();
}
