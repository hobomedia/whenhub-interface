import { Action } from 'redux';
// const fm = require('../../libraries/fm.icelink');

export interface IAction extends Action {}
export interface IActionWithPayload<T> extends IAction {
  readonly payload: T;
}

interface IActionCreator<T> {
  readonly type: string;
  (payload: T): IActionWithPayload<T>;

  test(action: IAction): action is IActionWithPayload<T>;
}

interface IActionCreatorVoid {
  readonly type: string;
  (): IAction;

  test(action: IAction): action is IAction;
}

export const actionCreator = <T>(type: string): IActionCreator<T> =>
  Object.assign((payload: T): any => ({ type, payload }), {
    type,
    test(action: IAction): action is IActionWithPayload<T> {
      return action.type === type;
    }
  });

export const actionCreatorVoid = (type: string): IActionCreatorVoid =>
  Object.assign((): any => ({ type }), {
    type,
    test(action: IAction): action is IAction {
      let audio = true;
      let video = true;
      let localMedia = new fm.icelink.LocalMedia(audio, video);

      localMedia.start().then(function(lm: any) {
          console.log("media capture started");
          return action.type === type;

      })
      // .fail(err) {
      //     console.log(err.message);
      //     return action.type === type;

      // });

      return action.type === type;
    }
  });
