// --- ???????? 1 ---
function getPromise(): Promise<[string, number]> {
  return new Promise((resolve) => {
    resolve(['Text', 50]);
  });
}
getPromise().then((data) => {
  console.log(data);
});
// --- ???????? 2 ---
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};
function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
// --- ???????? 3 ---
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}
// --- ???????? 4 ---
interface ComponentProps {
  title: string;
  [key: string]: any;
}
class Component<T> {
  constructor(public props: T) {}
}
class PageClass extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
// --- ???????? 5 ---
interface KeyValuePair<K, V> {
  key: K;
  value: V;
}
// --- ???????? 6 ---
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
function createOrUpdateUser(initialValues: Partial<User>) {
  // ????????? ???????????
}
createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });
// --- ???????? 7 ---
enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};
// --- ???????? 8 ---
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};
type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};
type Params = Omit<Form, 'errors'>;
