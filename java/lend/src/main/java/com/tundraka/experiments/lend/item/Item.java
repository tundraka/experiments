package com.tundraka.experiments.lend.item;

public class Item {
	private long itemId;
	private boolean available;
	private Lendable item;
	
	public Item(long itemId, Lendable item) {
		this.itemId = itemId;
		this.item = item;
		available = true;
	}

	public long getItemId() {
		return itemId;
	}

	public Lendable getItem() {
		return item;
	}
	
	public boolean isAvailable() {
		return available;
	}

	@Override
	public String toString() {
		return "Item [item=" + item + "]";
	}
	
}
