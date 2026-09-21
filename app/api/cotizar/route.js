import site from "@/components/data/site";

// Envía por correo una copia de la solicitud del formulario usando Resend (https://resend.com).
// Solo funciona si el servidor tiene RESEND_API_KEY; si no, responde 503 y el formulario
// sigue funcionando por WhatsApp. Variables: ver .env.example.

export const runtime = "nodejs";

const MAX = { name: 120, phone: 40, service: 120, location: 160, message: 2000 };

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

const escapeHtml = (text) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export async function POST(request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ ok: false, configured: false, error: "Correo no configurado" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Cuerpo inválido" }, { status: 400 });
  }

  const data = {
    name: clean(body.name, MAX.name),
    phone: clean(body.phone, MAX.phone),
    service: clean(body.service, MAX.service),
    location: clean(body.location, MAX.location),
    message: clean(body.message, MAX.message),
  };
  if (!data.name || !data.phone || !data.service || !data.message) {
    return Response.json({ ok: false, error: "Faltan campos obligatorios" }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL || site.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || `${site.brand.name} Web <onboarding@resend.dev>`;

  const rows = [
    ["Nombre", data.name],
    ["Teléfono / WhatsApp", data.phone],
    ["Servicio", data.service],
    ["Colonia / zona", data.location || "—"],
    ["Detalles", data.message],
  ];
  const html = `
    <h2 style="font-family:Arial,sans-serif">Nueva solicitud de cotización · ${escapeHtml(site.brand.name)}</h2>
    <table style="font-family:Arial,sans-serif;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top">${label}</td><td style="padding:6px 0;white-space:pre-line">${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>`;
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Cotización web: ${data.service} — ${data.name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Resend error", res.status, detail);
    return Response.json({ ok: false, error: "No se pudo enviar el correo" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
