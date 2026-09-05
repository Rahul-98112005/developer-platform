export interface Service {
  name: string;
  owner: string;
  repositoryUrl: string;
}

export class DeveloperPlatform {
  private readonly services = new Map<string, Service>();

  registerService(service: Service): void {
    this.services.set(service.name, service);
  }

  listServices(): Service[] {
    return [...this.services.values()];
  }

  getService(name: string): Service | undefined {
    return this.services.get(name);
  }
}
