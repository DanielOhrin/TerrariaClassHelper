/**
 * Copies the text passed in to the user's clipboard
 * @param text The text to copy
 */
function copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text)
}

export default copyToClipboard