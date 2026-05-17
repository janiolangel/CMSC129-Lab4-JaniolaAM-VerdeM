const { test, expect } = require('@playwright/test');

async function addBook(page, title, author, year, status) {
  await page.fill('[data-testid="book-title-input"]', title);
  await page.fill('[data-testid="book-author-input"]', author);
  await page.fill('[data-testid="book-year-input"]', year);
  await page.selectOption('[data-testid="book-status-select"]', status);
  await page.click('[data-testid="add-book-btn"]');
}

// User Story 1: As a reader, I want to add books to my reading list
test.describe('User Story 1: Add a book', () => {
  test('reader can add a book to their reading list', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await addBook(page, 'Dune', 'Frank Herbert', '1965', 'To Read');
    await expect(page.locator('[data-testid="book-list"]')).toContainText('Dune');
  });
});

// User Story 2: As a reader, I want to update a book's reading status
test.describe('User Story 2: Update reading status', () => {
  test('reader can update a book reading status', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await addBook(page, 'Dune', 'Frank Herbert', '1965', 'To Read');
    await page.selectOption('[data-testid="update-status-select"]', 'Reading');
    await page.click('[data-testid="update-book-btn"]');
    await expect(page.locator('[data-testid="book-list"]')).toContainText('Reading');
  });
});

// User Story 3: As a reader, I want to remove books from my reading list
test.describe('User Story 3: Remove a book', () => {
  test('reader can remove a book from their reading list', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await addBook(page, 'Dune', 'Frank Herbert', '1965', 'To Read');
    await page.click('[data-testid="delete-book-btn"]');
    await expect(page.locator('[data-testid="book-list"]')).not.toContainText('Dune');
  });
});