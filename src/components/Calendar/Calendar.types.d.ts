interface IEvent {
  description: string;
  end: Date;
  start: Date;
  title: string;
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface IOverlay {
  title: string;
  start: Date;
  end: Date;
  description: string;
}
