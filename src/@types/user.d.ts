/** src/@types/user.d.ts */

interface Iuser {
  name: string;
  email: string;
}

export type userContextType = {
  user: Iuser | null;
};

type Action = {
  type: 'SET_USER';
  user: Iuser;
};
