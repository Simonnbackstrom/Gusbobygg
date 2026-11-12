import { Resend } from "resend";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: {
    namn?: string;
    telefon?: string;
    epost?: string;
    meddelande?: string;
    kalla?: string;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ogiltig förfrågan" }, { status: 400 });
  }

  const namn = body.namn?.trim() ?? "";
  const telefon = body.telefon?.trim() ?? "";
  const epost = body.epost?.trim() ?? "";
  const meddelande = body.meddelande?.trim() ?? "";
  const kalla = body.kalla?.trim() || "Webbformulär";

  if (!namn) {
    return Response.json({ error: "Namn saknas" }, { status: 400 });
  }
  if (!telefon && !epost) {
    return Response.json(
      { error: "Ange telefon eller e-post" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY saknas");
    return Response.json(
      { error: "Mejltjänsten är inte konfigurerad" },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_TO ?? "info@gusbobygg.se";
  const from =
    process.env.RESEND_FROM ?? "Gusbo Bygg <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const rows = [
    ["Namn", namn],
    ["Telefon", telefon || "—"],
    ["E-post", epost || "—"],
    ["Källa", kalla],
  ];

  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
      <h2 style="margin:0 0 16px">Ny förfrågan från ${escapeHtml(kalla)}</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:4px 12px 4px 0;color:#555">${escapeHtml(label)}</td>
            <td style="padding:4px 0"><strong>${escapeHtml(value)}</strong></td>
          </tr>`,
          )
          .join("")}
      </table>
      ${
        meddelande
          ? `<p style="margin-top:20px;white-space:pre-wrap">${escapeHtml(meddelande)}</p>`
          : ""
      }
    </div>
  `;

  const text = [
    `Ny förfrågan från ${kalla}`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    meddelande,
  ].join("\n");

  const result = await resend.emails.send({
    from,
    to,
    subject: `Ny förfrågan – ${namn}`,
    replyTo: epost || undefined,
    html,
    text,
  });

  if (result.error) {
    console.error("Resend error", result.error);
    return Response.json(
      { error: "Kunde inte skicka meddelandet" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
