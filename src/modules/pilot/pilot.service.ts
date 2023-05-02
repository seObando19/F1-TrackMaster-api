import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PilotService {
  pilots = [
    {
      id: '1',
      name: 'Lewis Hamilton',
    },
    {
      id: '2',
      name: 'Charles Lecler',
    },
    {
      id: '3',
      name: 'Max Vertappen',
    },
  ];

  testConexion(): string {
    return 'Routes pilots';
  }

  getPilots() {
    return this.pilots;
  }

  getPilotId(id: string) {
    const pilot = this.pilots.find((p) => p.id === id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return pilot;
  }

  createPilot(pilot) {
    this.pilots.push(pilot);
  }

  updatePilot(id: string, pilot) {
    const getPilot = this.pilots.find((p) => p.id === id);
    if (!getPilot) throw new NotFoundException('Resource no found');
    getPilot.name = pilot.name;
    return getPilot;
  }

  deletePilot(id: string) {
    const getPilot = this.pilots.findIndex((p) => p.id === id);
    if (!getPilot) throw new NotFoundException('Resource no found');
    this.pilots.splice(getPilot, 1);
  }
}
