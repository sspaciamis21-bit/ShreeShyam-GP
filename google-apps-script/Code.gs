/**
 * ==============================================================================
 * SHREE SHYAM GROUP - INQUIRY FORM INTEGRATION (GOOGLE APPS SCRIPT)
 * ==============================================================================
 * Sheet ID: 1Uy9L1yrF5kj9qPAqtkyGtoNBFGv6ToKeQKkcw2SLeTg
 * Sheet Tab: Sheet1
 * Primary Email: sales@sspacia.com
 * CC Email: design.shreeshyamco@gmail.com
 * ==============================================================================
 */

const CONFIG = {
  SPREADSHEET_ID: "1Uy9L1yrF5kj9qPAqtkyGtoNBFGv6ToKeQKkcw2SLeTg",
  SHEET_NAME: "Sheet1",
  PRIMARY_EMAIL: "sales@sspacia.com",
  CC_EMAIL: "design.shreeshyamco@gmail.com",
  ORGANIZATION_NAME: "Shree Shyam Group of Companies",
  PHONE: "+91 7600 393 779"
};

/**
 * 🧪 ONE-CLICK TEST FUNCTION:
 * Run this function once by selecting 'testSendEmail' in the toolbar dropdown above and clicking 'Run'.
 * This will:
 * 1. Prompt Google's one-time permission popup (Authorize Email Permissions).
 * 2. Send an instant test email to sales@sspacia.com & CC design.shreeshyamco@gmail.com.
 */
function testSendEmail() {
  const result = sendInquiryNotificationEmail({
    name: "Test Client",
    phone: "+91 7600 393 779",
    email: "test@example.com",
    divisionTitle: "GeM Portal Orders & Government Supply",
    message: "This is a test inquiry from Shree Shyam Group Webhook.",
    formattedDate: Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MMM-yyyy hh:mm:ss a 'IST'")
  });
  Logger.log("Test Email Result: " + JSON.stringify(result));
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(30000);

  try {
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const name = data.name || data.fullName || "Not Specified";
    const phone = data.phone || data.mobile || "Not Specified";
    const email = data.email || "Not Specified";
    const division = data.division || data.targetDivision || "general";
    const message = data.message || data.requirement || "No message provided";
    const timestamp = new Date();
    const formattedDate = Utilities.formatDate(timestamp, "Asia/Kolkata", "dd-MMM-yyyy hh:mm:ss a 'IST'");

    // Map Division Codes to Friendly Titles
    const divisionLabels = {
      'gem': 'GeM Portal Orders & Government Supply',
      'construction': 'Construction & Infrastructure Project',
      'sspacia': 'Sspacia Coworking Desk / Corporate Office Booking',
      'general': 'General Corporate Inquiry'
    };
    const divisionTitle = divisionLabels[division] || division;

    // 1. Save to Google Sheet
    let ss;
    try {
      ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
    } catch (err) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    
    let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    }

    // Auto-create and format headers if empty
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Timestamp",
        "Full Name",
        "Mobile No",
        "Email Address",
        "Target Division",
        "Requirement Details",
        "Status"
      ];
      sheet.appendRow(headers);
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#0284c7");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
    }

    // Append inquiry row
    sheet.appendRow([
      formattedDate,
      name,
      phone,
      email,
      divisionTitle,
      message,
      "New Lead"
    ]);

    // 2. Send Immediate Email to sales@sspacia.com with CC to design.shreeshyamco@gmail.com
    let emailStatus = "sent";
    try {
      sendInquiryNotificationEmail({
        name: name,
        phone: phone,
        email: email,
        divisionTitle: divisionTitle,
        message: message,
        formattedDate: formattedDate
      });
    } catch (emailErr) {
      Logger.log("Email error: " + emailErr.toString());
      emailStatus = "failed: " + emailErr.toString();
    }

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Inquiry successfully recorded in Google Sheets.",
        emailStatus: emailStatus,
        timestamp: formattedDate
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("doPost error: " + error.toString());
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "active",
      message: "Shree Shyam Group Inquiry Webhook is running and active.",
      sheetId: CONFIG.SPREADSHEET_ID,
      primaryRecipient: CONFIG.PRIMARY_EMAIL,
      ccRecipient: CONFIG.CC_EMAIL
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Sends a high-end, responsive HTML notification email.
 */
function sendInquiryNotificationEmail(details) {
  // If run directly without arguments, use default test values
  details = details || {};
  const divisionTitle = details.divisionTitle || "GeM Portal Orders & Government Supply";
  const name = details.name || "Test Client";
  const phone = details.phone || "+91 7600 393 779";
  const email = details.email || "test@example.com";
  const message = details.message || "This is a test inquiry notification from Shree Shyam Group.";
  const formattedDate = details.formattedDate || Utilities.formatDate(new Date(), "Asia/Kolkata", "dd-MMM-yyyy hh:mm:ss a 'IST'");

  const subject = `[NEW INQUIRY] ${divisionTitle} - ${name}`;

  const plainTextBody = `
New Business Inquiry Received:
----------------------------------------
Target Division: ${divisionTitle}
Client Name: ${name}
Mobile Number: ${phone}
Email Address: ${email}
Received At: ${formattedDate}

Requirement Details:
${message}
----------------------------------------
Shree Shyam Group of Companies
  `.trim();

  const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b; }
        .wrapper { width: 100%; max-width: 620px; margin: 20px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #090d16 0%, #0f172a 100%); padding: 30px 24px; text-align: center; border-bottom: 3px solid #0284c7; }
        .header h1 { color: #ffffff; margin: 0 0 6px; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
        .header p { color: #38bdf8; margin: 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
        .content { padding: 28px 24px; }
        .badge { display: inline-block; background: #e0f2fe; color: #0284c7; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 700; margin-bottom: 20px; }
        .table-box { width: 100%; border-collapse: collapse; margin-bottom: 24px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; }
        .table-box td { padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
        .table-box td.label { font-weight: 600; color: #64748b; width: 35%; background: #f8fafc; }
        .table-box td.value { color: #0f172a; font-weight: 600; }
        .message-card { background: #f8fafc; border-left: 4px solid #0284c7; padding: 16px; border-radius: 4px; margin-bottom: 25px; }
        .message-card h3 { margin: 0 0 8px; font-size: 14px; color: #0284c7; text-transform: uppercase; font-weight: 700; letter-spacing: 0.5px; }
        .message-card p { margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-line; }
        .actions { text-align: center; margin: 24px 0 10px; }
        .btn-call { display: inline-block; background: #0284c7; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 4px; }
        .btn-wa { display: inline-block; background: #22c55e; color: #ffffff !important; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; margin: 4px; }
        .footer { background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>${CONFIG.ORGANIZATION_NAME}</h1>
          <p>Official Website Inquiry Notification</p>
        </div>
        
        <div class="content">
          <div style="text-align: center;">
            <div class="badge">📌 ${divisionTitle}</div>
          </div>

          <p style="font-size: 15px; color: #334155; margin-top: 0; line-height: 1.5;">
            A new business inquiry has been submitted through the portal and logged to Google Sheets:
          </p>

          <table class="table-box">
            <tr>
              <td class="label">Client Name:</td>
              <td class="value">${name}</td>
            </tr>
            <tr>
              <td class="label">Mobile Number:</td>
              <td class="value"><a href="tel:${phone}" style="color: #0284c7; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email Address:</td>
              <td class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td class="label">Target Division:</td>
              <td class="value">${divisionTitle}</td>
            </tr>
            <tr>
              <td class="label">Received Date & Time:</td>
              <td class="value">${formattedDate}</td>
            </tr>
          </table>

          <div class="message-card">
            <h3>Requirement Details / Message:</h3>
            <p>${message}</p>
          </div>

          <div class="actions">
            <a href="tel:${phone}" class="btn-call">📞 Call Client Now</a>
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" class="btn-wa">💬 WhatsApp Client</a>
          </div>
        </div>

        <div class="footer">
          <p style="margin: 0 0 6px;">
            <strong>Shree Shyam Group of Companies</strong> • 6th Floor, Mercádo, C.G. Road, Ahmedabad
          </p>
          <p style="margin: 0;">
            This email was sent automatically to <strong>${CONFIG.PRIMARY_EMAIL}</strong> with CC to <strong>${CONFIG.CC_EMAIL}</strong>.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  // 1. Try GmailApp first (shows in your Gmail Sent folder)
  try {
    GmailApp.sendEmail(CONFIG.PRIMARY_EMAIL, subject, plainTextBody, {
      cc: CONFIG.CC_EMAIL,
      htmlBody: htmlBody,
      name: "Shree Shyam Group Inquiries",
      replyTo: (email && email !== "Not Specified") ? email : undefined
    });
    return { success: true, service: "GmailApp" };
  } catch (gmailErr) {
    Logger.log("GmailApp error, attempting MailApp: " + gmailErr.toString());
    
    // 2. Fallback to MailApp with mandatory body field
    MailApp.sendEmail({
      to: CONFIG.PRIMARY_EMAIL,
      cc: CONFIG.CC_EMAIL,
      subject: subject,
      body: plainTextBody,
      htmlBody: htmlBody,
      name: "Shree Shyam Group Inquiries",
      replyTo: (email && email !== "Not Specified") ? email : undefined
    });
    return { success: true, service: "MailApp" };
  }
}
