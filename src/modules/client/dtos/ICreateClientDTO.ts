interface ICreateClientDTO {
  id?: string;
  full_name: string;
  gender: string;
  birth_date: Date;
  age: string;
  city_id: string;
}

export default ICreateClientDTO;
