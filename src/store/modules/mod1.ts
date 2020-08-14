import {
  defineActions,
  defineGetters,
  defineModule,
  defineMutations
} from 'direct-vuex';
import { moduleActionContext, moduleGetterContext } from '../store';

/* eslint-disable @typescript-eslint/no-use-before-define */

export const namespaced = true;

export interface Mod1State {
  p1: string;
}

export const mod1Getters = defineGetters<Mod1State>()({
  getter1(...args): string {
    const { state, getters, rootState, rootGetters } = mod1GetterContext(args);
    // Here, 'getters', 'state', 'rootGetters' and 'rootState' are typed.
    // Without 'mod1GetterContext' only 'state' would be typed.
    return state.p1 || 'default';
  }
});

export const mod1Mutations = defineMutations<Mod1State>()({
  SET_P1(state, p1: string) {
    // Here, the type of 'state' is 'Mod1State'.
    state.p1 = p1;
  }
});

export const mod1Actions = defineActions({
  loadP1(context, payload: { id: string }): void {
    const { dispatch, commit, getters, state } = mod1ActionContext(context);
    // Here, 'dispatch', 'commit', 'getters' and 'state' are typed.
    commit.SET_P1(payload.id);
  }
});

const mod1 = defineModule({
  namespaced: true as true,
  state: (): Mod1State => {
    return {
      p1: ''
    };
  },
  getters: mod1Getters,
  mutations: mod1Mutations,
  actions: mod1Actions
});

export default mod1;
const mod1GetterContext = (args: [any, any, any, any]) =>
  moduleGetterContext(args, mod1);
const mod1ActionContext = (context: any) => moduleActionContext(context, mod1);
