import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generatedUniqueIdWithPrefix(prefix: string): string {
    if(!prefix){
      throw Error('Prefix can not be empty');
    }
    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public generatedUniqueId(): string {
    return uuidv4();
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds;
  }
}
