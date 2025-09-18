# Ticket Confirmation Test

This is a simple HTML test page for a ticket purchasing system. It demonstrates a **purchase completion confirmation** page including a ticket ID and a QR code for entry.

## Overview

When a user completes a ticket purchase, this page displays:

- A personalized greeting.
- The event name.
- The unique ticket ID.
- A QR code that can be scanned at the event.
- A confirmation message from the event team.

## File

- `ticket_confirmation.html` — The main HTML file containing the ticket confirmation page.

## Usage

1. Open `ticket_confirmation.html` in a web browser to see a sample ticket confirmation page.
2. In a ticketing system (like UniOne), copy the **HTML body content** (without `<html>`, `<head>`, or `<body>` tags) into the **purchase completion HTML tab**.
3. Replace static values with dynamic placeholders if your system supports them:
   - `John` → `{first_name}`
   - `ABC123XYZ` → `{ticket_id}`

### Example Body Content for UniOne

```html
<h2>Your Ticket Confirmation – Example Event</h2>

<p>Hi {first_name},</p>
<p>Thank you for purchasing a ticket to <strong>Example Event 2025</strong>!</p>

<div style="margin:20px 0; padding:15px; background:#fff; border:1px solid #ccc; border-radius:8px;">
  <p><strong>Ticket ID:</strong> {ticket_id}</p>
</div>

<div style="margin:20px 0; text-align:center;">
  <p>Please present this QR code at the event for entry:</p>
  <img 
    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data={ticket_id}" 
    alt="Ticket QR Code">
</div>

<p>We look forward to seeing you there!</p>
<p>– The Example Event Team</p>
