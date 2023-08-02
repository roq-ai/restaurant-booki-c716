import { MenuInterface } from 'interfaces/menu';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ChefInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  menu?: MenuInterface[];
  user?: UserInterface;
  _count?: {
    menu?: number;
  };
}

export interface ChefGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
