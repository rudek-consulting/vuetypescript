import store from '@/store/store';
export class DummyService {
  public getFromStore(): string {
    return store.state.mod1.p1;
  }

  public changeStoreValue(): void {
    store.dispatch.mod1.loadP1({ id: 'changed via direct' });
  }

  public changeStoreValueOriginal(): void {
    store.original.dispatch(
      'mod1/loadP1',
      { id: 'changed via original' },
      { root: true }
    );
  }
}
