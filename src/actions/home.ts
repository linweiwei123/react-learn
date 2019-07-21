export interface IAgent {
  name: string,
  os: string,
  status: string,
  type: string,
  ip: string,
  location: string,
  resources: string[],
  id: number
}

export interface ICount {
  building: number,
  idle: number,
  total: number,
  physical: number,
  virtual: number
}