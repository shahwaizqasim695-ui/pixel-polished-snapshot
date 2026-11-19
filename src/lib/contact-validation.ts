export type Fields = { name: string; email: string; subject: string; message: string };
export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.subject.trim().length < 2) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Your message should be at least 10 characters.";
  return e;
}
