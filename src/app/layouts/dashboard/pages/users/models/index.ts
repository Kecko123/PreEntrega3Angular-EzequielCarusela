export interface User {
  name: string;
  surname: string;
  id: number;
  phonenumber: string | null;
  email: string;
  password: string;
  country: string | null;
  role: string;
}