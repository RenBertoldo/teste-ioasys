export default interface ICreateUserDTO {
  name: string;
  email: string;
  role: string;
  password: string;
  password_confirmation?: string;
}
