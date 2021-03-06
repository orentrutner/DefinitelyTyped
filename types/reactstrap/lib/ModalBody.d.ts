import { CSSModule } from '../index';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
}

declare const ModalBody: React.StatelessComponent<ModalBodyProps>;
export default ModalBody;
