package com.tundraka.experiments.lend.item;

public class Item {
	private long itemId;
	private boolean available;
	private Lendable item;
	
	public Item(long itemId, boolean available, Lendable item) {
		this.itemId = itemId;
		this.item = item;
	}

	public long getItemId() {
		return itemId;
	}

	public Lendable getItem() {
		return item;
	}

	@Override
	public String toString() {
		return "Item [item=" + item + "]";
	}
	
}
