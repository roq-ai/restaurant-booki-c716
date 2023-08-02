import { ChefInterface } from 'interfaces/chef';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description?: string;
  chef_id?: string;
  created_at?: any;
  updated_at?: any;

  chef?: ChefInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  chef_id?: string;
}
