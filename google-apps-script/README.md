# Google Sheet & Email Automation Setup Guide

### Target Google Sheet
- **URL**: [https://docs.google.com/spreadsheets/d/1Uy9L1yrF5kj9qPAqtkyGtoNBFGv6ToKeQKkcw2SLeTg/edit](https://docs.google.com/spreadsheets/d/1Uy9L1yrF5kj9qPAqtkyGtoNBFGv6ToKeQKkcw2SLeTg/edit)
- **Tab Name**: `Sheet1`

### Email Routing
- **Primary Recipient**: `sales@sspacia.com`
- **CC**: `design.shreeshyamco@gmail.com`

---

## 🚀 1-Minute Deployment Instructions:

1. Open the [Google Sheet](https://docs.google.com/spreadsheets/d/1Uy9L1yrF5kj9qPAqtkyGtoNBFGv6ToKeQKkcw2SLeTg/edit).
2. Click **Extensions** in the top navigation bar → **Apps Script**.
3. Delete any default code in the editor, and paste the code from [`Code.gs`](./Code.gs).
4. Click the **Save** (💾) icon.
5. Click **Deploy** (top right) → **New deployment**.
6. Click the gear icon ⚙️ next to "Select type" and select **Web app**.
   - **Description**: `Shree Shyam Group Inquiry Form`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(Must be set to "Anyone" so visitors on the website can submit inquiries)*
7. Click **Deploy**, then click **Authorize Access** and choose your Google account.
8. Copy the **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).
9. Paste this URL into `GOOGLE_SCRIPT_WEBHOOK_URL` in `src/pages/Contact.tsx` (or `.env` as `VITE_GOOGLE_SCRIPT_URL`).

---

## ⚡ What this Automation Does:
1. Automatically formats header columns on `Sheet1`:
   - `Timestamp` | `Full Name` | `Mobile No` | `Email Address` | `Target Division` | `Requirement Details` | `Status`
2. Appends every new inquiry row with IST timestamps.
3. Automatically triggers a branded, responsive executive HTML email to **`sales@sspacia.com`** and **`design.shreeshyamco@gmail.com`** with quick-action click-to-call and click-to-WhatsApp buttons!
