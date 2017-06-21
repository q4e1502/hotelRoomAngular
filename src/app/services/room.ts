export class Room {
  id: number;
  name: string;
  status: string;
}

const enum Status {
  opened,
  cleaning,
  closed
}