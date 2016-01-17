package com.tundraka.experiments.lend;

interface Lendable {
    public boolean isLended();
    public void lend();
    public void restore();
}
