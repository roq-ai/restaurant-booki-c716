import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GuestInterface {
  id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    reservation?: number;
  };
}

export interface GuestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
}
