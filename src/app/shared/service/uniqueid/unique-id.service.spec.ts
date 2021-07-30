import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  let service: UniqueIdService;
  let ids = new Set();
  const ptt = UniqueIdService.prototype;
  const testSize = 50;

  beforeEach(() => {
    service = new UniqueIdService();
    ids = new Set();
  });

  it(`#${ptt.generatedUniqueIdWithPrefix.name}
  should be generate id when called`, () => {
    const id = service.generatedUniqueIdWithPrefix('app');
    expect(id.startsWith('app')).toBeTrue();
  });

  it(`#${ptt.generatedUniqueIdWithPrefix.name}
  should be generate different id when call again`, () => {
    for (let i = 0; i < testSize; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(testSize);
  });

  it(`#${ptt.getNumberOfGeneratedIds.name}
  should return the number of generated ids when called`, () => {
    for (let i = 0; i < testSize; i++) {
      ids.add(service.generatedUniqueIdWithPrefix('app'));
    }
    expect(service.getNumberOfGeneratedIds()).toBe(testSize);
  });

  it(`#${ptt.generatedUniqueIdWithPrefix.name}
  should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach((value) => {
      expect(() => service.generatedUniqueIdWithPrefix(value))
        .withContext(`Empty value: ${value}`)
        .toThrow();
    });
  });
});
