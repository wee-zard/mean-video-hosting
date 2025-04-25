export default class UserAddressType {
  constructor(
    public country: string,
    public state: string,
    public postalCode: number,
    public city: string,
    public street: string,
    public house: string
  ) {}
}
