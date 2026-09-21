import nodemailer from "nodemailer";
import site from "@/components/data/site";
import servicesData from "@/components/data/services-data";

// Recibe el formulario de #cotizar y lo envía por correo con Gmail SMTP.
// Variables de entorno (ver .env.example):
//   GMAIL_APP_PASSWORD  contraseña de aplicación de la cuenta Gmail (obligatoria)
//   GMAIL_USER          cuenta que envía; por defecto site.contact.email
//   QUOTE_TO_EMAIL      destinatario; por defecto site.contact.email
export const runtime = "nodejs";

const MAX = { name: 100, phone: 30, service: 60, location: 120, message: 2000 };

const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export async function POST(request) {
  const password = process.env.GMAIL_APP_PASSWORD;
  if (!password) {
    return Response.json({ error: "email-not-configured" }, { status: 503 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid-json" }, { status: 400 });
  }

  const data = {
    name: clean(body.name, MAX.name),
    phone: clean(body.phone, MAX.phone),
    service: clean(body.service, MAX.service),
    location: clean(body.location, MAX.location),
    message: clean(body.message, MAX.message),
  };
  if (!data.name || !data.phone || !data.service || !data.message) {
    return Response.json({ error: "missing-fields" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER || site.contact.email;
  const to = process.env.QUOTE_TO_EMAIL || site.contact.email;
  const serviceName = servicesData.find((s) => s.id === data.service)?.title ?? data.service;

  const lines = [
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Servicio: ${serviceName}`,
    ...(data.location ? [`Ubicación: ${data.location}`] : []),
    "",
    "Detalles:",
    data.message,
  ];

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass: password },
  });

  try {
    await transporter.sendMail({
      from: `"${site.brand.name} · Sitio web" <${user}>`,
      to,
      subject: `Nueva cotización: ${serviceName} — ${data.name}`,
      text: lines.join("\n"),
    });
  } catch (error) {
    console.error("[api/cotizar] Error al enviar correo:", error?.message ?? error);
    return Response.json({ error: "send-failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
