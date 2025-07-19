import { Message } from "../../myTypes";


export default function EmailTemplate(data: Pick<Message, "details" | "phone" | "name" | "email">) {
    const formattedData = Object.entries(data)
        .map(([key, value]) => `<div><strong>${key}:</strong> ${String(value)}</div>`)
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Transactional Email</title>
    <style media="all" type="text/css">
      @media all {
        .btn-primary table td:hover {
          background-color: #ec0867 !important;
        }

        .btn-primary a:hover {
          background-color: #ec0867 !important;
          border-color: #ec0867 !important;
        }
      }
      @media only screen and (max-width: 640px) {
        .main p,
        .main td,
        .main span {
          font-size: 16px !important;
        }

        .wrapper {
          padding: 8px !important;
        }

        .content {
          padding: 0 !important;
        }

        .container {
          padding: 0 !important;
          padding-top: 8px !important;
          width: 100% !important;
        }

        .main {
          border-left-width: 0 !important;
          border-radius: 0 !important;
          border-right-width: 0 !important;
        }

        .btn table {
          max-width: 100% !important;
          width: 100% !important;
        }

        .btn a {
          font-size: 16px !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      }
      @media all {
        .ExternalClass {
          width: 100%;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }

        .apple-link a {
          color: inherit !important;
          font-family: inherit !important;
          font-size: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
          text-decoration: none !important;
        }

        #MessageViewBody a {
          color: inherit;
          text-decoration: none;
          font-size: inherit;
          font-family: inherit;
          font-weight: inherit;
          line-height: inherit;
        }
      }
    </style>
  </head>
  <body style="font-family: Helvetica, sans-serif; background-color: #f4f5f6; margin: 0; padding: 0;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="background-color: #f4f5f6; width: 100%;">
      <tr>
        <td>&nbsp;</td>
        <td class="container" style="max-width: 600px; padding-top: 24px; margin: 0 auto;">
          <div class="content" style="max-width: 600px; margin: 0 auto;">

            <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;">
              <tr>
                <td class="wrapper" style="padding: 24px;">
                  <div style="padding: 16px; background-color: #f0f0f0; border-radius: 8px;">
                    ${formattedData}
                  </div>
                </td>
              </tr>
            </table>

          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>`;
}
