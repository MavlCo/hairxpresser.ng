export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsAppMessage(
  message: string,
  phone = "2348137790960"
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+234)(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}
