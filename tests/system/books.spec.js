// @playwright/test must be installed — check below first
const { test, expect } = require('@playwright/test');

// User Story 1: As a reader, I want to add books to my reading list
test.describe('User Story 1: Add a book', () => {
  test('reader can add a book to their reading list', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await page.fill('[data-testid="book-title-input"]', 'Dune');
    await page.fill('[data-testid="book-author-input"]', 'Frank Herbert');
    await page.fill('[data-testid="book-year-input"]', '1965');
    await page.selectOption('[data-testid="book-status-select"]', 'To Read');
    await page.click('[data-testid="add-book-btn"]');

    await expect(page.locator('[data-testid="book-list"]')).toContainText('Dune');
  });
});

// User Story 2: As a reader, I want to update a book's reading status
test.describe('User Story 2: Update reading status', () => {
  test('reader can update a book reading status', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Add a book first
    await page.fill('[data-testid="book-title-input"]', 'Dune');
    await page.fill('[data-testid="book-author-input"]', 'Frank Herbert');
    await page.fill('[data-testid="book-year-input"]', '1965');
    await page.selectOption('[data-testid="book-status-select"]', 'To Read');
    await page.click('[data-testid="add-book-btn"]');

    // Update its status
    await page.selectOption('[data-testid="update-status-select"]', 'Reading');
    await page.click('[data-testid="update-book-btn"]');

    await expect(page.locator('[data-testid="book-list"]')).toContainText('Reading');
  });
});

// User Story 3: As a reader, I want to remove books from my reading list
test.describe('User Story 3: Remove a book', () => {
  test('reader can remove a book from their reading list', async ({ page }) => {
    await page.goto('http://localhost:5173');

    // Add a book first
    await page.fill('[data-testid="book-title-input"]', 'Dune');
    await page.fill('[data-testid="book-author-input"]', 'Frank Herbert');
    await page.fill('[data-testid="book-year-input"]', '1965');
    await page.selectOption('[data-testid="book-status-select"]', 'To Read');
    await page.click('[data-testid="add-book-btn"]');

    // Delete it
    await page.click('[data-testid="delete-book-btn"]');

    await expect(page.locator('[data-testid="book-list"]')).not.toContainText('Dune');
  });
});