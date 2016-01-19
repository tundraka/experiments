package com.tundraka.experiments.lend.item;

public class Copy {
	private long id;
	private long bookId;
	private boolean available;

	public Copy(long id, long bookId, boolean available) {
		this.id = id;
		this.bookId = bookId;
		this.available = available;
	}

	public boolean isAvailable() {
		return available;
	}
	
	public void borrow() {
		available = false;
	}

	public long getId() {
		return id;
	}

	public long getBookId() {
		return bookId;
	}

	@Override
	public String toString() {
		return "Copy [id=" + id + ", bookId=" + bookId + ", available=" + available + "]";
	}
}
