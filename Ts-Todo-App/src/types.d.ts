interface Todotype {
  todo: string;
  isDone: boolean;
  id: string | number;
}
type GetFn = () => Promise<void>;
type AddFn = (text: string) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
type ToggleFn = (todo:TodoType) => Promise<void>;

