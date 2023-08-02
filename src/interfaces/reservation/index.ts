import { TableInterface } from 'interfaces/table';
import { GuestInterface } from 'interfaces/guest';
import { GetQueryInterface } from 'interfaces';

export interface ReservationInterface {
  id?: string;
  table_id?: string;
  guest_id?: string;
  created_at?: any;
  updated_at?: any;

  table?: TableInterface;
  guest?: GuestInterface;
  _count?: {};
}

export interface ReservationGetQueryInterface extends GetQueryInterface {
  id?: string;
  table_id?: string;
  guest_id?: string;
}
