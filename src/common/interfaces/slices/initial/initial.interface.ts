export interface InitialStateTypes {
  val: number;
  stage: `idle` | `busy` | `failed`;
  failureMsg: null | string;
}
