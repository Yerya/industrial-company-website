"use server"

import { Resend } from "resend"

export type ContactFormData = {
  name: string
  company?: string
  phone: string
  email?: string
  message?: string
  locale?: string
}

export type ContactResult = { ok: true } | { ok: false; error: string }

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")

export async function sendContactMessage(data: ContactFormData): Promise<ContactResult> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || "info@sod-trade-house.com"
  const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return { ok: false, error: "server_misconfigured" }
  }

  const name = data.name?.trim()
  const phone = data.phone?.trim()
  if (!name || !phone) {
    return { ok: false, error: "missing_required" }
  }

  const company = data.company?.trim() || ""
  const email = data.email?.trim() || ""
  const message = data.message?.trim() || ""
  const locale = data.locale || "ru"

  const rows: [string, string][] = [
    ["Имя / Name", name],
    ["Телефон / Phone", phone],
  ]
  if (company) rows.push(["Компания / Company", company])
  if (email) rows.push(["Email", email])
  if (message) rows.push(["Сообщение / Message", message])
  rows.push(["Локаль / Locale", locale])

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
      <h2 style="margin: 0 0 16px; font-size: 20px; color: #003F87;">Новая заявка с сайта SOD EAST TRADE HOUSE</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top; width: 35%;">${escapeHtml(label)}</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; white-space: pre-wrap;"><strong>${escapeHtml(value)}</strong></td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="margin: 24px 0 0; color: #999; font-size: 12px;">Это автоматическое уведомление с формы контактов на sod-trade-house.com</p>
    </div>
  `

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n")

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Новая заявка с сайта — ${name}`,
      replyTo: email || undefined,
      html,
      text,
    })

    if (error) {
      console.error("Resend error:", error)
      return { ok: false, error: "send_failed" }
    }

    return { ok: true }
  } catch (e) {
    console.error("sendContactMessage exception:", e)
    return { ok: false, error: "send_failed" }
  }
}
